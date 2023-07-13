 import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
 
 const ProductList = () => {
  const [datas,empDataChange] =useState([])

  React.useEffect(()=>{
  
   
    const getRes = () => {
     fetch("http://backend.imagepluseyeclinic.com/api/posts")

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
     <>
      <div className="py-56 bg-pages-heroBg bg-no-repeat bg-cover bg-center" />
      <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center mb-10">
          <h2 className="mb-2 relative text-[#f97729] shadow -top-80 z-999 text-center text-3xl font-bold uppercase md:text-5xl">
            News & updates
          </h2>
         </div>
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
           
      <section>
       <div className="-top-80">
        <div className="w-full">
      { datas?.map((item)=>(
          <ProductCard key={item.id} item={item}/>
        ))
      } 
           
        </div>
      </div>
      
     
      </section> 
     </div>
     </div>
     <div className="flex flex-col items-center space-y-4 px-0 py-6 bg-[#f97729] text-white lg:flex-row lg:justify-around lg:items-center lg:space-y-0 lg:px-0">
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
      
     </>
   )
 }
 
 export default ProductList
 