import React, { useContext } from 'react'
import { AnimalContext } from '../contex/contex';
import './petAnimal.css';


export default function PetAnimal(props) {
    const {card} = props;
    const card2 = [card]

    return (
        <div>
            {
                card2.map(petCard => {
                    return (
                        <div class="row">
                            <div class="column">
                                <div class="card">
                                    <p>Animal Card:</p>
                                    <p>{petCard.type}</p>
                                    <p>{petCard.age}</p>
                                    <p>{petCard.quantity}</p>
                                </div>
                            </div>
                        </div>

                    )
                })

            }
        </div>

    )
}

