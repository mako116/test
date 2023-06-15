import React from 'react'
import "../Csss/productcards.css"
import { Link } from 'react-router-dom'
const ProductCard = ({item}) => {
  return (
    <>
      <section className='wisths'>
        <div className="spacer">
             <div className="imagin">
                <Link>
                <img className="" src={item.img} alt="" />
                </Link>
                <div>
               <p>{item.new}</p>
               <Link>
               <h2>{item.title}</h2>
               </Link>
               <h4>{item.para}</h4>
               <h5>{item.fulltime}</h5>
               <h6>{item.salary}</h6>
               </div>
                
            </div>
           <div className='items'>
           <span>{item.codes2}</span>
            <span>{item.codes}</span>
            <span>{item.codes3}</span>
           </div>
           <div className='post'>
            <span>{item.posted}</span>
           </div>
            </div>
       </section>
    </>
  )
}

export default ProductCard
