import React from 'react';
import Food from "../assets/Food.jpg";
import "./Header.css"
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <div className="header">
            <div className="header_left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='/booking'> <button>Reserve a table</button> </Link>
            </div>
            <img  className="header-right" src={Food}  alt=""/>
        </div>
    );
}

export default Header;