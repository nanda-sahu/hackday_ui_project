import React from 'react'
import './Audiobook.css'
import Thewalk from '../assets/TheWalk.png'
import thewalkaudio from '../assets/The-walk.mp3'
import {FaPlay, FaStop} from 'react-icons/fa';


const Audiobook = () => {
    const audio = new Audio(thewalkaudio)

    const handlerPlay = () =>{
        audio.play();
    };

    const handlerStop = () => {
        audio.pause();
        audio.currentTime = 0;
    }
  return (
    <div>
      <div className="audiobook">
        <img src={Thewalk} className='img' alt='' />
        <button className="play-button" onClick={handlerPlay} >
            <FaPlay className="icon" />
        </button>
        <button className="stop-button" onClick={handlerStop} >
            <FaStop className ="icon" /> 
        </button>
      </div>
    </div>
  )
}

export default Audiobook
