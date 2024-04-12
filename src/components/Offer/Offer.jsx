import React from 'react'
import './Offer.css'
import { FaBusAlt } from "react-icons/fa";
import { MdBathtub,MdWifi,MdAirportShuttle,MdLocationPin,MdArrowForward } from "react-icons/md";

//import images.

import img6 from '../../assets/image (6).jpeg'
import img7 from '../../assets/image (7).jpeg'
import img8 from '../../assets/image (8).jpeg'

//Use higher order array method (MAP) to list our offers.

const Offers = [

  {
    id:1,
    imgSrc: img6,
    stTdeitle: 'couples',
    location: 'Colombia',
    price: '$3,500',
  },

  {
    id:2,
    imgSrc: img7,
    stTdeitle: 'Flight',
    location: 'Europe',
    price: '$4,500',
  },

  {
    id:3,
    imgSrc: img8,
    stTdeitle: 'Tent',
    location: 'Rome',
    price: '$4,000',
  },

]

const Offer = () => {
  return (
    <section className='offer container setion'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural spectaculars, come to see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">

          {
            Offers.map(({id, imgSrc, stTdeitle, location, price})=>{
              return(
                <div className="singleOffer">
                    <div className="destImages">
                    <img src= {imgSrc} alt={stTdeitle} />

                    <span className="discount">
                      30% Offer
                    </span>
                    </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>
                      {price}
                    </h4>
                    <span className="status">
                      For Rent
                    </span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">       
                        <FaBusAlt className='icon'/>
                        <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">       
                        <MdBathtub className='icon'/>
                        <small>1 Bathroom</small>
                    </div>
                    <div className="singleAmenity flex">       
                        <MdWifi className='icon'/>
                        <small>Unlimited Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">       
                        <MdAirportShuttle  className='icon'/>
                        <small>Shuttle</small>
                    </div>
                  </div>

                      <div className="location flex">
                          <MdLocationPin className='icon'/>
                          <small>76 Vine #194, {location}</small>
                      </div>

                      <button className='btn flex'>
                        View Details
                        <MdArrowForward className='icon'/>
                      </button>
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

export default Offer