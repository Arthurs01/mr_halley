import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import MusicHome from './music/DemoMrHalley.mpeg'
import './music.css'
import './videoHome.css'

class Video extends Component {
    render () {
        return (
            <div>
        <div className='player-wrapper-music'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url={MusicHome}
            width='500px'
            height='50px'
            controls = {true}
       
             />
        </div>
       {/* <p>Titulo Video</p> */}
        
        </div>
        
        )
    }
}


export default Video;