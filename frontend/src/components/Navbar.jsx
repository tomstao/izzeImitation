import {useEffect, useState} from "react";
import MenuButton from "./MenuButton";
import '/src/css/Navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);



    return (
        <>
            <nav
                className={`navbar header-nav fixed-top d-flex justify-content-between align-items-center p-2 ${scrolled || menuOpen ? 'scrolled' : 'transparent'}`}>
                <h1 className="navbar-brand fs-2">
          <span className="nav-title" style={{fontStyle: 'italic', fontFamily: 'cursive'}}>
            Tao's Dessert
          </span>
                </h1>
                <MenuButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)}/>
            </nav>
            <div className={`menu-overlay ${menuOpen ? 'open' : 'closed'}`}>
                <ul className="menu-links">
                    <li><a href="/login">Login</a></li>

                    <li>
                        {/*<Link to="/register" onClick={() => setMenuOpen(false)}>*/}
                        {/*    Register*/}
                        {/*</Link>*/}
                        {/*<a href="/register" target="_blank" rel="noopener noreferrer">Register</a>*/}
                        <a
                            href="/register#register-page"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                        >
                            Register
                        </a>
                    </li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;