import { useState } from "react";
import {
  DashboardCloseButton,
  DashboardAddButton,
} from "../DashboardButton";
import axios from "axios";

const DashboardTestUpdate = ({showUpdatelHandler}) => {
    const [name, setName] =useState("")
  const [branch, setBranch] =useState("")
  const [email, setEmail] =useState("")
  const[phone, setphone] = useState('')
  const[note, setNote] = useState('')
  const[date_time, setdate_time] = useState('')
 
    const handleUpdate = (e,id)=>{
        e.preventDefault();
        axios.put(`http://backend.imagepluseyeclinic.com/api/appointment/${id}`, {
            name,
            branch,
            email,
            phone,
            note,
            date_time,
         }).then((res)=>{
            console.log(res);
        }).catch(err =>console.log(err));
            
        
        
    }
  return (
    <>
      <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-x2 rounded md:w-[550px]">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl">Our Services</h4>
          <button className="outline-[#f97729]" onClick={showUpdatelHandler}>
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

        <form onSubmit={handleUpdate}>
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">name</label>
              <input
                id="name"
                type="text"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                className="py-1 px-1 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1 pb-2">
              <label htmlFor="description">description.</label>
              <input
                id="description"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="text"
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="prescription">short_desc</label>
              <textarea
                id="short_desc"
                type="text"
                onChange={(e)=>setphone(e.target.value)}
                value={phone}
                className="py-1 px-2 h-24 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="prescription">short_desc</label>
              <textarea
                id="short_desc"
                type="text"
                onChange={(e)=>setNote(e.target.value)}
                value={note}
                className="py-1 px-2 h-24 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="prescription">short_desc</label>
              <textarea
                id="short_desc"
                type="text"
                onChange={(e)=>setdate_time(e.target.value)}
                value={date_time}
                className="py-1 px-2 h-24 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            
            <label htmlFor="Branch"> Branch.</label>
                 <div className="text-[#333]  mb-5 md:mb-4">
                  <select onChange={(e)=>setBranch(e.target.value)}
                   className="p-1 rounded outline-none" name="branch">
                <option value="select branch">Select Branch</option>
              <option value={branch}>Uyo</option>
            <option  value={branch} >Port Harcourt</option>
          </select>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
          <DashboardAddButton 
            text="Add"
          />             
              <DashboardCloseButton
              text="Close"
              showModalHandler={showUpdatelHandler}
            />
          </div>
        </form>
      </div>
  </>
  )
}

export default DashboardTestUpdate
