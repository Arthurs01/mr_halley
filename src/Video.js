import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import satisfaction from './video/satisfaction.mp4'
import funkyTown from './video/funkytown.mp4'

class Video extends Component {
    render () {
        return (
    <div className="concert_videosx">
        <div>
                        <div className='player-wrapper2'>
                            <ReactPlayer
                            className='react-player fixed-bottom'
                            url={satisfaction}
                            width='320px'
                            height='320px'
                            controls = {true}
                            />
                </div>
        </div>
                            <p>Satisfaction</p>
        <div>
                <div className='player-wrapper2'>
                    <ReactPlayer
                    className='react-player fixed-bottom'
                    url={funkyTown}
                    width='320px'
                    height='320px'
                    controls = {true}
                    />
    </div>
    </div>
    <p>Otra</p>
     </div>
        
        )
    }
}


export default Video;