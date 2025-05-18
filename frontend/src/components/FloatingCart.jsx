// src/components/FloatingCart.jsx
import {FaShoppingCart} from 'react-icons/fa';
import '/src/css/FloatingCart.css';

function FloatingCart({itemCount = 0}) {
    return (
        <div className="floating-cart">
            <FaShoppingCart size={28}/>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </div>
    );
}

export default FloatingCart;