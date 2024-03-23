import "./navbar.css";
import navlogo from "../../assets/navlogo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={navlogo} alt="image"></img>
                <h1>GeekFoods</h1>
            </div>
            <div className="navbar-items">
                <ul className="ul-items">
                    <li>
                        <NavLink to='/' className='link first-li'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/quote' className='link'>Quote</NavLink>
                    </li>

                    <li>
                        <NavLink to='/resturant' className='link'>Resturant</NavLink>
                    </li>

                    <li>
                        <NavLink to='/food' className='link'>Food</NavLink>
                    </li>

                    <li>
                        <NavLink to='/contact' className='link'>Contact</NavLink>
                    </li>

                </ul>
            </div>
            <div className="nav-btn">
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;
