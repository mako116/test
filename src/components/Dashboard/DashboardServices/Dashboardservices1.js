import React, { useState } from 'react'
import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton } from "../DashboardButton";
 import DashboardOverlay from '../DashboardOverlay';
import Dashboardservices2 from './Dashboardservices2';
import axios from 'axios';
import { Link } from 'react-router-dom';
   
 const Dashboardservices = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };
  const [updateModal, setUpatemodal] =useState(false)
   
  const showUpdatelHandler = () => {
    setUpatemodal((prevVal) => !prevVal);
  };

  const [services,empDataChange] =useState([])
  React.useEffect(()=>{
         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/services")

          .then((res)=>{  
             return  res.json()
          }).then((resp)=>{
            console.log(resp.data);
              empDataChange(resp.data);
          }).catch((err)=>{
              console.log(err.message);
          }) 
         }
        getRes();
      
  },[])
 
  function deleteHand(id){
    axios.delete(`https://backend.imagepluseyeclinic.com/api/services/${id}`)
    .then(()=>{
      alert("data has deleted")
    })
  }

 
  return (
    <>
    <section className="relative pt-7 px-3 sm:px-8">
    <DashboardButton
       showModalHandler={showModalHandler}
        />
      <div className="bg-white shadow-md overflow-x-auto">
        <h4 className="w-100  py-2 text-white text-xl text-center bg-[#5396c2] rounded-t sm:w-full">
          Services
        </h4>

        <hr/>
        <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">title</th>
                
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                description
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                short_desc
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                image
                </th>
                 
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Actions
                </th>
              </tr>
            </thead>
        {
          services?.map(item=>(
                <tr key={item.id}>
                 <td className="py-5 px-5 space-x-2 border">{item.title}</td>
                 <td className="space-x-2 py-5 px-5 border">{item.description}</td>
                 <td className="py-2 px-2">{item.short_desc}</td>
                 <td className="py-2 px-2">{item.image}</td>
                 <td>
                 
                <div>
               <Link to={`/admin/Services/${item.id}`} >
               <DashboardUpdateButton 
                 />
               </Link>
                
                 <span onClick={()=>deleteHand(item.id)}>
                 <DashboardDeleteButton/>
                 </span>
                </div>
                        
                </td>
                </tr>
               
              ))
             }
          
        </table>
        
      </div>  
      {
                  updateModal && (
                    <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
                    <DashboardUpdateButton showModalHandler={showUpdatelHandler} />
                    </div>
                    )
                }         
      {showModal && (
        <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
          <Dashboardservices2 showModalHandler={showModalHandler} />
        </div>
      )}
    </section>

    {showModal && <DashboardOverlay />}
  </>
  )
}

export default Dashboardservices
