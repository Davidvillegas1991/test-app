import React from "react";
import './Home.css';
import {Link} from "wouter";

const POPULAR_GIFS = ["gatos","Perros","Matrix","Rosas"]
function Home(){
    return <div id="dvLogo">
        <img src='https://i.ibb.co/HPf14n3/logo.png'></img>
        <ul>
            {
                POPULAR_GIFS.map((r) =>(
                    <li key={r}>
                        <Link to={`/gif/${r}`}>Gifs de {r}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
}


export default Home