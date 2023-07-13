 import React, { useState } from 'react'

const Services = () => {
  const [services,empDataChange] =useState([])
  React.useEffect(()=>{
         const getRes = () => {
          fetch("http://backend.imagepluseyeclinic.com/api/services")

          .then((res)=>{  
             return  res.json()
          }).then((resp)=>{
            console.log(resp.data);
              empDataChange(resp.data);
          }).catch((err)=>{
              console.log(err.message);
          }) 
         }
        getRes();
      
  },[])
  return (
    <section
      id="services"
      className="pt-10 pb-8 text-white bg-[#2f2f2f] md:pb-14 md:px-20 lg:px-16 xl:px-28"
    >
      <div className="flex flex-col items-center mb-5 md:mb-12">
        <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
          Our Services
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>
      <div className="mb-6 px-6 sm:px-12 md:px-0 md:mb-12">
        <p className="text-xl">
          Imageplus Eye Clinic provides comprehensive eye examinations through
          our fully computerized, with State-of-the-art equipment giving
          accurate results for effective diagnosis by our experienced experts.
          We make it easy to leverage professional eye care services at the
          convenience of our patient’s total well-being. We are committed to
          providing the best possible eye care, with exceptional customer's
          service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {
          services?.map(item=>(
            <div key={item.id} className="group text-center py-4 px-4 border-b md:pr-4 md:border-r">
            <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:mb-6 lg:w-16 lg:h-16"
              src={item.id}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
          {item.title}
          </h2>
          <p className="text-sm mb-3 md:text-base">
          {item.description}
          </p>
          <a
            href="services/low-vision-clinic"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            {item.short_desc}
          </a>
             </div>

          ))
      }
          {/* <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:mb-6 lg:w-16 lg:h-16"
              src={eyeIcon}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
            Low Vision Clinic
          </h2>
          <p className="text-sm mb-3 md:text-base">
            We create a world without limits by improving the vision for
            near-blind patients.
          </p>
          <a
            href="services/low-vision-clinic"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            Read more
          </a>
        </div>

        <div className="group text-center py-4 px-4 w-full border-b md:border-r">
          <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:w-16 lg:h-16 "
              src={clipboardIcon}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
            Geriatric & Pedriatic Care
          </h2>
          <p className="text-sm mb-3 md:text-base">
            Specialized eye care services for aged clients and also children.
          </p>
          <a
            href="services/geriatric-pedriatic-care"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            Read more
          </a>
        </div>

        <div className="group text-center py-4 px-4 border-b md:pl-4 lg:px-4 lg:border-r">
          <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:mb-6 lg:w-16 lg:h-16"
              src={documentMagnifyingGlassIcon}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
            Vision Screening
          </h2>
          <p className="text-sm mb-3 md:text-base">
            We provide vision screening services to individuals and corporate
            organizations.
          </p>
          <a
            href="services/vision-screening"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            Read more
          </a>
        </div>

        <div className="group text-center py-4 px-4 border-b md:pr-4 md:border-r lg:pr-0 lg:pl-4 lg:border-r-0">
          <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:mb-6 lg:w-16 lg:h-16"
              src={microphoneIcon}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
            Diagnostic Testing
          </h2>
          <p className="text-sm mb-3 md:text-base">
            We utilize computerized diagnostic equipment in the management of
            our patients.
          </p>
          <a
            href="services/diagonstic-testing"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            Read more
          </a>
        </div>

        <div className="group text-center py-4 px-4 border-b md:border-r lg:px-0 lg:pr-4 lg:border-b-0">
          <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:w-16 lg:h-16"
              src={lifeBuoyIcon}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
            Optical Services
          </h2>
          <p className="text-sm mb-3 md:text-base">
            We offer a wide range of Optical services including single vision,
            bifocal and varifocal lenses.
          </p>
          <a
            href="services/optical-services"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            Read more
          </a>
        </div>

        <div className="group text-center py-4 px-4 border-b md:pl-4 lg:px-4 lg:border-b-0 lg:border-r">
          <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:w-16 lg:h-16"
              src={eyeIcon}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
            Contact Lenses
          </h2>
          <p className="text-sm mb-3 md:text-base">
            Count on our knowledge and expertise to find the contact lenses
            perfect for your needs.
          </p>
          <a
            href="services/contact-lenses"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            Read more
          </a>
        </div>

        <div className="group text-center py-4 px-4 md:pr-4 md:border-r md:border-b-0 lg:px-4">
          <div className="flex justify-center items-center">
            <img
              className="mb-4 w-12 h-12 lg:w-16 lg:h-16"
              src={buildingOfficeIcon}
              alt="Eye Drop"
            />
          </div>
          <h2 className="mb-1 text-xl transition-colors group-hover:text-[#f97729] md:text-2xl">
            The Outdoor Clinic
          </h2>
          <p className="text-sm mb-3 md:text-base">
            High quality and professional service you can trust, in the comfort
            of your home.
          </p>
          <a
            href="services/the-outdoor-clinic"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#045544]"
          >
            Read more
          </a> */}
        </div>
     </section>
  );
};

export default Services;
