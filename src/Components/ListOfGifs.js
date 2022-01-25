import React, {Component,useState,useEffect} from "react";
import Gift from "./Gift";
import { useGifs } from "../hooks/useGifs";

function ListOfGifs({params}){
    const {keywords} = params
    const gifs = useGifs({keywords})


    return(
        <div id="dvGifsCards">
            {
                gifs.map(img =><Gift title={img.title} url={img.url} id={img.id} key={img.id}></Gift>)
            }
        </div>
    )
}

export default ListOfGifs