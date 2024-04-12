import React from 'react'
import './Footer.css'
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className='icon'/>GoAt
              </h1>
            </a>
          </div>

        <div className="socials flex">
          <FaFacebook className='icon'/>
          <FaXTwitter className='icon'/>
          <FaInstagramSquare className='icon'/>
        </div>

        </div>

        <div className="footerLinks">
          <sapn className="linkTitle">
            Information
          </sapn>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <sapn className="linkTitle">
            Helpful Links
          </sapn>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <sapn className="linkTitle">
            Contacts US
          </sapn>
          <span className='phone'>+96 9345875514</span>
          <span className='email'>goattravel@gmail.com</span>
        </div>

      </div>
    </div>
  )
}

export default Footer