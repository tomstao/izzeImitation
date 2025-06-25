import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const useUI = () => useContext(UIContext);

export function UIProvider({ children }) {
  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const openNavbarMenu = () => {
    setNavbarMenuOpen(true);
    setCartDrawerOpen(false); // Close cart when navbar opens
  };

  const closeNavbarMenu = () => {
    setNavbarMenuOpen(false);
  };

  const toggleNavbarMenu = () => {
    if (navbarMenuOpen) {
      closeNavbarMenu();
    } else {
      openNavbarMenu();
    }
  };

  const openCartDrawer = () => {
    setCartDrawerOpen(true);
    setNavbarMenuOpen(false); // Close navbar when cart opens
  };

  const closeCartDrawer = () => {
    setCartDrawerOpen(false);
  };

  const toggleCartDrawer = () => {
    if (cartDrawerOpen) {
      closeCartDrawer();
    } else {
      openCartDrawer();
    }
  };

  const value = {
    navbarMenuOpen,
    cartDrawerOpen,
    openNavbarMenu,
    closeNavbarMenu,
    toggleNavbarMenu,
    openCartDrawer,
    closeCartDrawer,
    toggleCartDrawer,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export default UIProvider;
