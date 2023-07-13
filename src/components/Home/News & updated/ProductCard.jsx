 import React,{useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
  
 const ProductCard = ({item}) => {
 
  function ScrollToTopMount(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null
}
   return (
     <>
 
      <div className="w-full" >
      <ScrollToTopMount/>
      
      <div className="flex  my-10 justify-between text-black gap-10">
      <NavLink to={`/shop/${item.id}`}>
     <img src={item.image} alt="" />
     {item.image}
     </NavLink>
      <span className='w-50'>
          <Link to={`/shop/${item.id}`} >
        <h2 className="underline text-2xl">{item.title}</h2>
        </Link>
        <p className="text-red-600 text-xs">{item.date}</p>
        <p className="font-sans  text-sm leading-6">{item.body}</p>
      </span>
      </div>
      
      </div> 
      
     </>
   )
 }
 
 export default ProductCard
 