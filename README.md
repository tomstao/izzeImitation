# Tao's Dessert e-Commerce Website

A mock full-stack dessert ordering web app built with **React**, **Flask**, and **PostgreSQL**. This app allows users to register, log in, browse dessert items, add them to a cart, and simulate checkout. It was created as part of the QCC Software Engineering Bootcamp.(This is a new README.md if you want to see the old one, please check out the previousREDEME folder.)

---

## 🛠️ Tech Stack

- **Frontend**: React, Bootstrap, Vite
- **Backend**: Flask, Flask-CORS, Flask-SQLAlchemy
- **Database**: PostgreSQL
- **Other**: Axios, FontAwesome, React Icons

---

## ⚙️ Requirements

- Python 3.10+
- PostgreSQL
- Node.js + npm

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
# Clone the repository
git clone https://github.com/tomstao/izzeImitation.git

# Set up the backend
cd izzeImitation/backend
# After backend setup, switch to frontend
cd ../frontend
# if you are in the root folder, simply use cd backend or cd frontend
```
# 
### 2. Setup the PostgreSQL database

```bash
createdb desserts_db
```

### 3. Backend Setup (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Initialize the database:

```bash
python
>>> from app import db
>>> db.create_all()
>>> exit()
```

### 4. Seed full database (products, users, orders)

```bash
psql -U your_postgres_username -d desserts_db -f backend/seed_full.sql
```

### 5. Run the backend

```bash
python app.py
```

Flask will start at: [http://localhost:5000](http://localhost:5000)

---

### 6. Frontend Setup (React)

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run at: [http://localhost:5173](http://localhost:5173)

---

## ✅ Features

- Browse dessert cards
- View popular vs regular desserts
- Add items to cart with adjustable quantity
- Register & login with secure password hashing
- View total and simulate checkout
- Order is stored with user and item info

---

## 📦 Database Schema

```sql
-- USERS
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PRODUCTS
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    is_popular BOOLEAN DEFAULT FALSE
);

-- ORDERS
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    items TEXT NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ORDER_ITEMS
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);
```

---

## 📂 Data Seed Info

**File**: `backend/seed_full.sql`

This file contains insert data for all tables: products, users, and orders.

### Load the data:

```bash
psql -U your_postgres_username -d desserts_db -f backend/seed_full.sql
```

If cards don’t show up, make sure the seed data was loaded correctly.

---

## 🖼️ Screenshots

_(Coming soon..)_

---

## 📝 License

MIT License