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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: order_items; Type: TABLE; Schema: public; Owner: sutommy
--

CREATE TABLE public.order_items (
    order_item_id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL
);


ALTER TABLE public.order_items OWNER TO sutommy;

--
-- Name: order_items_order_item_id_seq; Type: SEQUENCE; Schema: public; Owner: sutommy
--

CREATE SEQUENCE public.order_items_order_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_items_order_item_id_seq OWNER TO sutommy;

--
-- Name: order_items_order_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sutommy
--

ALTER SEQUENCE public.order_items_order_item_id_seq OWNED BY public.order_items.order_item_id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: sutommy
--

CREATE TABLE public.orders (
    order_id integer NOT NULL,
    user_id integer,
    total_price numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.orders OWNER TO sutommy;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: sutommy
--

CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_order_id_seq OWNER TO sutommy;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sutommy
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: sutommy
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    image_url text,
    category text,
    is_popular boolean DEFAULT false,
    CONSTRAINT products_price_check CHECK ((price >= (0)::numeric))
);


ALTER TABLE public.products OWNER TO sutommy;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: sutommy
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO sutommy;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sutommy
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: sutommy
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password_hash text NOT NULL,
    name text,
    role text DEFAULT 'user'::text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO sutommy;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: sutommy
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO sutommy;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sutommy
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: order_items order_item_id; Type: DEFAULT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.order_items ALTER COLUMN order_item_id SET DEFAULT nextval('public.order_items_order_item_id_seq'::regclass);


--
-- Name: orders order_id; Type: DEFAULT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: sutommy
--



--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: sutommy
--



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
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: sutommy
--

INSERT INTO public.users (id, email, password_hash, name, role, created_at) VALUES (1, 'test@gmail.com', 'scrypt:32768:8:1$I0vhU9gkff0fq8QR$375e3b0e901f27a1ff31d55ebfe022cabffaa43a4bd678b935cc589cff1b2299260cf4557f6cb0994868ff66003d0e09c69a945e881bee05a1a129110817eb28', 'test', 'user', '2025-05-21 09:36:08.691465');


--
-- Name: order_items_order_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sutommy
--

SELECT pg_catalog.setval('public.order_items_order_item_id_seq', 1, false);


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sutommy
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sutommy
--

SELECT pg_catalog.setval('public.products_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sutommy
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (order_item_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id) ON DELETE CASCADE;


--
-- Name: order_items order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: sutommy
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

