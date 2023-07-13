import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] =useState("")
  const [lastName, setLastName] =useState("")
  const [email, setEmail] =useState("")
  const [confirmPassword,setConfirmPassword] =useState("")
  const [password,setPassword] =useState("")
  const [validationErrors,setValidationErrors] =useState({})
  const [isSubmitting,setSubmitting] = useState(false)
  const [isPending,setisPending]= useState(true) 

  useEffect(()=>{
    setTimeout(() => {
      if(localStorage.getItem('Token') !== " " && localStorage.getItem('token') != null){
       }
    }, 1000);
  },[])
  const registerAction = (e) =>{
    e.preventDefault();
    setisPending(false)
    setSubmitting(true)
    let payload = {
      name: name,
      lastName:lastName,
      email : email,
      password:password,
      password_confirmation:confirmPassword
    }
    axios.post('/api/register',payload)
    .then((r)=>{
      setSubmitting(false)
      localStorage.setItem('Token', r.data.token)
      navigate("/admin")
    })
    .catch((e)=>{
      setSubmitting(false)
      if(e.response.data.errors !== undefined){
        setValidationErrors(e.response.data.errors)
      }
    })
  }
  return (
    <div className="h-screen bg-[#efefef]">
      <div className="flex justify-center px-3 sm:px-0">
      { isPending && <div>loading</div> }
        <div className="w-full mt-10 pb-8 bg-white rounded-md shadow-md sm:w-9/12 md:w-8/12 xl:w-1/2">
          <h3 className="w-full py-2 mb-8 text-center text-2xl rounded-t-md text-white font-bold bg-[#f97729]">
            Register
          </h3>
          <form onSubmit={(e)=> registerAction(e)}>
            <div className="flex flex-col space-y-4 px-6 mb-6 text-lg sm:px-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="name">First Name</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="name"
                  name="name"
                  onChange={(e)=>{setName(e.target.value)}}
                  value={name}
                  type="text"
                />
                {validationErrors.name !== undefined && 
                <div className="flex flex-col">
                  <small className="text-red-600">
                    {validationErrors.name[0]}
                  </small>
                </div> }
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="lastname"
                  name="lastName"
                  onChange={(e)=>{setLastName(e.target.value)}}
                  value={lastName}
                  type="text"
                />
                 {validationErrors.lastName !== undefined && 
                <div className="flex flex-col">
                  <small className="text-red-600">
                    {validationErrors.lastName[0]}
                  </small>
                </div> }
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="email">E-Mail Address</label>
                <input
                name="email"
                value={email}
                onchange={(e)=>{setEmail(e.target.value)}}
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="email"
                  type="email"
                />
                {validationErrors.email !== undefined && 
                <div className="flex flex-col">
                  <small className="text-red-600">
                    {validationErrors.email[0]}
                  </small>
                </div> }
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="password">Password</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                />
                 {validationErrors.password !== undefined && 
                <div className="flex flex-col">
                  <small className="text-red-600">
                    {validationErrors.password[0]}
                  </small>
                </div> }
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-1">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  className="py-1 px-3 w-full bg-transparent border border-gray-400 rounded-md outline-[#f97729] sm:w-[65%]"
                  id="confirmpassword"
                  name="confirmpassword"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  type="password"
                />
                 {validationErrors.confirmpassword !== undefined && 
                <div className="flex flex-col">
                  <small className="text-red-600">
                    {validationErrors.confirmpassword[0]}
                  </small>
                </div> }
              </div>
            </div>

            <div className="flex justify-end px-6 sm:px-10">
              <button 
              disabled={isSubmitting}
              type="submit"
              className="px-4 py-2 w-full text-[#f97729] uppercase font-bold border-2 border-[#f97729] rounded-md transition-colors duration-200 hover:text-white hover:bg-[#f97729] sm:w-full md:w-[65%]">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
