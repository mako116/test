import React,{useState} from 'react'
import DashboardButton, { DashboardDeleteButton, DashboardUpdateButton } from '../DashboardButton'
 import DashboardClients from './DashboardClients';
import DashboardOverlay from '../DashboardOverlay';
import axios from 'axios';
import { toast } from 'react-toastify';
  const DashBoardPart = () => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
      setShowModal((prevVal) => !prevVal);
    };
  
    const [data,empDataChange] =useState([])
    React.useEffect(()=>{
  
   
           const getRes = () => {
            fetch("http://backend.imagepluseyeclinic.com/api/clients")
  
            .then((res)=>{
                return res.json()
            }).then((resp)=>{
              console.log(resp.data);
                empDataChange(resp.data);
            }).catch((err)=>{
                console.log(err.message);
            }) 
           }
           getRes();
        
    },[])

    function deleteHand(id){
      axios.delete(`https://backend.imagepluseyeclinic.com/api/clients/${id}`)
      .then(()=>{
        toast.success("deleted")
       })
    }
  return (
    <div>
      <section className="relative pt-7 px-3 sm:px-8">
        <DashboardButton
          showModalHandler={showModalHandler}
          text="Add Patients"
        />
        <div className="bg-white shadow-md overflow-x-auto">
          <h4 className="w-screen py-2 text-white text-xl text-center bg-[#f97729] rounded-t sm:w-screen">
          Update users
          </h4>
          <table className="w-screen text-center bg-white rounded sm:w-full">
            <thead>
              <tr className="text-lg border-b-2">
                  <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">name</th>
                  <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">image </th>
                <th className="px-2 py-2 md:px-16 lg:px-4 xl:px-12">Action </th>
              </tr>
            </thead>
            <tbody>
            {
               data.map(item=>(
               <tr key={item.id}>
                 <td className="py-2 px-2">{item.name}</td>
                <td className="space-x-2 py-5 px-5 border">{item.image}</td>
               <td>
                    <span>
                    <DashboardUpdateButton />
                    </span>
                     <span className='m-2' onClick={()=>deleteHand(item.id)}>
                    <DashboardDeleteButton/>
                    </span>
                </td>
                 </tr>
              
             ))
            }
            </tbody>
          </table>
        </div>
        {showModal && (
          <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 md:top-6">
            <DashboardClients showModalHandler={showModalHandler} />
          </div>
        )}
      </section>

      {showModal && <DashboardOverlay />}
    </div>
  
  )
}

export default DashBoardPart
