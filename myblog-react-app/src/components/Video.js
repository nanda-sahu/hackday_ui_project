import React from 'react'
//import {Link} from 'react-router-dom'
import './Video.css'

import myVideo from '../assets/countryside.mp4'

const Video = () => {
  return (
    <div className='countryside'>
        <video autoPlay loop muted id='video'>
            <source src={myVideo} type='video/mp4' />
        </video>
    </div>
  )
}

export default Video
