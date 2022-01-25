import React, { useState } from "react";
import './Home.css';
import { Link,useLocation } from "wouter";

const POPULAR_GIFS = ["gatos", "Perros", "Matrix", "Rosas"]

function Home() {
    const [keyword, setKeyword] = useState('')
    const [path,pushLocation] = useLocation()
 

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/gif/${keyword}`)

    }
    
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <div>
            <div id="dvLogo">
                <img src='https://i.ibb.co/HPf14n3/logo.png'></img>
                <ul>
                    {
                        POPULAR_GIFS.map((r) => (
                            <li key={r}>
                                <Link to={`/gif/${r}`}>Gifs de {r}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} className="center" type="text" value={keyword}></input>
            </form>
        </div>)
}


export default Home