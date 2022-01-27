import React,{useContext} from "react";
import StaticContext from  "../../context/StaticContext"


function Default({params}){
    const {id} = params
    const context = useContext(StaticContext)
    console.log(context)
    return <h1>GIF con id {params.id}</h1>
}

export default Default
