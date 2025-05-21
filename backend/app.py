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
        return jsonify({'error': 'Missing data'}), 400

    new_order = Order(
        user_id=user_id,
        items=str(items),
        total_price=total_price
    )
    db.session.add(new_order)
    db.session.commit()

    return jsonify({'message': 'Order placed successfully'}), 201

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
    items = db.Column(db.Text, nullable=False)
    total_price = db.Column(db.Numeric(10, 2), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

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