
import './App.css';
import React, {Component,useState,useEffect} from 'react';
import getGifts from './Services/getGifs';
import ListOfGifs from './Components/ListOfGifs';
import { Link, Route } from "wouter";
import Home from './Pages/Home/Home';




function App(){
    const [keyword,setKeyword] = useState('perro')
    return (
     <div className='App'>
       <section className='App-content'>
          <Home></Home>
          <Route path='/gif/:keywords' component={ListOfGifs}></Route>
        
       </section>
     </div>
    )

}
export default App;
