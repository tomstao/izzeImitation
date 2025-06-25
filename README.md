# Tao's Dessert e-Commerce Website

A modern full-stack dessert ordering web app built with **React**, **Flask**, and **PostgreSQL**. Features user authentication, shopping cart functionality, order management, and a beautiful Material Design-inspired interface.

READEME.md last time updated 06/25/2025
## ✨ Features

### 🛒 **Shopping Experience**

- **Browse desserts** with beautiful product cards
- **Add items to cart** with quantity controls
- **Real-time cart updates** with floating cart drawer
- **Smart notifications** when items are added to cart
- **Seamless checkout** process with order confirmation

### 🔐 **User Authentication**

- **User registration** with secure password hashing
- **User login** with automatic redirect to home page
- **Profile management** with order history
- **Dynamic navbar** that adapts to login status

### 📱 **Modern UI/UX**

- **Material Design-inspired** interface
- **Responsive design** for all screen sizes
- **Interactive menus** with mutual closing logic
- **Smooth animations** and transitions
- **Loading states** and error handling

### 🛍️ **Order Management**

- **Complete order history** in user profiles
- **Expandable order details** with item breakdowns
- **Order tracking** with timestamps and totals
- **Database persistence** with proper relationships

### 🎨 **Visual Design**

- **Gradient themes** with brand colors (#9d1347, #ef88ad)
- **Beautiful product images** and layouts
- **Modern typography** and spacing
- **Consistent styling** throughout the app

---

## 🛠️ Tech Stack

### **Frontend**

- **React 18** with Vite for fast development
- **React Router** for navigation
- **Context API** for state management
- **Axios** for API communication
- **Bootstrap 5** for responsive components
- **React Icons** for beautiful icons
- **Custom CSS** with Material Design principles

### **Backend**

- **Flask** web framework
- **Flask-SQLAlchemy** for database ORM
- **Flask-CORS** for cross-origin requests
- **Werkzeug** for password hashing
- **PostgreSQL** for data persistence

### **Database**

- **PostgreSQL** with proper relationships
- **Users table** for authentication
- **Products table** for dessert catalog
- **Orders table** for order management
- **Order_items table** for order details

---

## ⚙️ Requirements

- **Python 3.10+**
- **PostgreSQL 12+**
- **Node.js 16+** and npm
- **Git** for version control

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/tomstao/izzeImitation.git
cd izzeImitation
```

### 2. **Database Setup**

```bash
# Create PostgreSQL database
createdb desserts_db

# Or if you prefer a different name
createdb your_database_name
```

### 3. **Backend Setup**

```bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Update database connection (if needed)
# Edit app.py and change the database URI:
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5432/database_name'

# Initialize database tables
python3
>>> from app import db
>>> db.create_all()
>>> exit()
```

### 4. **Seed the Database**

```bash
# Seed with sample data (users, products, orders)
psql -U your_postgres_username -d desserts_db -f backend/seed_data.sql
```

### 5. **Run the Backend**

```bash
python3 app.py
```

The Flask server will start at: [http://localhost:5000](http://localhost:5000)

### 6. **Frontend Setup**

```bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The React app will start at: [http://localhost:5173](http://localhost:5173)

---

## 📊 Database Schema

### **Users Table**

```sql
- id (Primary Key)
- name (Username, unique)
- email (Unique)
- password_hash (Hashed password)
- role (Default: 'user')
- created_at (Timestamp)
```

### **Products Table**

```sql
- id (Primary Key)
- name (Product name)
- description (Product description)
- price (Decimal)
- image_url (Product image path)
- is_popular (Boolean flag)
```

### **Orders Table**

```sql
- order_id (Primary Key)
- user_id (Foreign Key to users)
- total_price (Decimal)
- created_at (Timestamp)
```

### **Order_Items Table**

```sql
- order_item_id (Primary Key)
- order_id (Foreign Key to orders)
- product_id (Foreign Key to products)
- quantity (Integer)
- price (Decimal at time of purchase)
```

---

## 🔧 API Endpoints

### **Authentication**

- `POST /api/register` - User registration
- `POST /api/login` - User login

### **Products**

- `GET /api/products` - Get all products
- `GET /api/greeting` - Get welcome message

### **Orders**

- `POST /api/checkout` - Create new order
- `GET /api/orders/<user_id>` - Get user's order history

---

## 🎯 Key Features Explained

### **Shopping Cart System**

- **Context-based state management** for cart items
- **Persistent cart** during session
- **Quantity controls** with increment/decrement
- **Real-time total calculation**
- **Cart clearing** after successful checkout

### **User Authentication Flow**

- **Secure registration** with password hashing
- **Login validation** with proper error handling
- **Automatic redirects** after successful login
- **Session management** with localStorage

### **Order Management**

- **Relational database** design for data integrity
- **Order history** with detailed item breakdown
- **Timestamp tracking** for order management
- **User-specific orders** with proper relationships

### **UI/UX Features**

- **Mutual menu closing** - only one menu open at a time
- **Snackbar notifications** for user feedback
- **Loading states** for better UX
- **Error handling** with user-friendly messages
- **Responsive design** for mobile and desktop

---

## 🎨 Customization

### **Styling**

- **Primary color**: #9d1347 (deep pinkish red)
- **Secondary color**: #ef88ad (soft pink)
- **Background**: #f5f5dc (beige)
- **Text color**: #333 (dark gray)

### **Adding New Products**

1. Add product data to the database
2. Upload product images to `/public/assets/desserts/`
3. Update the products table with new entries

### **Modifying Features**

- **Cart behavior**: Edit `CartContext.jsx`
- **UI components**: Modify individual component files
- **API endpoints**: Update `backend/app.py`
- **Database schema**: Modify models and run migrations

---

## 🐛 Troubleshooting

### **Common Issues**

**Backend won't start:**

- Check if PostgreSQL is running
- Verify database connection string
- Ensure all dependencies are installed

**Frontend build errors:**

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for port conflicts
- Verify all imports are correct

**Database connection issues:**

- Verify PostgreSQL is running
- Check username/password in connection string
- Ensure database exists

### **Development Tips**

- Use browser dev tools for frontend debugging
- Check Flask logs for backend errors
- Use PostgreSQL logs for database issues
- Test API endpoints with curl or Postman

---

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is created as part of the QCC Software Engineering Bootcamp.

---

## 👨‍💻 Author

**Tao Su** - QCC Software Engineering Bootcamp Student

---

## 🎉 Acknowledgments

- QCC Software Engineering Bootcamp instructors
- React and Flask communities
- Material Design principles
- All dessert lovers who inspired this project! 🍰
