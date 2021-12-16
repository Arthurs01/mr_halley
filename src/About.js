import './about.css';
import Endorsers from './Endorsers';
import VideoHome from './VideoHome.js'
import Drums from'./img/markoss.jpg'
import Guitar from'./img/arthux.PNG'
import Bass from'./img/gerard.PNG'










function About() {
    return (
    <div id="about1">
        <div className="animation about ">
            <div className=" about_text ">
              <h2>Quienes somos?</h2>
              <div className="line"></div>
              <p>Somos un grupo musical rindiendo homenaje a los grandes de la musica de los 80s en ingles, llevandote por un viaje a travez de las estrellas reviviendo tus mejores recuerdos
                 con los exitos mas emblematicos de la decada</p>
            </div>
            <div className=" about_box">
            <VideoHome/>
            </div>
        </div>
  

        <div className="animation2 integrantes">
            <h2>Integrantes</h2>
        
        <div className="line" id="line"></div>
            <div className="integrantes_img">
               <div> <img src={Drums} alt="drums"></img><p>Marco Medina <br/><br/>  (Baterista)</p></div>
               <div> <img src={Guitar} alt="guitar"></img><p>Arturo López <br/><br/>(Guitarra lider)</p></div>
               <div> <img src={Bass} alt="bass"></img><p>Gerardo fjjsjsj<br/><br/> (Bajo)</p></div>
                
            
            
           </div>
           <br/>
        </div>
       
        <div className="about_endorses">
            <Endorsers/>
        </div>
    </div>
    )
}

export default About
