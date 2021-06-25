import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PetAnimal from './components/petAnimal/PetAnimal';
import Animals from './components/petAnimals/Animals';
import { AnimalProvider,useContex } from './components/contex/contex';
import Home from './components/pages/home'
import Info from './components/info/info';
import AppRouter from './AppRouter/AppRouter';


function App() {
  
  return (
    <div className="App" >
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </nav>

        <h1>Welcome to the pet Shop</h1>
     <AppRouter/>
      </Router>
     
    </div>
  );
}

export default App;
