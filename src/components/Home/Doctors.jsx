import { Link } from "react-router-dom";
import React, { useState } from 'react'
 
 
const Doctors = () => {
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

  return (
    <section
    id="doctors"
       className="pt-10 pb-16 px-6 bg-[#2f2f2f] text-white sm:px-12 md:py-16 md:px-20 lg:px-16 xl:px-28"
    >
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
          Meet Our Doctors
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>
      <div className="mb-12">
        <p className="text-xl">
          Here at Imageplus Eye Clinic, we have the most reputed doctors and
          well trained specialists who provide comprehensive care to address all
          your concerns. Book an appointment by{" "}
          <Link className="underline" to="tel:+2349071259643">
            phone
          </Link>{" "}
          or{" "}
          <Link className="underline" to="#book-appointment">
            online.
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-8 md:space-y-0 lg:justify-around">
      {
              data.map(item=>(
                <div className="shadow-2xl">
                <img
            className="w-[370px] h-[350px] rounded-t"
            src={item.image}
            alt="Dr Ijeoma"
          />
          <div className="py-2 text-center bg-[#f97729]">
            <h3 className="text-lg lg:text-xl">{item.name} </h3>
            <p className="text-sm lg:text-base">{item.title}</p>
          </div>
          <div className="flex flex-col pt-4 bg-white rounded-b">
            <div className="mb-4 px-8 text-[#555] text-sm lg:text-base">
              <div className="flex justify-between border-b pb-2">
                <p>{item.schedule}</p>
                <p>{item.about}</p>
              </div>
            </div>
            <Link
              className="inline-block mb-6 self-center px-6 py-3 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729] lg:px-8 lg:text-base"
              to="doctors/dr-ijeoma-nnabuife"
            >
              Read Profile
            </Link>
          </div>
        </div>
               )
      )}
         
        </div>
     </section>
  );
};

export default Doctors;
