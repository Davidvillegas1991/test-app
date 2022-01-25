import React,{Component} from "react";

class Task extends Component {
    render(){
        return <div>
             <h1>Titulo : {this.props.t.title}</h1> <input type="checkbox"/> <button>Eliminar</button>
        </div>
        
        
    }
}

export default Task;