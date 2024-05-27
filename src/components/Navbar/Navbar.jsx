import React, {useState} from 'react'
import './Navbar.css'
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
// code for click the button to show navbar
    const [active, setActive] = useState('navBar')
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

//code for close navbar

const removeNav = () =>{
    setActive('navBar')
}

// code to add the background color in the header.

const [transparent, setTransparent] = useState('header')
const addBg = () => {
    if(window.scrollY >= 10){
        setTransparent('header activeHeader')
    }
    else{
        setTransparent('header')
    }
}
window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
        <div className={transparent}>
            <div className="logoDiv">
                <a href="#" className="logo">
                    <h1 className='flex'><SiYourtraveldottv className='icon' />
                        GoAt
                    </h1>
                </a>
            </div>

        <div className={active}>
            <ul className="navLists flex">

                <li className="navItem">
                    <a href="#home" className="navLink">Home</a>
                </li>
                
                <li className="navItem">
                    <a href="#popular" className="navLink">Populars</a>
                </li>
                
                <li className="navItem">
                    <a href="#resources" className="navLink">Resources</a>
                </li>
                
                <li className="navItem">
                    <a href="#contact" className="navLink">Contact</a>
                </li>
                
                <li className="navItem">
                    <a href="#blog" className="navLink">Blog</a>
                </li>
                
                <div className="headerBtns flex">
                    <button className='btn loginBtn'>
                        <a href="#" id='login'>Login</a>
                    </button>
                    <button className='btn'>
                        <a href="#">Sign Up</a>
                    </button>
                </div>
                
            </ul>

            <div onClick={removeNav} className="closeNavbar">
            <IoMdCloseCircle className='icon'/>
            </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className='icon'/>
        </div>

        </div>
    </section>
  )
}

export default Navbar