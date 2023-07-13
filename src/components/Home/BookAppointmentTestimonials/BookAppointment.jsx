import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const BookAppointment = () => {
  // const [dateType, setDateType] = useState(false);

  const [name, setName] =useState("")
  const [date_time, setDate_time] =useState("")
  
  const [branch, setBranch] =useState("")
 
  const [email, setEmail] =useState("")
  const[phone, setphone] = useState('')
  const[note, setNote] = useState('')
 
  const handleSubmi = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://backend.imagepluseyeclinic.com/api/appointments', {
        name,
        branch:"",
        email,
        phone,
        note,
        date_time,
      })
      console.log(res);
      toast.success("sucessful")
     } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      className="w-full pt-10 pb-10 px-6 text-white bg-[#2f2f2f] rounded-none md:w-1/2 md:pt-6 md:rounded"
      id="book-appointment"
    >
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
          Book Appointment
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>

       <form onSubmit={handleSubmi}>
        <div className="flex flex-col space-y-5 mb-5 md:mb-4">
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="Your Name *"
              required
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="Phone number *"
              required
              onChange={(e)=>setphone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              placeholder="Your Email"
            />
            <input
              className="p-2 w-full text-white bg-transparent border outline-none text-sm rounded placeholder-white"
              type="text"
              placeholder="2023-01-04 10:34:23"
              value={date_time}
              onChange={(e)=>setDate_time(e.target.value)}
            />
          </div>
        </div>
        <div className="text-[#333] mb-5 md:mb-4">
          <select className="p-1 rounded outline-none"              
          //  onChange={(e)=>setBranch(e.target.value)}
          //  value={branch}
           name="branch">
            <option  
            >Select Branch</option>
            <option>Uyo</option>
            <option>Port Harcourt</option>
            <option>Asaba,Asaba  </option>
            <option value={branch} onChange={(e)=>setBranch(e.target.value)}
            >Aba</option>
            <option value={branch} onChange={(e)=>setBranch(e.target.value)}>Lagos</option>
            <option >Abuja</option>
          </select>
        </div>
        <div>
          <textarea
            className="w-full h-40 p-2 mb-5 text-sm text-white bg-transparent border rounded placeholder-white md:mb-4"
            placeholder="Notes (if possible, tell us what your appointment is for)"
            onChange={(e)=>setNote(e.target.value)}
            value={note}
          />
        </div>
        <div className="flex justify-center">
          <button className="px-10 py-3 text-lg font-bold uppercase border border-white rounded-full transition-colors hover:bg-[#045544]" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
