import React, { Component } from "react";
import getGifts from "../Services/getGifs";

//TEST COMMIT

function Gift({ title, id, url }) {
    return (

        <div className="gifCard">
            <a href={`#${id}`}>

                <h4>{title}</h4>
                <img src={url}></img>
                <small>{id}</small>
            </a>
        </div>

        
    )
}

export default Gift