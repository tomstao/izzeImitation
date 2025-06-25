-- Tao's Dessert e-Commerce Database Seed Data
-- This file contains sample data for users, products, and orders
-- Run this file to populate your database with initial data

-- Clear existing data (if any)
TRUNCATE TABLE order_items CASCADE;
TRUNCATE TABLE orders CASCADE;
TRUNCATE TABLE products CASCADE;
TRUNCATE TABLE users CASCADE;

-- Reset sequences
ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE products_id_seq RESTART WITH 1;
ALTER SEQUENCE orders_order_id_seq RESTART WITH 1;
ALTER SEQUENCE order_items_order_item_id_seq RESTART WITH 1;

-- Insert Users (password is 'password123' for all users)
INSERT INTO users (name, email, password_hash, role, created_at) VALUES
('test', 'test@gmail.com', 'pbkdf2:sha256:600000$test123$hash', 'user', CURRENT_TIMESTAMP),
('john_doe', 'john@example.com', 'pbkdf2:sha256:600000$test123$hash', 'user', CURRENT_TIMESTAMP),
('jane_smith', 'jane@example.com', 'pbkdf2:sha256:600000$test123$hash', 'user', CURRENT_TIMESTAMP),
('admin', 'admin@taosdessert.com', 'pbkdf2:sha256:600000$test123$hash', 'admin', CURRENT_TIMESTAMP);

-- Insert Products
INSERT INTO products (name, description, price, image_url, is_popular) VALUES
('Strawberry shortcake', 'Strawberry flavor', 10.99, '/assets/desserts/strawberry_shorcake.jpg', true),
('Blueberry bread', 'Bluberry', 12.99, '/assets/desserts/blueberry-bread-recipe.jpg', true),
('Blueberry cobbler', 'Bluberry', 11.99, '/assets/desserts/blueberry-cobbler-1.jpg', true),
('Cherry Pie', 'Cherry', 10.99, '/assets/desserts/cherry-pie-1.jpg', true),
('Home made ice cream', 'Ice cream', 5.99, '/assets/desserts/homemade-ice-cream-recipe.jpg', true),
('Non-baked cookies', 'Cookies', 3.99, '/assets/desserts/no-bake-cookies.jpg', true),
('Ice cream cake', 'Cake', 10.99, '/assets/desserts/best-ice-cream-cake.jpg', false),
('Peach cobbler', 'Peach', 11.99, '/assets/desserts/peach-cobbler.jpg', false),
('Peach crisp', 'Peach', 9.99, '/assets/desserts/peach-crisp-1.jpg', false),
('Rhubarb crisp', 'crisp', 9.99, '/assets/desserts/rhubarb-crisp-1.jpg', false),
('Watermelon popcicle', 'Water popsicle', 3.99, '/assets/desserts/watermelon-popsicles-1.jpg', false),
('Zucchini brownie', 'zucchini', 11.99, '/assets/desserts/zucchini-brownies-1.jpg', false);

-- Insert Sample Orders
INSERT INTO orders (user_id, total_price, created_at) VALUES
(1, 21.98, CURRENT_TIMESTAMP - INTERVAL '2 days'),
(1, 12.99, CURRENT_TIMESTAMP - INTERVAL '1 day'),
(2, 15.98, CURRENT_TIMESTAMP - INTERVAL '3 hours'),
(3, 25.97, CURRENT_TIMESTAMP - INTERVAL '1 hour');

-- Insert Order Items
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
-- Order 1: User 1 - Strawberry shortcake x2
(1, 1, 2, 10.99),

-- Order 2: User 1 - Blueberry bread x1
(2, 2, 1, 12.99),

-- Order 3: User 2 - Cherry pie + Non-baked cookies
(3, 4, 1, 10.99),
(3, 6, 1, 3.99),

-- Order 4: User 3 - Blueberry cobbler + Home made ice cream + Watermelon popsicle
(4, 3, 1, 11.99),
(4, 5, 1, 5.99),
(4, 11, 2, 3.99);

-- Verify the data
SELECT 'Users count:' as info, COUNT(*) as count FROM users
UNION ALL
SELECT 'Products count:', COUNT(*) FROM products
UNION ALL
SELECT 'Orders count:', COUNT(*) FROM orders
UNION ALL
SELECT 'Order items count:', COUNT(*) FROM order_items;

-- Show sample data
SELECT 'Sample Users:' as info;
SELECT id, name, email, role FROM users LIMIT 3;

SELECT 'Sample Products:' as info;
SELECT id, name, price, is_popular FROM products LIMIT 5;

SELECT 'Sample Orders:' as info;
SELECT o.order_id, u.name as user_name, o.total_price, o.created_at 
FROM orders o 
JOIN users u ON o.user_id = u.id 
ORDER BY o.created_at DESC 
LIMIT 3;

SELECT 'Sample Order Items:' as info;
SELECT oi.order_item_id, p.name as product_name, oi.quantity, oi.price
FROM order_items oi
JOIN products p ON oi.product_id = p.id
ORDER BY oi.order_id, oi.order_item_id
LIMIT 5; 