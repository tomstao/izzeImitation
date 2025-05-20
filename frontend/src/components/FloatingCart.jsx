import {useState} from 'react';
import {FaShoppingCart, FaTimes, FaPlus, FaMinus, FaTrash} from 'react-icons/fa';
import {useCart} from './CartContext.jsx';
import '/src/css/FloatingCart.css';

function FloatingCart() {
    const {cartItems, updateQuantity, removeFromCart} = useCart();
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="floating-cart-icon" onClick={() => setIsOpen(true)}>
                <FaShoppingCart size={24}/>
                <span className="cart-count">{cartItems.length}</span>
            </div>

            {isOpen && <div className="cart-backdrop" onClick={() => setIsOpen(false)}></div>}

            <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h4>Your Cart</h4>
                    {/*<button className="close-btn" onClick={() => setIsOpen(false)}>*/}
                    {/*    <FaTimes/>*/}
                    {/*</button>*/}
                {/*    You can enable the close btn here, but it will overlay on the nav bar*/}


                </div>

                <ul className="cart-list">
                    {cartItems.length === 0 ? (
                        <li>Your cart is empty.</li>
                    ) : (
                        cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item-info">
                                    <strong>{item.name}</strong>
                                    <div className="cart-qty-control">
                                        <button onClick={() => updateQuantity(item.id, -1)}>
                                            <FaMinus/>
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>
                                            <FaPlus/>
                                        </button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <FaTrash/>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
                <div className="cart-total mt-3">
                    {/*<hr />*/}
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>Total:</strong>
                        <span>${total.toFixed(2)}</span>
                        <div className="checkout-btn-wrapper mt-3">
                            <button className="checkout-btn" disabled={cartItems.length === 0}
                                    onClick={() => alert("Checkout not implemented yet!")}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FloatingCart;