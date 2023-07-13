import { useState } from "react";
import {
   DashboardRegisterButton,
  DashboardCloseButton,
} from "../DashboardButton";
import axios from "axios";
import { toast } from 'react-toastify'

const DashboardPatientsModal = ({ showModalHandler }) => {
  const [name, setName] =useState("")
  const [phone, setPhone] =useState("")
  const [state, setstate] =useState("")
  const[city, setCity] = useState("")
  const[address, setAddress] = useState("")
  const[email, setEmail] = useState("")
  const[ocular_history, setOcular_history] = useState("")
  const[auto_ref, setAuto_ref] = useState("")
  const[sub_ref, setSub_ref] = useState("")
  const[pd, setPd] = useState("")
  const[drugs, setDrugs] = useState("")
  const[fundoscopy, setFundoscopy] = useState("")
  const[prescription, setPrescription] = useState("")
  const[remark, setRemark] = useState("")
  const[visual_acuity, setVisual_acuity] = useState("")

  const handleSubmi = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://backend.imagepluseyeclinic.com/api/patients', {
        phone,
        name,
        sub_ref,
        auto_ref,
        pd,
        state,
        ocular_history,
        email,
        fundoscopy,
        address,
        prescription,
        visual_acuity,
        city,
        drugs,
        remark,
       })
      console.log(res);
      toast.success("sucessful")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]">
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

        <form onSubmit={handleSubmi}>
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                 type="text"
                onChange={(e)=>setName(e.target.value)}
                value={name}                
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
            <div className="flex flex-col space-y-1 pb-2">
              <label htmlFor="phoneNo">Phone No.</label>
              <input
                name="phone"
                type="text"
                onChange={(e)=>setPhone(e.target.value)}
                value={phone}    
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
       

            <div className="flex flex-col space-y-4 py-4 border-y-2">
              <h4 className="text-lg">Address</h4>
              <div className="flex flex-col space-y-1">
                <label htmlFor="state">State</label>
                <input
                  id="state"
                  type="text"
                  onChange={(e)=>setstate(e.target.value)}
                value={state}                      
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="City">City</label>
                <input
                  city="City"
                  onChange={(e)=>setCity(e.target.value)}
                value={city}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="residentialAddress">Residential Address</label>
                <input
                  id="residentialAddress"
                  type="text"
                  name="address"
                  onChange={(e)=>setAddress(e.target.value)}
                value={address}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e)=>setEmail(e.target.value)}
                value={email}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="setVisual_acuity">setVisual_acuity</label>
                <input
                  id="setVisual_acuity"
                  type="text"
                  name="setVisual_acuity"
                  onChange={(e)=>setVisual_acuity(e.target.value)}
                value={visual_acuity}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="ocular_history">ocular_history</label>
                <input
                  id="ocular_history"
                  type="text"
                  name="ocular_history"
                  onChange={(e)=>setOcular_history(e.target.value)}
                value={ocular_history}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="auto_ref">auto_ref</label>
                <input
                  id="auto_ref"
                  type="text"
                  name="auto_ref"
                  onChange={(e)=>setAuto_ref(e.target.value)}
                value={auto_ref}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="sub_ref">sub_ref</label>
                <input
                  id="sub_ref"
                  type="text"
                  name="sub_ref"
                  onChange={(e)=>setSub_ref(e.target.value)}
                value={sub_ref}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="pd">Pd</label>
                <input
                  id="pd"
                  type="text"
                  name="pd"
                  onChange={(e)=>setPd(e.target.value)}
                value={pd}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
              
              <input type="text"
              onChange={(e)=>setDrugs(e.target.value)}
                value={drugs}   
                placeholder="drugs"
               />
               </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="residentialAddress">Fundoscopy</label>
                <input
                  id="fundoscopy"
                  type="text"
                  name="fundoscopy"
                  onChange={(e)=>setFundoscopy(e.target.value)}
                value={fundoscopy}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="prescription">prescription</label>
                <input
                  id="prescription"
                  type="text"
                  name="prescription"
                  onChange={(e)=>setPrescription(e.target.value)}
                value={prescription}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
              <div className="flex flex-col space-y-1 py-1">
                <label htmlFor="remark">remark  </label>
                <input
                  id="residentialAddress"
                  type="text"
                  name="remark"
                  onChange={(e)=>setRemark(e.target.value)}
                value={remark}    
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                />
              </div>
            </div>
          <div className="flex items-center justify-end space-x-2">
              <DashboardRegisterButton type="submit" text="Register" />
            <DashboardCloseButton
              text="Close"
              showModalHandler={showModalHandler}
            />
          </div>
          </div>
        </form>
        </div>
    </>
  );
};

export default DashboardPatientsModal;
