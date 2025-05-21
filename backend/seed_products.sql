--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Homebrew)
-- Dumped by pg_dump version 17.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: sutommy
--

INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (8, 'Peach cobbler', 'Peach', 11.99, '/assets/desserts/peach-cobbler.jpg', 'cobbler', false);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (9, 'Peach crisp', 'Peach', 9.99, '/assets/desserts/peach-crisp-1.jpg', 'crisp', false);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (4, 'Cherry Pie', 'Cherry', 10.99, '/assets/desserts/cherry-pie-1.jpg', 'Pie', true);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (5, 'Home made ice cream', 'Ice cream', 5.99, '/assets/desserts/homemade-ice-cream-recipe.jpg', 'Ice cream', true);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (6, 'Non-baked cookies', 'Cookies', 3.99, '/assets/desserts/no-bake-cookies.jpg', 'Cookies', true);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (7, 'Ice cream cake', 'Cake', 10.99, '/assets/desserts/best-ice-cream-cake.jpg', 'cake', false);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (10, 'Rhubarb crisp', 'crisp', 9.99, '/assets/desserts/rhubarb-crisp-1.jpg', 'crisp', false);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (11, 'Watermelon popcicle', 'Water popsicle', 3.99, '/assets/desserts/watermelon-popsicles-1.jpg', 'popsicle', false);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (12, 'Zucchini brownie', 'zucchini', 11.99, '/assets/desserts/zucchini-brownies-1.jpg', 'brownie', false);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (1, 'Strawberry shortcake', 'Strawberry flavor', 10.99, '/assets/desserts/strawberry_shorcake.jpg', 'cake', true);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (2, 'Blueberry bread', 'Bluberry', 12.99, '/assets/desserts/blueberry-bread-recipe.jpg', 'cake', true);
INSERT INTO public.products (id, name, description, price, image_url, category, is_popular) VALUES (3, 'Blueberry cobbler', 'Bluberry', 11.99, '/assets/desserts/blueberry-cobbler-1.jpg', 'cake', true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sutommy
--

SELECT pg_catalog.setval('public.products_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

