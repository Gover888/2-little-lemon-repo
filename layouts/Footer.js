import React from 'react';
import "./Footer.css"
function Footer(props) {
    return (
        <div className="footer">
            <div className="contact">
               <p> Contact Us </p>
                <ul >
                    <li>Address: 123 Test Street</li>
                    <li>Email: order@littlelemon.com</li>
                    <li>Phone: 032 329 5733</li>
                </ul>
            </div>
            <div className="open_time">
                <p>Opening times</p>
                <ul>
                    <li>Monday - Friday: 9:00 - 22:00</li>
                    <li>Saturday - Sunday: 10:00 - 24:00</li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;