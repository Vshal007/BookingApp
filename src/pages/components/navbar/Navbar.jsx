import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                    <span className="logo">
                        booking
                    </span>
                </Link>
                <div className="navItems">
                    <button className="navButtons">Register</button>
                    <button className="navButtons">Login</button>

                </div>
            </div>
        </div>

    )
}

export default Navbar