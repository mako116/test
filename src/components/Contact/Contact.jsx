import { useState } from "react";
import { Link } from "react-router-dom";

import locationIcon from "../../assets/map-pin.svg";
import phoneIcon from "../../assets/phone.svg";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
 
  const [name, setName] =useState("")
  const [date_time, setDate_time] =useState("")
  
  const [branch, setBranch] =useState("")
   
  const [email, setEmail] =useState("")
  const[phone, setphone] = useState('')
  const[note, setNote] = useState("")
 
  const handleSubmi = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://backend.imagepluseyeclinic.com/api/appointments', {
        name,
        branch ,
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
    <section>
      <div className="py-56 bg-pages-heroBg bg-no-repeat bg-cover bg-center" />
      <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center mb-12">
          <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
            Contact us
          </h2>
          <div className="w-10 h-[3px] bg-[#f97729]" />
        </div>

        <div className="flex flex-col justify-center space-y-6 px-4 mb-20 text-lg md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:text-xl lg:space-x-20">
          <div className="flex flex-col items-center text-center md:pr-4 md:border-r md:border-gray-300 lg:pr-16">
            <div className="mb-3">
              <img
                className="w-9 h-9 md:w-12 md:h-12"
                src={locationIcon}
                alt="Location Icon"
              />
            </div>
            <div>
              <p>12 William Street (Amaecom Global House)</p>
              <p>Just after Nepa line road by Aka road</p>
              <p>Uyo, Akwa Ibom State</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-3">
              <img
                className="w-9 h-9 md:w-12 md:h-12"
                src={phoneIcon}
                alt="Location Icon"
              />
            </div>
            <div>
              <p>
                <span className="font-bold">Phone:</span>{" "}
                <Link to="tel:+2349071259643">+2349071259643</Link>
              </p>
              <p>
                <span className="font-bold">Optometrist:</span>{" "}
                <Link to="tel:+2347030729996">+2347030729996</Link>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <Link to="mailto:imageplusng@gmail.com">
                  imageplusng@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Book Appointment */}
        <div id="book-appointment">
          <div className="flex flex-col items-center mb-12">
            <h2 className="mb-3 text-center text-4xl font-bold uppercase md:text-5xl">
              Request a Consultation
            </h2>
            <div className="w-10 h-[3px] bg-[#f97729]" />
          </div>

          <form onSubmit={handleSubmi}>
            <div className="flex flex-col space-y-5 mb-5 md:space-y-8 md:mb-8">
              <div className="flex flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0">
                <input
                  className="p-3 w-full bg-transparent border outline-none text-sm rounded"
                  type="text"
                  placeholder="Your Name *"
                  required
                  onChange={(e)=>setName(e.target.value)}
                   value={name}
                />
                <input
                  className="p-3 w-full bg-transparent border outline-none text-sm rounded"
                  type="text"
                  placeholder="Phone number *"
                  required
                  onChange={(e)=>setphone(e.target.value)}
                  value={phone}
                />
              </div>
             
               <div className="flex w-full flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0">
                <input
                  className="p-3 w-full bg-transparent border outline-none text-sm rounded"
                  type="text"
              placeholder="2023-01-04 10:34:23"
              value={date_time}
              onChange={(e)=>setDate_time(e.target.value)}
                />
                
                 <input
                  className="p-3 w-full bg-transparent border outline-none text-sm rounded"
                  type="email"
                  placeholder="email *"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
             <div className="text-[#333] mb-5 md:mb-8">
              <select
                className="p-2 border w-full rounded outline-none"
                name="branch"
              >
                <option onChange={(e)=>setBranch(e.target.value)} value="select branch">Select Branch</option>
                <option onChange={(e)=>setBranch(e.target.value)} value={branch}>Uyo</option>
                <option onChange={(e)=>setBranch(e.target.value)} value="port harcourt">Port Harcourt</option>
                <option onChange={(e)=>setBranch(e.target.value)} value="asaba asaba">Asaba, Asaba</option>
                <option onChange={(e)=>setBranch(e.target.value)} value="aba">Aba</option>
                <option onChange={(e)=>setBranch(e.target.value)} value="lagos">Lagos</option>
                <option onChange={(e)=>setBranch(e.target.value)} value={branch}>Abuja</option>
              </select>
            </div>
            <div>
            <textarea 
             className="w-full h-40 p-2 mb-5 text-sm text-black bg-transparent border rounded placeholder-white md:mb-4"
            placeholder="Notes (if possible, tell us what your appointment is for)"
            onChange={(e)=>setNote(e.target.value)}
            value={note}
            />
            <textarea
           
          />
        </div>
              
            <div className="flex justify-center">
              <button className="px-10 py-3 text-lg font-bold uppercase bg-[#2f2f2f] text-white rounded-full transition-colors hover:bg-[#045544]" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
