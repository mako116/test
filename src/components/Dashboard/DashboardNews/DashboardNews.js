import React, { useState } from 'react'
 import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton } from '../DashboardButton'
import DashboardOverlay from '../DashboardOverlay';
import DashboardNewss from './DashboardNewss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardNewss2 = () => {
  const [datas,empDataChange] =useState([])
 
  const [showModal, setShowModal] = useState(false);

const showModalHandler = () => {
  setShowModal((prevVal) => !prevVal);
};
  // React.useEffect(()=>{

  //   const getReq =async()=>{
  //     const res = await axios.get('http://backend.imagepluseyeclinic.com/api/posts')
  //     empDataChange(res) 
      
  //   }
  //   getReq()
  // }, [])

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
  function deleteHand(id){
    axios.delete(`https://backend.imagepluseyeclinic.com/api/posts/${id}`)
    .then(()=>{
      alert("data has deleted")
    })
  }

  return (
    <>
        <section className="relative pt-7 sm:px-8 "> 
        <DashboardButton
          showModalHandler={showModalHandler}
          text="Add News"
        />
          <div className="bg-white shadow-md overflow-x-auto">
          <h4 className="w-screen py-2 text-white text-xl text-center bg-[#f97729] rounded-t sm:w-full">
            Patients
          </h4>
          <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                 <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                Title
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                body
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  image
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  date
                </th>
                 
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
             {datas?.map(item=>(
               <tr key={item.id}>
                <td className="py-5 px-5 space-x-2 border">{item.title}</td>
                 <td className="py-5 px-4 border">{item.body}</td>
                <td className="space-x-2 py-5 px-5 border">{item.image}</td>
                <td className="space-x-2 py-5 px-5 border">{item.date}</td>
               <td className='flex justify-start gap-4 p-3 bg-[#e7e3db'>
                 <div className="gap-3 m-2 text-red-600">
                 <Link to={`/admin/Doctors/${item.id}`} >
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
            </tbody>
              </table>
              </div>
                 {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardNewss showModalHandler={showModalHandler} />
          </div>
        )}         
        </section>
        {showModal && <DashboardOverlay />}

     </>
  )
}

export default DashboardNewss2

