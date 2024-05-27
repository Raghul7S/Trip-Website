import React from 'react'
import './About.css'

//Images ....

import img14 from '../../assets/image (14).jpg'
import img15 from '../../assets/image (15).jpeg'
import img16 from '../../assets/image (16).png'

//video ....

import video from '../../assets/video.mp4'

const About = () => {
  return (
    <section className='about section' id='contact'>

      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>

        <div className="mainContent grid container">
          <div className="singleItem">
            <img src={img14} alt="name" />

            <h3>100+ Mountains</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div className="singleItem">
            <img src={img15} alt="name" />

            <h3>1000+ Hikings</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div className="singleItem">
            <img src={img16} alt="name" />

            <h3>2000+ Customers</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being.
            </p>
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>Wonderful house experience in there!</h2>
              <p>
                The adventure subranking is based on an equally weighted average of scores from five country.
              </p>
            </div>

            <div className="cardVideo">
              <video src={video}  autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About