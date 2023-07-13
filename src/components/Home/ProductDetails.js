import React,{useEffect, useState} from 'react'
// import { useLocation, useParams } from "react-router-dom";
 import InputCalls from './inputCalls';
// import axios from 'axios';
  
const ProductDetails = () => {
  const [items,setProduct] =useState([])
   function ScrollToTopMount(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null
}
//  const {id} = useParams()

//  useEffect(()=>{
//  const getProduct = async () =>{
//   setLoading(true)
//   const response = await axios.get(`http://backend.imagepluseyeclinic.com/api/posts/${id}`);
//  setProduct(await response.data)
//  setLoading(false)
// }
// getProduct()
//  },[])

React.useEffect(()=>{
  
   
  const getRes = () => {
   fetch("http://backend.imagepluseyeclinic.com/api/posts")
   .then((res)=>{
       return res.json()
    }).then((resp)=>{
     console.log(resp.data);
     setProduct(resp.data);
   }).catch((err)=>{
       console.log(err.message);
   }) 
  }

  getRes();

},[])
//  const Loading = () =>{
//   return (
//     <>
//       Loading....
//     </>
//   )
//  }

//  const ShowProduct = () =>{
//   return (
//     <>
//     <div className="text-black col-md-6">
//       {/* <img src={.image} alt={.title} height="400px" width="400px" /> */}
//     </div>
//     <div className="text-black col-md-6">
//     <h4 className=' text-uppercase text-black-50'>
//       {/* {.title} */}
//     </h4>
//     {/* <p>{data.body}</p> */}
//     </div>
//     </>
//   )
//  }
  return (
       <section> 
       <div className="flex justify-center">
       <ScrollToTopMount/>

            <div className="pb-24 px-4 mt-5 sm:px-24 md:px-24 lg:px-52 xl:px-18">
                 { items.map((item)=>(
          <div key={item.id} item={item}>
           <img src={item.image} className="w-full h-[330px]" alt="" />
              <div className="flex
               flex-col text-left">
                  <h2 className="text-4xl  mt-10">{item.title}</h2>
                <div className="text-base">

                  <p className="text-xs my-2 text-red-600">{item.date}</p>
                </div>
                <div className="">
                  {item.body}
                </div>
                  <div className="text-sm">
                  <InputCalls/>                
                   </div>
                </div>  
           </div>
        ))
      } 
                  
                </div>
               </div>
         </section>
  );
};

export default ProductDetails;
