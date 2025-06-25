import { useState } from "react";
import {
  FaShoppingCart,
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";
import { useCart } from "./CartContext.jsx";
import { useUI } from "./UIContext.jsx";
import "/src/css/FloatingCart.css";
import axios from "axios";

function FloatingCart() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const { cartDrawerOpen, openCartDrawer, closeCartDrawer } = useUI();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please login to checkout.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setIsCheckingOut(true);
    try {
      const res = await axios.post("http://localhost:5000/api/checkout", {
        user_id: user.id,
        items: cartItems,
        total_price: parseFloat(total.toFixed(2)),
      });

      // Clear the cart after successful checkout
      clearCart();

      // Close the cart drawer
      closeCartDrawer();

      // Show success message
      alert(
        "🎉 " + res.data.message + "\nYour order has been placed successfully!"
      );
    } catch (err) {
      console.error("Checkout error:", err.response?.data || err.message);
      alert(
        "❌ Checkout failed: " + (err.response?.data?.error || err.message)
      );
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <div className="floating-cart-icon" onClick={openCartDrawer}>
        <FaShoppingCart size={24} />
        <span className="cart-count">{cartItems.length}</span>
      </div>

      {cartDrawerOpen && (
        <div className="cart-backdrop" onClick={closeCartDrawer}></div>
      )}

      <div className={`cart-drawer ${cartDrawerOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h4>Your Cart ({cartItems.length} items)</h4>
          <button className="close-btn" onClick={closeCartDrawer}>
            {/*<FaTimes />*/}
          </button>
        </div>

        <ul className="cart-list">
          {cartItems.length === 0 ? (
            <li className="text-center text-muted">Your cart is empty.</li>
          ) : (
            cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <div className="cart-qty-control">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="cart-total mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <strong>Total:</strong>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="checkout-btn-wrapper mt-3">
            <button
              className="checkout-btn"
              disabled={cartItems.length === 0 || isCheckingOut}
              onClick={handleCheckout}
            >
              {isCheckingOut ? "Processing..." : "Checkout"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FloatingCart;
