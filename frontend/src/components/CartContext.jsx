import { createContext, useContext, useState, useRef, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const snackbarTimeout = useRef(null);

  // Auto-hide snackbar after 2 seconds
  useEffect(() => {
    if (snackbar.open) {
      if (snackbarTimeout.current) clearTimeout(snackbarTimeout.current);
      snackbarTimeout.current = setTimeout(() => {
        setSnackbar({ open: false, message: "" });
      }, 2000);
    }
    return () => {
      if (snackbarTimeout.current) clearTimeout(snackbarTimeout.current);
    };
  }, [snackbar.open]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        setSnackbar({
          open: true,
          message: `Added more ${product.name} to cart!`,
        });
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        setSnackbar({ open: true, message: `Added ${product.name} to cart!` });
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (productId, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const closeSnackbar = () => {
    setSnackbar({ open: false, message: "" });
    if (snackbarTimeout.current) clearTimeout(snackbarTimeout.current);
  };

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    snackbar,
    closeSnackbar,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
