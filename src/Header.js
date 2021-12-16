import React from 'react'
import logoM from "./img/logo.png"
import {Link, NavLink} from "react-router-dom";
import videox from './video/videox.mp4';
import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Animations from './Animations';
import $ from "jquery"



<Animations/>

window.onload = function(){   

    var btnMenu = document.getElementById('icon-menu');
    var nav = document.getElementById('nav1');
    
     btnMenu.addEventListener('click', function(){
         nav.classList.toggle('mostrar');
     })
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
  



function Header() {
    return (
        <div className="header">
             
             <div class="header_nav">
                    <div className="header_nav1">
                       
                <div id="icon-menu">
                   <li> <FontAwesomeIcon icon={faBars}/></li>
               
                </div>
                    <div className="social_icons">
                       <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MrHalley-102855138569929"><FontAwesomeIcon icon={faFacebook}/></a></li>
                       <li><Link to="/"><FontAwesomeIcon icon={faYoutube}/></Link></li>
                       <li><Link to="/"><FontAwesomeIcon icon={faTwitter}/></Link></li>
                    </div>
                    </div>
                    <nav className="nav" id="nav1">
                        <ul>
                            <li><NavLink exact to="/mr_halley" activeClassName="active scroll">Home</NavLink></li>
                             <li><NavLink to="/about" activeClassName="active scroll" href="#about1">About</NavLink></li>
                           {/*  <li><a className="scroll" href="#about1">About</a></li> */}
                            {/* <a class="scroll" href="#separate"> */}
                            <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
                            <li><NavLink to="/contact"activeClassName="active">Contacts</NavLink></li>
                        </ul>
                    </nav>
                </div>
     
                <div className="header_logo">
                <Link to=""><img src={logoM} alt="logoM"></img></Link>
                </div>
               

 
         



<video className='videoTag' autoPlay loop muted>
    <source src={videox} type='video/mp4' />
</video>
        </div> 
    )
}





export default Header



