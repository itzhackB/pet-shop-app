import React, { useContext } from 'react'
import { AnimalContext } from '../contex/contex';

export default function Animals() {
    const data = useContext(AnimalContext);
    return (
        <div>
            {
                data.map(pet => {
                    return <div class="row">
                        <div class="column">
                            <div class="card">
                                <h1>Type:{pet.type}</h1>
                                <h2>Quantity{pet.quantity}</h2>
                                <br></br>
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    )
}
