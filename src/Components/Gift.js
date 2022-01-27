import React from "react";
import { Link} from "wouter";


//TEST COMMIT

function Gift({ title, id, url }) {
    return (

        <div className="gifCard">
            <Link to={`/details/${id}`} >
                <h4>{title}</h4>
                <img className="imgResponsive" src={url}></img>
                <small>{id}</small>
          
            </Link>
        </div>

        
    )
}

export default Gift