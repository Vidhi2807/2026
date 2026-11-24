import React from "react";
//import card from "./Card.jsx"

export default function Cardholder(element){
    return(
        <div className="content">
            <div className="card">
                <div className="imageContainer"><img src={Element.image} alt="" className="image" />
                </div>
                <p className="title">{Element.title}</p>
                <p className="desc">{Element.desc}</p>
                <p >{Element.num}</p>
                <button className='btn'>Read More</button>
            </div>
        </div>
    )
}