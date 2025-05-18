import '/src/css/MenuButton.css';

function MenuButton({isOpen, toggle}) {
    return (
        <div className="menu-btn" onClick={toggle}>
            <div className={`line top ${isOpen ? 'open' : ''}`}></div>
            <div className={`line bottom ${isOpen ? 'open' : ''}`}></div>
        </div>
    );
}

export default MenuButton;