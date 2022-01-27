
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import ListOfGifs from './Components/ListOfGifs';
import { Link, Route } from "wouter";
import Home from './Pages/Home/Home';
import StaticContext from './context/StaticContext';
import Default from './Pages/Default/Default';




function App() {
  const [keyword, setKeyword] = useState('perro')
  return (
    <div>
      <StaticContext.Provider value={{
        name: 'Villegas',
        suscribeMethod: 'CreditCard',
        susbcribe: true
      }}>
      <div className='App'>
        <section className='App-content'>
          <Home></Home>
          <Route path='/gif/:keywords' component={ListOfGifs}></Route>
          <Route component={Default} path="/details/:id"></Route>

        </section>
      </div>
      </StaticContext.Provider>
    </div>
  )

}
export default App;
