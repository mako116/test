import React, { useState } from 'react';
 import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton } from '../DashboardButton';
import axios from 'axios';
 import DashboardOverlay from '../DashboardOverlay';
import DashboardCommentsModal from './DashboardCommentsz';
import { Link } from 'react-router-dom';
   
const DashboardComments = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };

   const [data,empDataChange] =useState([])
  React.useEffect(()=>{


         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/comments")

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

 

   const removeUser = async (id) =>
 {
  try{
    const res = await 
    axios.delete(`http://backend.imagepluseyeclinic.com/api/comments/${id}`)
     console.log(res.data)
  } catch(error){
    console.log(error);
  }
 }

 return ( 
   <>
   <section className='relative pt-5 px-3 sm:px-4'> 
   <DashboardButton
          showModalHandler={showModalHandler}
          text="Add appointments"
        /> 
            <div className="w-full  pt-10 pb-10 text-gray rounded-none  md:pt-6 md:rounded"
              id="book-">
               <div className="flex flex-col items-center mb-10">
                 <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
                  Comments 
                  </h2>
                      <div className="w-10 h-[3px] bg-[#f97729]" />
                     </div>
                   </div>
             <table className="w-screen text-center overflow-x-auto bg-white rounded sm:w-full">
           <thead>
             <tr className="text-lg border-b-2">
               <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">Name</th>
               <th className="px-5 py-2 md:px-6 lg:px-4 xl:px-12">
               Email
               </th>
               <th className="px-2 py-2 md:px-2 lg:px-2 xl:px-5">
                 Comments 
               </th>
               <th className="px-2 py-2 md:px-2 lg:px-2 xl:px-5">
                 action 
               </th>
             </tr>
           </thead>
           <tbody>
           
            {
                data.map(item=>(
                <tr  className="border-b" key={item.id}>
                <td className="py-5 px-5 border">{item.name}</td>
                 <td className="space-x-2 py-5 border">{item.email}</td>
                 <td className="py-2 px-2">{item.comment}</td>
                 <td className="flex justify-center space-x-2 py-2">
                 <Link to={`/admin/Comments/${item.id}`} >
                   <DashboardUpdateButton 
                 />
               </Link>
                  <span onClick={()=>removeUser(item.id)}>
                  <DashboardDeleteButton />
                  </span>
                
                </td>
                </tr>
               
              ))
             }
            
           </tbody>
         </table>  
        {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardCommentsModal showModalHandler={showModalHandler} />
          </div>
        )}      
    </section>
    {showModal && <DashboardOverlay />}
   </>
 )
}

export default DashboardComments;
