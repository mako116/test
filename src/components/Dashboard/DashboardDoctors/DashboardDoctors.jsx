import React, { useState } from 'react'
import DashboardButton, { DashboardDeleteButton,  DashboardUpdateButton } from "../DashboardButton";
import { toast } from "react-toastify";

 import DashboardOverlay from '../DashboardOverlay';
import DashboardDoctorssModal from './DashboardDoctorsModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
   const DashboardDoctors = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };

  const [data,empDataChange] =useState([])
  React.useEffect(()=>{
         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/teams")
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
  function deleteHand(id){
    axios.delete(`https://backend.imagepluseyeclinic.com/api/teams/${id}`)
    .then(()=>{
      toast.success("Deleted")
     })
  }
  return (
    <div>
    <section className="relative pt-7 px-3 sm:px-8">
        <DashboardButton
          showModalHandler={showModalHandler}
          text="Add Patients"
        />
        <div className="bg-white shadow-md overflow-x-auto">
          <h4 className="w-screen  py-2 text-white text-x3 text-center rounded-t sm:w-full">
            Doctors Page
          </h4>
          <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">title</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                image
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                name
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  city
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  address
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                 state
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  about
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                schedule
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Actions
                </th>
              </tr>
            </thead>
             {
              data.map(item=>(
                <tr  className="border-b" key={item.id}>
                <td className="py-2 px-2">{item.title}</td>
                <td className="py-2 px-2 border">
                <img src={item.image} alt="" />
                {item.image}
                </td>
                <td className="py-2 px-2">{item.name}</td>
                <td className="py-2 px-2">{item.city}</td>
                <td className="py-4 px-4">{item.address}</td>
                <td className="space-x-2 py-2">{item.state}</td>
                <td className="py-2 px-2">{item.about}</td>
                <td className="py-2 px-2 border">{item.schedule}</td>
               
                
                <td className="flex justify-center space-x-2 py-2">
                <Link to={`/admin/Doctors/${item.id}`} >
               <DashboardUpdateButton 
                 />
               </Link>
                  <span onClick={()=>deleteHand(item.id)}>
                  <DashboardDeleteButton  />
                  </span>
                </td>
                </tr>
               
              ))
             }
          {/* {DoctorsForum.map((data, index)=>(
            <div className="py-2 text-white p-2 flex justify-between sm:w-full " key={index}>
                 <div className='flex justify-center'>
                 <img className='w-screen' id='responsive' src={data.img} alt="" />
                 </div>
              <span className='w-screen h-[100%] border p-2 text-left leading-7 text-black'>
                 <h2 className='p-3 bg-[#d38e0d] text-white '>Name: {data.Name}</h2>
                 <p className=''><span className=''> About:</span> {data.highlight}</p>
                  <span className=''>Schedule: {data.Time}</span>
                <div className='flex justify-center gap-4 p-5'>
                <DashboardEditButton/>
                <DashboardViewButton 
                  text="View more"
                />
                <DashboardDeleteButton/> 
               </div>
               </span>
              </div>
          ))} */}
        </table>
        
      </div>
      {showModal && (
        <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
          <DashboardDoctorssModal showModalHandler={showModalHandler} />
        </div>
      )}
    </section>

    {showModal && <DashboardOverlay />}
  </div>
  )
}

export default DashboardDoctors
