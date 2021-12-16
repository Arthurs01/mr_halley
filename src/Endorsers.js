import React from 'react'
import './endorsers.css'
import{Link} from "react-router-dom";
import endorsers1 from "./img/endorsers/1.jpg"

import endorsers3 from "./img/endorsers/3.jpg"
import endorsers4 from "./img/endorsers/4.jpg"
import endorsers5 from "./img/endorsers/5.jpeg"
import endorsers6 from "./img/endorsers/6.jpg"
import endorsers7 from "./img/endorsers/7.jpg"
import endorsers8 from "./img/endorsers/8.png"
import endorsers9 from "./img/endorsers/9.jpg"
import endorsers10 from "./img/endorsers/10.jpg"
import endorsers11 from "./img/endorsers/11.gif"
import endorsers12 from "./img/endorsers/12.jpg"
import endorsers13 from "./img/endorsers/13.jpg"

import endorsers16 from "./img/endorsers/16.jpg"
import endorsers18 from "./img/endorsers/18.png"
import endorsers19 from "./img/endorsers/19.jpg"
import endorsers20 from "./img/endorsers/20.jpg"

import endorsers22 from "./img/endorsers/22.png"





function Endorsers() {
    return (
    <div className="animation endorsers">
        <div className="endorsers_title">
                <h2>Endorsers</h2>
                {/* <div className="line"></div> */}
                <div className="line" id="line"></div>

            </div>
        <div className="endorsers_box animation">
            
              <Link to=""><img src={endorsers1} alt=""></img></Link>
           
              <Link to=""><img src={endorsers3} alt=""></img></Link>
              <Link to=""><img src={endorsers4} alt=""></img></Link>
              <Link to=""><img src={endorsers5} alt=""></img></Link>
              <Link to=""><img src={endorsers6} alt=""></img></Link>
              <Link to=""><img src={endorsers7} alt=""></img></Link>
              <Link to=""><img src={endorsers8} alt=""></img></Link>
              <Link to=""><img src={endorsers9} alt=""></img></Link>
              <Link to=""><img src={endorsers10} alt=""></img></Link>
              <Link to=""><img src={endorsers11} alt=""></img></Link>
              <Link to=""><img src={endorsers12} alt=""></img></Link>
              <Link to=""><img src={endorsers13} alt=""></img></Link>
          
              <Link to=""><img src={endorsers16} alt=""></img></Link>
              <Link to=""><img src={endorsers18} alt=""></img></Link>
              <Link to=""><img src={endorsers19} alt=""></img></Link>
              <Link to=""><img src={endorsers20} alt=""></img></Link>
           
              <Link to=""><img src={endorsers22} alt=""></img></Link>
              </div>

        
        </div>
    )
}

export default Endorsers
