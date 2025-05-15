import {useState} from "react";
import '/src/css/MenuButton.css'

function MenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <div className={`line top ${isOpen ? 'open' : ''}`}></div>
            <div className={`line bottom ${isOpen ? 'open' : ''}`}></div>
        </div>
    );
}

export default MenuButton;