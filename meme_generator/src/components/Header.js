import React from "react";
import Trollface from "../assets/Trollface.png"

export default function Header(){
    return(
    <div className="header">
        <img className="meme-img" src={Trollface} />
        <h1 className="main-heading">Meme Generator</h1>
        <h3 className="right-text">Built by Kushaal</h3>
    </div>
    )
}