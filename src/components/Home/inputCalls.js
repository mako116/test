import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import {useForm} from 'react-hook-form'

 const InputCalls = () => {
     
     const [name, setName] =useState("")
    const [comment, setComment] =useState("")
    const [email, setEmail] =useState("")
    

    const handleSubmi = async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post('http://backend.imagepluseyeclinic.com/api/comments', {
          name, 
          email,
          comment,
        })
        console.log(res);
        toast.success("sucessful")
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
    <section className="py-10 text-black  bg-center">
      
      <form onSubmit={handleSubmi}>
        <div className="flex flex-col space-y-5 mb-5 md:mb-4">
          <div className="flex text-black flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full shadow bg-white border outline-none text-sm rounded placeholder-gray"
              type="text"
              placeholder="Your Name *"            
              onChange={(e)=>setName(e.target.value)}
              value={name}
                />
                 
             <input
              className="p-2 shadow w-full text-black bg-transparent border outline-none text-sm rounded placeholder-gray"
              type="email"
              placeholder="Your Email *"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
             />
             
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
          <textarea name="" id=""  placeholder="comment *" cols="45" rows="8" maxlength="65525"  className="w-full shadow border resize-none h-[175px] p-2 mb-1 outline-none"
             onChange={(e)=>setComment(e.target.value)}
              value={comment}
          />
            </div>
             
        </div>
        <div className="flex justify-center p-3">
        <button className=" bg-gray-800 text-1xl text-white rounded-full p-4" type="submit">Send comment</button>
        </div>
    </form>
           
          
    </section>
   </>
  );
};

export default InputCalls;
