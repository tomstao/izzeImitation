import MenuButton from "./MenuButton.jsx";
import { useEffect, useState } from "react";
import "/src/css/Navbar.css"

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`navbar header-nav d-flex justify-content-between align-items-center p-3 z-1 ${
                scrolled ? "scrolled" : "transparent"
            }`}
        >
            <h1 className="navbar-brand fs-2">
        <span
            className="nav-title"
            style={{ fontStyle: "italic", fontFamily: "cursive" }}
        >
          Tao's dessert
        </span>
            </h1>
            <MenuButton />
        </nav>
    );
}

export default Navbar;