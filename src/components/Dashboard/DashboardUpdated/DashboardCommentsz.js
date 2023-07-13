import axios from "axios";
import {
  DashboardAddButton,
    DashboardCloseButton,
  } from "../DashboardButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
 const DashboardCommentsModal = ({ showModalHandler }) => {
  
 
  // const[date_time, setDate_time] = useState(new Date())
 
  // useEffect(()=>{

  //   var timer = setInterval(()=> setDate_time(new Date()), 1000)
  //   return function cleanup(){
  //     clearInterval(timer)
  //   }
  // })

  // <div className="flex flex-col space-y-1 pb-2">
  // <p>Time: {date_time.toLocaleTimeString()}</p>
  // <p>Date: {date_time.toLocaleDateString()}</p>   
  // </div>  
 
 
   return (
     <>
       <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]" id="responsiveModal">
         <div className="flex items-center justify-between mb-4">
           <h4 className="text-xl">Patients Registration</h4>
           <button className="outline-[#f97729]" onClick={showModalHandler}>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-8 h-8 transition-colors hover:stroke-[#f97729]"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 d="M6 18L18 6M6 6l12 12"
               />
             </svg>
           </button>
         </div>
 
         <form>
           <div className="flex flex-col space-y-4 mb-6">
             <div className="flex flex-col space-y-1">
               <label htmlFor="name">Name</label>
               <input
                 id="name"
                 type="text"
                 
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
             
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="Email">Email.</label>
               <input
                 id="Email"
                  type="email"
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
  
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="comments">comments.</label>
               <input
                 id="comment"
                 type="text"
                   className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="date_time">date_time.</label>
               <input
                 id="date_time"
                 type="text"
                   className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
        </div>  
            <div className="flex items-center justify-end space-x-2">
            <DashboardAddButton 
            text="Add"
          />             
              <DashboardCloseButton
               text="Close"
               showModalHandler={showModalHandler}
             />
           </div>
          </form>
         </div>
     </>
   );
 };
 
 export default DashboardCommentsModal;
 