import React from 'react';
import Logo from "../assets/Logo.svg";
import {Link, NavLink} from "react-router-dom";
import "./NavBar.css"
function NavBar(props) {
    return (
        <div className="nav">
            <Link to="/"> <img src={Logo} alt="little lemon"/></Link>
            <ul>
                <Link to='/'><li>Home</li> </Link>
                <li>About</li>
                <li>Menu</li>
               <Link to='/booking'><li>Reservation</li>  </Link>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>
    );
}

export default NavBar;