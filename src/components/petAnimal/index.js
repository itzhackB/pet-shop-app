import React, { useContext,useState } from 'react'
import PetAnimal from './PetAnimal'
import { petAnimals } from '../../AppRouter/AppRouter'


export default function Index() {
     const [data, setData] = useState(petAnimals)
    return (
        <div>
            {
               data.map((dataCard ,index)=>{
                  return <PetAnimal key={index} card={dataCard}/>
               })
            }
        </div>
    )
}
