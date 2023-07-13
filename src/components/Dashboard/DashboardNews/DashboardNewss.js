import { useState } from "react";
import {
    DashboardCloseButton,
   DashboardAddButton,
 } from "../DashboardButton";
import axios from "axios";
import { toast } from "react-toastify";
 
 const DashboardNewss = ({ showModalHandler }) => {
   const [title, seTitle] =useState("")
  const [body, setBody] =useState("")
  const[date, setDate] = useState("")
  const[image, setImage] = useState("")

  const handFileChange = (event)=>{
    const file = event.target.files[0];
    setImage (file); // set the image
    
  }

  const handleSubmi = async (e)=>{
    e.preventDefault();
    try{
      const formData = new FormData()
       formData.append("title",title)
      formData.append("body",body)
      formData.append("date",date)
      formData.append("image",image);

   const res = await axios.post("http://backend.imagepluseyeclinic.com/api/posts", formData )
   console.log(res)
   toast.success("sucessful")
  } catch(error){
    console.log(error);
  }
   
}     
 
   return (
     <>
       <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]">
         <div className="flex items-center justify-between mb-4">
           <h4 className="text-xl">News</h4>
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
               <label htmlFor="title">Title</label>
               <input
                 id="title"
                 type="text"
                 value={title}
                 onChange={(e)=> seTitle(e.target.value)}
                 className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
               />
             </div>
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="Body">Body</label>
               <textarea name="" id="" cols="30" rows="10"
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                 value={body}
                 onChange={(e)=> setBody(e.target.value)} />
             </div> 
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="image">image</label>
               <input
               type="file"
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                  onChange={handFileChange} />
             </div> 
             <div className="flex flex-col space-y-1 pb-2">
               <label htmlFor="date">date</label>
               <input
               type="date"
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                 value={date}
                 onChange={(e)=> setDate(e.target.value)} />
             </div> 
              
             <div className="flex items-center justify-end space-x-2">
            <DashboardAddButton  text="add"/>
              
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
 
 export default DashboardNewss;
 