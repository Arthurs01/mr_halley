import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import prettywoman from './video/prettywoman.mp4'
import midnightOil from './video/midnightoil.mp4'

class Video extends Component {
    render () {
        return (
        <div className="concert_videosx">
                        <div>
                <div className='player-wrapper2'>
                    <ReactPlayer
                    className='react-player fixed-bottom'
                    url={midnightOil}
                    width='320px'
                    height='320px'
                    controls = {true}
                    />
                </div>
            </div>
            <p>Titulo Video</p>
            <div>
                <div className='player-wrapper2'>
                    <ReactPlayer
                    className='react-player fixed-bottom'
                    url={prettywoman}
                   width='320px'
                   height='320px'
                    controls = {true}
                    />
                </div>
                </div>
                <p>Titulo Video</p>
        </div>
        
        )
    }
}


export default Video;