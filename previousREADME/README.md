#Tao's Dessert e-commerce Website

## A mock full-stack dessert ordering website built with **React**, **Flask**, and **PostgreSQL**
This project is still a work in progress — a few features are being added and some bugs are being fixed. Thanks for your patience and your liking!

## Requirements

- Python 3.10+
- PostgreSQL
- Node.js + npm

---

## Getting Started

### 

```bash
1. Clone the repository
git clone https://github.com/your-username/minimerchant.git
cd minimerchant




Backend Setup (Flask)

2. Create a PostgreSQL database

createdb desserts_db

3. Set up virtual environment

cd backend
python3 -m venv venv // or python -m venv venv


source venv/bin/activate
pip install -r requirements.txt

Make sure you have installed Flask, Flask-CORS, Flask-SQLAlchemy, and psycopg2-binary.



4. Create tables (via Flask shell or model)

If using SQLAlchemy, include:

from app import db
db.create_all()





5. Seed product data

psql -U your_postgres_username -d desserts_db -f seed_products.sql

This will populate the products table with sample desserts.



6. Run the Flask backend

python app.py

Flask will start at:
http://localhost:5000



Frontend Setup (React + Vite)

7. Run the frontend

cd ../frontend
npm install
npm run dev

React app runs at:
http://localhost:5173

For Instructor / Reviewer

You only need to:
	1.	Run seed_products.sql
	2.	Start Flask backend
	3.	Start React frontend

All product cards will appear automatically from the database.

⸻

Live Features
	•	Browse desserts
	•	View popular vs regular items
	•	Add items to cart with adjustable quantity
	•	See cart in a fullscreen drawer
	•	View total and mock “Checkout” button

⸻
Schema:
-- USERS table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PRODUCTS table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    is_popular BOOLEAN DEFAULT FALSE
);

-- ORDERS table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    items TEXT NOT NULL, 
    total_price NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
  
  CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);
  
Seed File Info

File: backend/seed_products.sql
How to use:
##  Load Product Seed Data

1. Make sure PostgreSQL is running and the `desserts_db` database exists.
2. From the project root, run:

```bash
psql -U your_postgres_username -d desserts_db -f backend/seed_products.sql
The cards display depends on the data seed, if you can't see the cards, please seed the data first




⸻

Screenshots


⸻


⸻

License

MIT License

---
```
