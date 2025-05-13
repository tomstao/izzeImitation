
function Header() {
    function Nav() {

        return(
            <>
                <nav className="navbar header-nav d-flex justify-content-between align-items-center p-4">
                    <h1 className="navbar-brand text-light fs-2">IZZE</h1>
                    <button className="btn btn-outline-light fs-2">Menu</button>
                </nav>
            </>
        )
    }


    return (
        <>
        <header className="text-white py-3 vh-100 header position-relative">
            <div className="container">
            <Nav/>
            </div>
        </header>
        </>
    );
}

export default Header;