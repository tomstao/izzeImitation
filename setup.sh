#!/bin/bash

# Tao's Dessert e-Commerce Setup Script
# This script automates the setup process for the dessert ordering application

echo "🍰 Welcome to Tao's Dessert e-Commerce Setup!"
echo "=============================================="

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL first."
    echo "   Visit: https://www.postgresql.org/download/"
    exit 1
fi

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 first."
    echo "   Visit: https://www.python.org/downloads/"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Prerequisites check passed!"

# Database setup
echo ""
echo "🗄️  Setting up database..."
read -p "Enter your PostgreSQL username (default: postgres): " DB_USER
DB_USER=${DB_USER:-postgres}

read -p "Enter your PostgreSQL password: " DB_PASSWORD
read -p "Enter database name (default: desserts_db): " DB_NAME
DB_NAME=${DB_NAME:-desserts_db}

# Create database
echo "Creating database '$DB_NAME'..."
createdb -U $DB_USER $DB_NAME 2>/dev/null || echo "Database already exists or creation failed."

# Backend setup
echo ""
echo "🐍 Setting up Python backend..."
cd backend

# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

# Update database connection in app.py
echo "Updating database connection..."
sed -i.bak "s|postgresql://sutommy:9750@localhost:5432/desserts_db|postgresql://$DB_USER:$DB_PASSWORD@localhost:5432/$DB_NAME|g" app.py

# Initialize database tables
echo "Initializing database tables..."
python3 -c "
from app import db
db.create_all()
print('Database tables created successfully!')
"

# Seed the database
echo "Seeding database with sample data..."
PGPASSWORD=$DB_PASSWORD psql -U $DB_USER -d $DB_NAME -f seed_data.sql

cd ..

# Frontend setup
echo ""
echo "⚛️  Setting up React frontend..."
cd frontend

# Install dependencies
echo "Installing Node.js dependencies..."
npm install

cd ..

echo ""
echo "🎉 Setup completed successfully!"
echo "=============================================="
echo ""
echo "To start the application:"
echo ""
echo "1. Start the backend:"
echo "   cd backend"
echo "   source venv/bin/activate"
echo "   python3 app.py"
echo ""
echo "2. In a new terminal, start the frontend:"
echo "   cd frontend"
echo "   npm run dev"
echo ""
echo "3. Open your browser and go to:"
echo "   http://localhost:5173"
echo ""
echo "📝 Test Accounts:"
echo "   - Email: test@gmail.com, Password: password123"
echo "   - Email: john@example.com, Password: password123"
echo "   - Email: jane@example.com, Password: password123"
echo ""
echo "🍰 Enjoy your dessert ordering experience!" 