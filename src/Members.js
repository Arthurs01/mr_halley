import React from 'react'
import EnVivo15 from './img/gallery15.jpg'
import EnVivo16 from './img/gallery16.png'
import EnVivo17 from './img/gallery17.jpg'
import EnVivo18 from './img/gallery18.jpg'


import './members.css'

function Members() {
    return (
        <div className="Members">
            
            <img src={EnVivo15} alt="envivo15"></img>
            <img src={EnVivo16}alt="envivo16"></img>
            <img src={EnVivo17}alt="envivo17"></img>
            <img src={EnVivo18}alt="envivo18"></img>
         
         
        </div>
    )
}

export default Members

