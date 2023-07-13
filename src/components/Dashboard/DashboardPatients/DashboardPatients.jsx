import React, { useState } from "react";
 import axios from 'axios'


import DashboardButton, {
   DashboardDeleteButton,
   DashboardUpdateButton,
 } from "../DashboardButton";
import DashboardPatientsModal from "./DashboardPatientsModal";
import DashboardOverlay from "../DashboardOverlay";
import { toast } from "react-toastify";

const DashboardPatients = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevVal) => !prevVal);
  };

   const [data,empDataChange] =useState([])
  React.useEffect(()=>{
         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/patients")

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
    axios.delete(`https://backend.imagepluseyeclinic.com/api/patients/${id}`)
    .then(()=>{
      toast.success("deleted")
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
          <h4 className="w-screen py-2 text-white text-xl text-center bg-[#f97729] rounded-t sm:w-full">
            Patients
          </h4>
          <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">Name</th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Phone No.
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                 state
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  city
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  address
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                 email
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  ocular_history
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  auto_ref
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                sub_ref
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  pd
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  drugs
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                 visual_acuity
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">npm
                  fundoscopy
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                 prescription
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                 remark
                </th>
                <th className="px-10 py-2 md:px-16 lg:px-24 xl:px-32">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
             
            {
              data &&
                data.map(item=>(
                <tr  className="border-b" key={item.id}>
                <td className="py-5 px-5 border">{item.name}</td>
                 <td className="space-x-2 py-5 border">{item.phone}</td>
                 <td className="py-2 px-2">{item.state}</td>
                <td className="py-5 px-4 border">{item.city}</td>
                <td className="py-5 px-4 border">{item.address}</td>
                <td className="py-5 px-4 border">{item.email}</td>
                <td className="py-5 px-4 border">{item.ocular_history}</td>
                <td className="py-5 px-4 border">{item.auto_ref}</td>
                <td className="py-5 px-4 border">{item.sub_ref}</td>
                <td className="py-5 px-4 border">{item.pd}</td>
                <td className="py-5 px-4 border">{item.drugs}</td>
                <td className="py-5 px-4 border">{item.fundoscopy}</td>
                <td className="py-5 px-4 border">{item.prescription}</td>
                <td className="py-5 px-4 border">{item.remark}</td>
                <td className="flex justify-center space-x-2 py-2">
                 <span>
                 <DashboardUpdateButton />
                 </span>/admin/patients/
                 <span onClick={()=>deleteHand(item.id)}>
                 <DashboardDeleteButton/>
                 </span>
                </td>
                </tr>
               
              ))
             }
              
            </tbody>
          </table>
        </div>
        {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardPatientsModal showModalHandler={showModalHandler} />
          </div>
        )}
      </section>

      {showModal && <DashboardOverlay />}
    </div>
  );
};

export default DashboardPatients;
