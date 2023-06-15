 
 import React from 'react'
 import "./Home.css"
  import heroImg from "../../assets/images/hero-img02.jpg"
import SearchBar from '../SearchPages/Searchpage'
 const Homes = () => {
   return (
     <section className=''>
        <div className="hero__content container">
         <p> FIND YOUR</p>
         <h2>PERFECT JOB</h2>
         <p>EASILY</p>
         </div>
          
            <div className="HERO_IMG">
              <img src={heroImg} alt="" />
            </div>
            <SearchBar/>
     </section>
   )
 }
 
 export default Homes
 