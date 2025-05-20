import {useState} from 'react';
import '/src/css/Card.css';
import {useCart} from "./CartContext.jsx";

function Card() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();

    const product = {
        id: 'chocolate-cake',
        name: 'Chocolate Cake',
        price: 8.99,
        image: 'src/assets/desserts/strawberry_shorcake.jpg',
    };

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className="card border-0" style={{width: '18rem'}}>
            <img src="src/assets/desserts/strawberry_shorcake.jpg" className="card-img-top rounded-5 shadow"
                 alt="dessert"/>
            <div className="card-body text-center">
                <h5 className="card-title">Chocolate Cake</h5>
                <p className="card-text">Rich and moist chocolate layered cake.</p>

                {/* Quantity Selector */}
                <div className="quantity-control d-flex justify-content-center align-items-center mb-3">
                    <button className="qty-btn" onClick={decrement}>–</button>
                    <span className="qty-number mx-3">{quantity}</span>
                    <button className="qty-btn" onClick={increment}>+</button>
                </div>
                <a href="#" className="btn btn-primary rounded-5 order-btn border-0 shadow"
                   onClick={(e) => {
                       e.preventDefault();
                       addToCart(product, quantity);
                   }}>
                    Add to Cart
                </a>
            </div>
        </div>
    );
}

export default Card;