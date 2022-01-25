import React, {Component,useState,useEffect} from "react";
import Gift from "./Gift";
import getGifts from "../Services/getGifs";

function ListOfGifs({params}){
    const {keywords} = params
    const [gifs,updateValue] = useState([]);
    
    useEffect(() =>{
      getGifts({keywords}).then(gifs =>  updateValue(gifs))
    },[keywords])
  
    return(
        <div id="dvGifsCards">
            {
                gifs.map(img =><Gift title={img.title} url={img.url} id={img.id} key={img.id}></Gift>)
            }
        </div>
    )
}

export default ListOfGifs