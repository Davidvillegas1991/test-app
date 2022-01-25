import React,{Component} from "react";
import Tarea from './Task';

class Task extends Component{
    render(){
        console.log(this.props.tasks);
        return this.props.tasks.map(e => <Tarea t={e} key={e.id}></Tarea>
           
         )
    }
}

export default Task;