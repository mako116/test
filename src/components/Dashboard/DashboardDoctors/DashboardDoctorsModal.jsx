import React, { useState } from "react";
import {
    DashboardRegisterButton,
    DashboardCloseButton,
  } from "../DashboardButton";
 
 import axios from "axios"
 import { toast } from "react-toastify";
  const DashboardDoctorssModal = ({ showModalHandler }) => {
   
    const handFileChange = (event)=>{
      const file = event.target.files[0];
      setImage (file); // set the image
      
    }

     const [name, setName] =useState("")
    const [title, setTitle] =useState("")
    const [city, setCity] =useState("")
    const[state, setState] = useState('')
    const[address, setAddress] = useState("")
    const[about, setAbout] = useState("")
    const[schedule, setSchedule] = useState("")
    const[facebook ,setFacebook] = useState("")
    const[twitter,setTwitter] = useState("")
    const[instagram ,setInstagram] = useState("")
    const[linkedin, setLinkedin] = useState("")
    const[image, setImage] = useState(null)

 
    const handleSubmi = async (e)=>{
      e.preventDefault();
      try{
        const formData = new FormData()
        formData.append("name", name)
        formData.append("title",title)
        formData.append("city",city)
        formData.append("state",state)
        formData.append("address",address)
        formData.append("about", about)
        formData.append("schedule", schedule)
        formData.append("name", name)
        formData.append("facebook", facebook)
        formData.append("twitter", twitter)
        formData.append("instagram",instagram)
        formData.append("linkedin", linkedin)
        formData.append("image",image);

     const res = await axios.post("http://backend.imagepluseyeclinic.com/api/teams", formData )
     console.log(res)
     toast.success("sucessful")
    } catch(error){
      console.log(error);
    }
     
}     
      
  
 
    return (
      <>
        <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]" id="responsiveModal">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl">Doctors Registration</h4>
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
  
          <form onSubmit={ handleSubmi}>
            <div className="flex flex-col space-y-4 mb-6">
  
                <label htmlFor="title">Title</label>
                <input
                  id="tile"
                  type="text"
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                  onChange={(e)=>setTitle(e.target.value)}
                value={title}
                />
             
              </div>
              <div className="flex flex-col space-y-1">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e)=>setName(e.target.value)}
                value={name}
                  id="name"
                  type="text"
 
                />
                </div>
              <div className="flex flex-col space-y-4 py-4 border-y-2">
                <h4 className="text-lg">Address</h4>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="City">City</label>
                  <input
                    id="City"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setCity(e.target.value)}
                value={city}
                  />
 
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="state">state</label>
                  <input
                    id="state"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setState(e.target.value)}
                value={state}                  />
                 </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="residentialAddress">Residential Address</label>
                  <input
                    id="residentialAddress"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setAddress(e.target.value)}
                value={address}  />
                 </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="residentialAddress"> about</label>
                  <input
                    id="about"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setAbout(e.target.value)}
                value={about}  />
                 </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="schedule">schedule</label>
                  <input
                    id="schedule"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setSchedule(e.target.value)}
                value={schedule}  />
                 </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="facebook">facebook</label>
                  <input
                    id="facebook"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setFacebook(e.target.value)}
                value={facebook}  />
                 </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    id="instagram"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setInstagram(e.target.value)}
                value={instagram}  />
                 </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="twitter">twitter</label>
                  <input
                    id="twitter"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setTwitter(e.target.value)}
                value={twitter}  />
                 </div>
                <div className="flex flex-col space-y-1 py-1">
                  <label htmlFor="linkedin">Linkedin</label>
                  <input
                    id="linkedin"
                    type="text"
                    className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                    onChange={(e)=>setLinkedin(e.target.value)}
                value={linkedin}  />
                 </div>
                 <div className="flex flex-col space-y-1">
              <label htmlFor="image">image</label>
              <input
                id="image"
                type="file"
                onChange={handFileChange}
                 className="py-5 px-4 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
              </div>
             <div className="flex items-center justify-end space-x-2">
               <DashboardRegisterButton   type='submit' text="Register" />
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
  
  export default DashboardDoctorssModal;
  