import React from 'react';
import "./Card.css"
import { MdDeliveryDining } from "react-icons/md";
function Card(props) {

    const {item} = props
    return (
        <div className="card">
            <img src={item.img}  alt=""/>
            <p id="title">{item.title}</p>
            <p id="price">C${item.price}</p>
            <p id="des">{item.description}</p>
            <p id="order">Order a delivery
                <MdDeliveryDining
                size={30}
                style={{
                    color: "#333",
                    marginLeft: "15px",
                    marginBottom: "-10px",
                }}
            /></p>
        </div>
    );
}

export default Card;