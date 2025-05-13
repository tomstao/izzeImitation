import Btn from "./Buttons.jsx";
function Header() {
    function Nav() {

        return(
            <>
                <nav className="navbar header-nav d-flex justify-content-between align-items-center p-4">
                    <h1 className="navbar-brand fs-2"><span className='nav-title' style={{ fontStyle: 'italic', fontFamily: 'cursive' }}>Tao's dessert</span></h1>
                    <button className="btn btn-outline-light fs-2 menu">Menu</button>
                </nav>
            </>
        )
    }


    return (
        <>
        <header className="text-white py-3 header">
            <div className="container row">
            <Nav/>
                <div className="left-btn-wrapper">
                    <Btn className="header-btn">{'NEW items'}</Btn>
                    <Btn className="header-btn">{'Popular sweets'}</Btn>
                </div>
                <div className='container mt-5 quote-container row'>
                    <h1 className='blockquote quote-title quote row'>MEET OUR</h1>
                    <h1 className='blockquote quote-subtitle quote row'>Sweets</h1>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;