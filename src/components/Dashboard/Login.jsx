import axios from "axios";
import {
    DashboardRegisterButton,
    DashboardCloseButton,
  } from "../Dashboard/DashboardButton";
 
import {Form} from "reactstrap"
 import { useState } from "react";
  const Login = ({showModalHandler} ) => {
     
  

      const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const[password_confirmation, setPasswordCo] = useState('')
   

    const handleSubmi = async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post('http://backend.imagepluseyeclinic.com/api/register', {
          name,
          email,
          password,  
          password_confirmation,
        })
        console.log(res);
        
      } catch (error) {
        console.log(error)
      }
    } 
    return (
      <>
        <div className="px-6 pt-5 pb-6 mb-4 bg-white shadow-xl rounded md:w-[550px]" id="responsiveModal">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl">Users Registration</h4>
            <button className="outline-[#493529]" onClick={showModalHandler}>
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
  
          <Form onSubmit={handleSubmi}>
            <div className="flex flex-col p-7 space-y-4 mb-6">
              <div className="flex flex-col space-y-1">
               
              </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="Username">Username</label>
                <input
                  id="Username"
                  type="text"
                  value={name}
                  className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                  onChange={(e)=>setName(e.target.value)}
                 
                />
               
               </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="email">email</label>
                <input 
                type="email"
                value={email}
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
            placeholder='Email'
            onChange={(e)=>setEmail(e.target.value)}
             />
              </div>
               <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="password">password</label>
                <input 
            placeholder='password'
            value={password}
            className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
              type="password"
            onChange={(e)=>setPassword(e.target.value)}
              />
              </div>
              <div className="flex flex-col space-y-1 pb-2">
                <label htmlFor="password_confirmation">password_confirmation</label>
                <input 
                className="py-1 px-2 border border-gray-400 outline-[#f97729] rounded"
                type="password"
                value={password_confirmation}
                onChange={(e)=>setPasswordCo(e.target.value)}
            placeholder='password_confirmation'
            
             />
             
           </div>
            <div className="flex items-center justify-end space-x-2">
               <DashboardRegisterButton    text="Register" />
              <DashboardCloseButton
              
                text="Close"
                showModalHandler={showModalHandler}
              />
            </div>
             </div>
          </Form>
        </div>
      </>
    );
  };
  
  export default Login;
  