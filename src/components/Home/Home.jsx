import React from 'react';
import './Home.css'; // Assuming your component is in a file named Home.css

const Home = () => {

  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className="homeText">

          <h1 data-aos="fade-up" data-aos-duration="2500" className="title" >
            Plan Your Trip With Travel GoAt
          </h1>

          <p data-aos="fade-up" data-aos-duration="3000" className="subTitle">
            Travel to your favourite place with respectful of environment
          </p>

          <button data-aos="fade-up" data-aos-duration="3500" className='btn'>
            <a href="#">Explore Now</a>
          </button>

        </div>
        <div className="homeCard grid">

          <div  className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination'/>
          </div>

          <div  className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder='11/Meters'/>
          </div>

          <div  className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='$140 - $500'/>
          </div>

          <button  className='btn'>Search</button>
        </div>
      </div>
    </section>
  )
}

export default Home;
