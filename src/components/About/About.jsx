import { Link } from "react-router-dom";

 import React, { useState } from "react";

const About = () => {
  const [data,empDataChange] =useState([])
  React.useEffect(()=>{


         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/clients")

          .then((res)=>{
              return res.json()
          }).then((resp)=>{
            console.log(resp.data);
              empDataChange(resp.data);
          }).catch((err)=>{
              console.log(err.message);
          }) 
         }
         getRes();
      
  },[])

 
  return (
    <section>
      <div className="py-56 bg-pages-heroBg bg-no-repeat bg-cover bg-center" />
      <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center mb-10">
          <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
            About Us
          </h2>
          <div className="w-10 h-[3px] bg-[#f97729]" />
        </div>
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
        {
          data.map(item=>(
            <div  key={item.id} className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
               <div className="flex justify-center lg:w-1/2 lg:justify-start">
                <img className="w-96" src={item.image} alt="About us" />
              </div>
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
            <p>
              {item.name}
            </p>
            </div>
            </div>
          ))
         }
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 px-4 py-6 bg-[#f97729] text-white lg:flex-row lg:justify-around lg:items-center lg:space-y-0 lg:px-0">
        <p className="text-xl text-center md:text-2xl">
          Book an Appointment with our Eye Clinic in Uyo
        </p>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Link
              to="tel:+2349071259643"
              className="inline-block px-5 py-2 uppercase font-bold border-2 border-white rounded-full transition-all hover:text-white hover:bg-[#045544] md:px-8 md:py-3 md:text-lg"
            >
              Call Now
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/contact-us"
              className="inline-block px-5 py-2 uppercase font-bold border-2 border-white rounded-full transition-all hover:text-white hover:bg-[#045544] md:px-8 md:py-3 md:text-lg"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
