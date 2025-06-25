from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask import request
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://sutommy:9750@localhost:5432/desserts_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

@app.route('/api/greeting')
def greet():
    return jsonify(message="Enjoy the sweetness!")

@app.route('/api/products')
def get_products():
    products = Product.query.all()
    return jsonify([
        {
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "price": float(p.price),
            "image_url": p.image_url,
            "is_popular": p.is_popular
        }
        for p in products
    ])

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not all([name, email, password]):
        return jsonify({'error': 'All fields are required'}), 400

    existing_user = User.query.filter((User.email == email) | (User.name == name)).first()
    if existing_user:
        return jsonify({'error': 'Email or username already exists'}), 409

    hashed_password = generate_password_hash(password)

    new_user = User(name=name, email=email, password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully! Click home to go back!'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({'error': 'Invalid email or password'}), 401

    if not check_password_hash(user.password_hash, password):
        return jsonify({'error': 'Invalid email or password'}), 401

    return jsonify({
        'message': 'Login successful',
        'user': {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role
        }
    }), 200

@app.route('/api/checkout', methods=['POST'])
def checkout():
    data = request.get_json()
    user_id = data.get('user_id')
    items = data.get('items')
    total_price = data.get('total_price')

    if not all([user_id, items, total_price]):
        return jsonify({'error': 'Missing required data: user_id, items, and total_price are required'}), 400

    # Validate user exists
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Validate items is not empty
    try:
        items_data = items if isinstance(items, str) else str(items)
        if not items_data or items_data == '[]':
            return jsonify({'error': 'Cart is empty'}), 400
    except Exception as e:
        return jsonify({'error': 'Invalid items data format'}), 400

    # Validate total_price is a valid number
    try:
        total_price = float(total_price)
        if total_price <= 0:
            return jsonify({'error': 'Total price must be greater than 0'}), 400
    except (ValueError, TypeError):
        return jsonify({'error': 'Invalid total price format'}), 400

    try:
        # Create the order
        new_order = Order(
            user_id=user_id,
            total_price=total_price
        )
        db.session.add(new_order)
        db.session.flush()  # Get the order_id
        
        # Parse items and create order_items
        items_list = items if isinstance(items, list) else eval(items)
        for item in items_list:
            order_item = OrderItem(
                order_id=new_order.order_id,
                product_id=item['id'],
                quantity=item['quantity'],
                price=float(item['price'])
            )
            db.session.add(order_item)
        
        db.session.commit()

        return jsonify({
            'message': 'Order placed successfully',
            'order_id': new_order.order_id,
            'total': float(new_order.total_price)
        }), 201
    except Exception as e:
        db.session.rollback()
        print(f"Checkout error: {str(e)}")  # For debugging
        return jsonify({'error': 'Failed to create order. Please try again.'}), 500

@app.route('/api/orders/<int:user_id>', methods=['GET'])
def get_user_orders(user_id):
    # Validate user exists
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    try:
        orders = Order.query.filter_by(user_id=user_id).order_by(Order.created_at.desc()).all()
        result = []
        for order in orders:
            # Get order items
            order_items = OrderItem.query.filter_by(order_id=order.order_id).all()
            items_data = []
            for item in order_items:
                product = Product.query.get(item.product_id)
                items_data.append({
                    'id': item.product_id,
                    'name': product.name if product else 'Unknown Product',
                    'price': float(item.price),
                    'quantity': item.quantity
                })
            
            result.append({
                'order_id': order.order_id,
                'items': items_data,
                'total_price': float(order.total_price),
                'created_at': order.created_at.isoformat() if order.created_at else None
            })
        
        return jsonify(result), 200
    except Exception as e:
        print(f"Get orders error: {str(e)}")  # For debugging
        return jsonify({'error': 'Failed to retrieve orders'}), 500

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    image_url = db.Column(db.Text)
    is_popular = db.Column(db.Boolean, default=False)

class Order(db.Model):
    __tablename__ = 'orders'

    order_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    total_price = db.Column(db.Numeric(10, 2), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    order_items = db.relationship('OrderItem', backref='order', lazy=True, cascade='all, delete-orphan')

class OrderItem(db.Model):
    __tablename__ = 'order_items'

    order_item_id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.order_id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)  # username
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    role = db.Column(db.String(20), default='user')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    orders = db.relationship('Order', backref='user', lazy=True)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')