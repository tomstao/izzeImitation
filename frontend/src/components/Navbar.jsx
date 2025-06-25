import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import "/src/css/Navbar.css";
// import {Link} from 'react-router-dom';
import LogoutButton from "./LogoutButton";
import { useUI } from "./UIContext.jsx";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const user = localStorage.getItem("user");
  const { navbarMenuOpen, closeNavbarMenu, toggleNavbarMenu } = useUI();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (navbarMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarMenuOpen]);

  return (
    <>
      <nav
        className={`navbar header-nav fixed-top d-flex justify-content-between align-items-center p-2 ${
          scrolled || navbarMenuOpen ? "scrolled" : "transparent"
        }`}
      >
        <h1 className="navbar-brand fs-2">
          <span
            className="nav-title"
            style={{ fontStyle: "italic", fontFamily: "cursive" }}
          >
            Tao's Dessert
          </span>
        </h1>
        <MenuButton isOpen={navbarMenuOpen} toggle={toggleNavbarMenu} />
      </nav>
      <div className={`menu-overlay ${navbarMenuOpen ? "open" : "closed"}`}>
        <ul className="menu-links">
          {!user ? (
            <>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a
                  href="/register#register-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbarMenu}
                >
                  Register
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/profile" onClick={closeNavbarMenu}>
                  Profile
                </a>
              </li>
              <li>
                <LogoutButton />
              </li>
            </>
          )}

          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
