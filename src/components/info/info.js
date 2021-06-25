import React from 'react'
import { dog,cat,hamster,bunny,horse } from './wikiInfo'

export default function Info() {
    const infoArray=[dog,cat,hamster,bunny,horse];
    return (
        <div>
            {
                infoArray.map(info=>{
                    return (<p>{info}</p>)
                
                })
            }
        </div>
    )
}
