import React,{useContext} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { AnimalProvider } from '../components/contex/contex';
import Animals from '../components/petAnimals/Animals';
import Home from '../components/pages/home';
import Info from '../components/info/info';
import PetAnimal from '../components/petAnimal';
import Index from '../components/petAnimal';



 export const petAnimals = [
    { type: "Dog", age: "5", quantity: "10" },
    { type: "Cat", age: "8", quantity: "20" },
    { type: "Hamster", age: "2", quantity: "5" },
    { type: "Bunny", age: "10", quantity: "3" },
    { type: "Horse", age: "20", quantity: "1" }
  ]

export default function AppRouter() {
   
    return (
        <div>
            <Switch>
                <AnimalProvider  value={petAnimals}>
                    <Route path="/animals" component={Animals} />
                    <Route path="/home"  component={Home}/>
                    <Route path="/info"  component={Info}/>
                    <Route path="/card" component={Index}/>
                </AnimalProvider>
            </Switch>
        </div>
    )
}
