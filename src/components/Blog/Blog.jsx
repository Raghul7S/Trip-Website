import React from 'react'
import './Blog.css'
import { FaArrowRight } from "react-icons/fa6";

//Import images....

import img17 from '../../assets/image (17).jpeg'
import img18 from '../../assets/image (18).jpeg'
import img19 from '../../assets/image (19).jpeg'
import img20 from '../../assets/image (20).jpeg'
 
//Use map function to display our posts.

const Posts = [

  {
    id: 1,
    postImage: img17,
    title: 'Beautiful Moracco, Let us Travel!',
    desc: 'The architecture in Morocco is renowned for its intricate designs and vibrant colors, seen especially in buildings like the Hassan II Mosque in Casablanca and the ancient medinas of cities like Marrakech and Fes.',

  },

  {
    id: 2,
    postImage: img18,
    title: 'Romantic moments under Eiffel tower',
    desc: 'As the sun sets over Paris, the Eiffel Towers silhouette becomes a beacon of love, inspiring countless hearts to dream and cherish every moment.',
  },

  {
    id: 3,
    postImage: img19,
    title: 'Let us have adventure outside Tunisia !',
    desc: 'Tunisia"s rich culture, with its vibrant music, flavorful cuisine, and warm hospitality, creates an unforgettable experience for lovers and families.',
  },

  {
    id: 4,
    postImage: img20,
    title: 'Best Country in East Africa',
    desc: 'From the majestic peaks of Mount Kilimanjaro to the pristine beaches of Zanzibar, East Africa is a paradise for adventurers and romantics alike',
  }

]

const Blog = () => {
  return (
    <section className='blog container section' id='blog'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            An insight to the incredible experience in the world!
          </p>
        </div>

        <div className="mainContainer grid">

         {
          Posts.map(({id,postImage,title,desc})=>{
            return(
              <div className="singlePost grid">
              <div className="imgDiv">
                <img src={postImage} alt={title} />
              </div>
  
              <div className="postDetails">
                <h3>
                    {title}
                </h3>
                <p>
                  {desc}
                </p>
              </div>
  
              <a href="#" className='flex'>
              Read More
              <FaArrowRight className='icon'/>
              </a>
            </div>
            )
          })
         }

        </div>
      </div>
    </section>
  )
}

export default Blog