import Btn from "/src/components/Buttons.jsx";
import Navbar from "./Navbar.jsx";

function Header() {

    return (
        <>
            <header className="text-white py-3 header mb-5">
                <div className="container row">
                    <Navbar/>
                    <div className="left-btn-wrapper">
                        <Btn className="header-btn" id={"more"}>{'NEW items'}</Btn>
                        <Btn className="header-btn" id={"popular"}>{'Popular sweets'}</Btn>
                    </div>
                    <div className='container mt-5 quote-container row px-lg-5'>
                        <h1 className='blockquote quote-title quote row'>MEET OUR</h1>
                        <h1 className='blockquote quote-subtitle quote row'>Sweets</h1>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;