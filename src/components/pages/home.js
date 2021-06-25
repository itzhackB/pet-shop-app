import React,{useContext} from 'react'
import { AnimalContext } from '../contex/contex';
import './home.css';


export default function Home() {
    const data = useContext(AnimalContext);
    return (
        <div id="mainTable">
            <table>
                <tr>
                    <th>Type:</th>
                    <th>Age:</th>
                    <th>quantity:</th>
                </tr>

                {data.map(pet => {
                    return (
                        <tr>
                            <td>{pet.type}</td>
                            <td>{pet.age}</td>
                            <td>{pet.quantity}</td>
                        </tr>
                    )

                })}

            </table>

        </div>
    )
}
