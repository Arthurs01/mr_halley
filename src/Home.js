import React from 'react'
import About from './About'
import './home.css'
import Backto80s from './img/portadax.jpg'
import MusicHome from './Music.js'
import $ from "jquery"

window.onclick = function(){  
      $('.scroll').on('click', function(event){
        if(this.hash !==''){
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate(
            {
              scrollTop: $(hash).offset().top
            },
            800
          );
        }
      }); 
    }


function Home() {
  
  return (
    <div className="home">
      <div className="home_welcome">
      <h2>Conoce nuestro universo musical</h2>

     
     
      <a className="scroll button_home" href="#line">Ver más</a>
        <br/>
      </div><br/><br/>
      <div className="line_transparent" id="line"></div>
        
      <div className="demo_title" id="demo_title">
        <div className="demo_title_content1">
        <h2>Demo Mr Halley 80's </h2><br/><br/>
        <MusicHome/>
        </div>
        <div className="demo_title_content2">
    
       <img src={Backto80s} alt="backto80s"></img>
       
        </div>

        </div>


       


    <About/>
    
    </div>
  )
}

export default Home
