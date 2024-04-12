import React, { useEffect } from 'react'
import './Popular.css'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";


import Aos from 'aos';
import 'aos/dist/aos.css';

//image import

import img1 from '../../assets/image (1).jpg'
import img2 from '../../assets/image (3).jpeg'
import img3 from '../../assets/image (4).jpeg'
import img4 from '../../assets/image (5).jpeg'

//Using map we display all the destiantions with id.

const Data = [
  {
    id:1,
    imagSrc: img1,
    destTitle: 'London',
    location: 'London',
    grade: 'CULTURAL RELAX'
  },

  {
    id:2,
    imagSrc: img2,
    destTitle: 'Paris',
    location: 'France',
    grade: 'A WONDER'
  },

  {
    id:3,
    imagSrc: img3,
    destTitle: 'The Great walls',
    location: 'China',
    grade: 'CHINA BORDER'
  },

  {
    id:4,
    imagSrc: img4,
    destTitle: 'Tajmahal',
    location: 'India',
    grade: 'SiIMPLE OF LOVE'
  },
]

const Popular = () => {

  useEffect(() => {
    Aos.init({ duration: 5000 })
  }, []);

  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="textDiv">
            <h2  className="secTitle">
              Popular Destination
            </h2>
              <p>
                From historical cities to natural spectaculars, come see the best of the world!
              </p>
          </div>

          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="iconsDiv flex">
          <FaArrowLeft className='icon leftIcon'/>
          <FaArrowRight className='icon'/>
          </div>
        </div>

        <div className="mainContent grid">

          {
            Data.map(({id,imagSrc,destTitle,location,grade})=>{
              return(
                <div className="singleDestination">
                    <div className="destImage">

                   <img src={imagSrc} alt='Image Title' />

                <div className="overlayInfo">
                   <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <FaArrowRight className='icon'/>

                </div>
                    </div>

                <div className="destFooter">
                  <div className="number">
                     0{id}
                  </div>

                <div div className="destText flex">
                  <h6>{location}</h6>
                   <span className='flex'>
                   <span className="dot">
                    <BsDot className='icon'/>
                   </span>
                     Dot
                  </span>
                </div>
                </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </section>
  )
}

export default Popular