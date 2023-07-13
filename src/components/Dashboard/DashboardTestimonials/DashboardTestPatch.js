import React,{useState} from 'react'
import axios from 'axios';
import {
    DashboardRegisterButton,
    DashboardCloseButton,
  } from "../DashboardButton";
import { Link } from 'react-router-dom';
const DashboardTestPatch = ({showModalHandler}) => {
    
    const [title, setTitle] =useState("")
    const [name, setName] =useState("")
    const [body, setBody] =useState("")
    const [star, setStar] =useState("")
    // const [author, setAuthor] =useState("")
    // const [description, setdescription] =useState("")
    const[image, setImage] = useState('')
    
    // const [data,setData]=useState("")
    // async function patchData(id,data){
    //     try{
    //         const response = await axios.patch(`https://backend.imagepluseyeclinic.com/api/testimonials${id}`,data)
    //         return response.data;
    //     }catch(error) {
    //         console.log(error);
    //         throw error
    //     }
    // }

    const handleUpdate = (e, id)=>{
        e.preventDefault();
        axios.patch(`http://backend.imagepluseyeclinic.com/api/testimonials/${id}`, {
            title,
            body,
            star,
            name,
            image,
        }).then((res)=>{
             console.log(res);
        }).catch(err =>console.log(err));
          
    }
  return (
    <>
        <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]" id="responsiveModal">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl">Users Registration</h4>
            <Link to="/admin" className="outline-[#493529]" onClick={showModalHandler}>
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
            </Link>
          </div>
  
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col p-7 space-y-4 mb-6">
              <div className="flex flex-col space-y-1">
               
              </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="Username">Title</label>
                <input
                  id="Username"
                  type="text"
                  value={title}
                   className="py-5 px-4 border border-gray-400 outline-[#f97729] rounded"
                  onChange={(e)=>setTitle(e.target.value)}
                 
                />
               
               </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="name">name</label>
                <input 
                type="text"
                value={name}
                  placeholder='name'
                  onChange={(e)=>setName(e.target.value)}
                  className="py-5 px-4 border border-gray-400 outline-[#f97729] rounded"

             />
              </div>
          
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="body">body</label>
                <input 
                    placeholder='body'
                    value={body}
                    type="text"
                    className="py-5 px-4 border border-gray-400 outline-[#f97729] rounded"

                    onChange={(e)=>setBody(e.target.value)}
              />
              </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label  value={star}
                onChange={(e)=>setStar(e.target.value)} htmlFor="star" 
                className="py-5 px-4 border border-gray-400 outline-[#f97729] rounded"
                >star</label>
               
                
              <div className="flex flex-col space-y-1" >
              <label htmlFor="image">image</label>
              <input
                id="image"
                type="file"
                onChange={(e)=> setImage(e.target.files)}
                value={image}
                className="py-5 px-4 border border-gray-400 outline-[#f97729] rounded"
              />
            </div>
             
           </div>
            <div className="flex items-center justify-end space-x-2">
               <DashboardRegisterButton  type='submit' text="Register" />
              <DashboardCloseButton
              
                text="Close"
                showModalHandler={showModalHandler}
              />
            </div>
             </div>
          </form>
        </div>
      </>
  )
}

export default DashboardTestPatch
