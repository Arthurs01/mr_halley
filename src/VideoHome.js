import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import VideoHome from './video/VideoHome.mp4'
import './videoHome.css'

class Video extends Component {
    render () {
        return (
            <div>
        <div className='player-wrapper2'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url={VideoHome}
            width='320px'
            height='320px'
            controls = {true}
            
             />
        </div>
       <p>Titulo Video</p>
        
        </div>
        
        )
    }
}


export default Video;