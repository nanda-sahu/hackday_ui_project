import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {FaBars,FaTimes}from 'react-icons/fa'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='header'>
      <Link to='/'><h1>The Beginning</h1></Link>
      <ul className={click? 'nav-menu.active' : 'nav-menu'}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/themes'>Themes</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='/audiobook'>AudioBook</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}}/>): (<FaBars size={20} style={{color: '#fff'}} />)}
      </div>
    </div>
  )
}
export default Navbar
