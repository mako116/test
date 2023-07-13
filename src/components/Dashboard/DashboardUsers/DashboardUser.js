import React, { useState } from 'react'
import {Col} from 'reactstrap'
 
 import DashboardOverlay from '../DashboardOverlay'
 import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton }   from '../DashboardButton'
 import axios from "axios"
import Login from '../Login'
  
const DashboardUser = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };

  const [data,empDataChange] =useState([])
  React.useEffect(()=>{

 
         const getRes = () => {
          fetch("https://backend.imagepluseyeclinic.com/api/users")

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
     axios.delete(`http://backend.imagepluseyeclinic.com/api/users/${id}`)
      console.log(res.data)
   } catch(error){
     console.log(error);
   }
  }
  return (
    <>
     <section className="relative pt-7 px-3 sm:px-8">
     <DashboardButton
       text="Login"
       showModalHandler={showModalHandler}
       />
        <div className='p-4 w-[100%]'>
            <div className='flex flex-col items-center mb-10'>
                <h2 className='mb-3 text-center text-3xl font-bold uppercase md:text-4xl'>Update users</h2>
                <div className="w-10 h-[3px] bg-[#f97729]" />
            </div>
             
            <Col lg='12' className='pt-5'>
                <table className=" w-full bg-white rounded">
                <thead>
                   <tr className="text-lg border-b-2">
                         <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">name</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">email</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">password</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">password_confirmation</th>
                        <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">action </th>
                    </tr>
                 </thead>
                <tbody>
              
                {
               data.map(item=>(
                <tr key={item.id}>
                 <td className="py-5 px-5 space-x-2 border">{item.name}</td>
                 <td className="space-x-2 py-5 px-5 border">{item.email}</td>
                 <td className="py-2 px-2">{item.password}</td>
                <td className="py-5 px-4 border">{item.password_confirmation}</td>
                <td className="flex justify-center space-x-2 py-2">
                  <DashboardUpdateButton />
                  <span onClick={()=>removeUser(item.id)}>
                  <DashboardDeleteButton />
                  </span>
                  </td>

                 </tr>
               
              ))
             }
                </tbody>
                </table>
            </Col>
     
        </div>
        {showModal && (
        <div className="absolute z-40 top-2 left-1/2 -translate-x-1/2 md:top-6">
          <Login showModalHandler={showModalHandler} />
        </div>
      )}
     </section> 
     {showModal && <DashboardOverlay />}

    </>
         )
    }
         
  

 export default DashboardUser
