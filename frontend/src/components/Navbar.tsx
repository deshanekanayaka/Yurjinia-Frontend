
const Navbar = () => {
    return (

        <nav className="navbar">
            <a href="/" className="navbar__logo">Yurjinia</a>

            <div className="navbar__user">
                <img
                    src="src/assets/john.jpg"
                    alt="John Avatar"
                    className="navbar__user-avatar"
                />

                <div className="navbar__user-info">
                    <h2 className="navbar__user-name text-style-1">John Doe</h2>
                    <p className="navbar__user-email text-style-2">john@yurjinia.com</p>
                </div>
            </div>
        </nav>

    )
}
export default Navbar
