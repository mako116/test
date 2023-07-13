import { Link } from "react-router-dom";

import firstDoctorImg from "../../assets/doctors/doctor-1.jpg";
import secondDoctorImg from "../../assets/doctors/doctor-2.jpg";
import { useEffect } from "react";

const DoctorsContent = ({ drIjeoma, drEdidiong }) => {
  function ScrollToTopMount(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null
}
  return (
    <section>
            <ScrollToTopMount/>
      <div className="py-56 bg-pages-heroBg bg-no-repeat bg-cover bg-center" />
      {drIjeoma && (
        <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
          <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
            <div className="flex justify-center lg:w-1/2 lg:justify-start">
              <img
                className="w-96 h-[450px]"
                src={firstDoctorImg}
                alt="Dr Ijeoma Nnabuife"
              />
            </div>
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <div>
                <h3 className="mb-2 font-bold text-2xl text-[#f97729] md:text-3xl">
                  Dr (Lady) Ijeoma Nnabuife
                </h3>
                <p className="font-bold">Frontline Optometrist</p>
              </div>
              <p>
                Meet our Frontline Optometrist here at ImagePlus Eye Clinic Dr
                (Lady) Ijeoma Nnabuife (KSJI) OD, MNOA. She is a certified
                optometric physician who specializes in vision correction,
                contact lens Prescription, diagnosing and management of ocular
                diseases such as dry eye, age related macular degeneration
                (AMD), glaucoma, diabetic/hypertensive retinopathy, cataract
                etc. She is not only a primary eye care provider but also vested
                in public health. She’s aware of patients' overall medical
                history and deliver eye care accordingly.
              </p>
            </div>
          </div>
        </div>
      )}

      {drEdidiong && (
        <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
          <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
            <div className="flex justify-center lg:w-1/2 lg:justify-start">
              <img
                className="w-96 h-[450px]"
                src={secondDoctorImg}
                alt="Dr Ijeoma Nnabuife"
              />
            </div>
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <div>
                <h3 className="mb-2 font-bold text-2xl text-[#f97729] md:text-3xl">
                  Dr Edidiong Monday Udo
                </h3>
                <p className="font-bold">Optometrist</p>
              </div>
              <p>
                Meet our Frontline Optometrist here at ImagePlus Eye Clinic Dr
                (Lady) Ijeoma Nnabuife (KSJI) OD, MNOA. She is a certified
                optometric physician who specializes in vision correction,
                contact lens Prescription, diagnosing and management of ocular
                diseases such as dry eye, age related macular degeneration
                (AMD), glaucoma, diabetic/hypertensive retinopathy, cataract
                etc. She is not only a primary eye care provider but also vested
                in public health. She’s aware of patients' overall medical
                history and deliver eye care accordingly.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center space-y-4 px-4 py-6 bg-[#f97729] text-white lg:flex-row lg:justify-around lg:items-center lg:space-y-0 lg:px-0">
        <p className="text-xl text-center md:text-2xl">
          Book an Appointment with our Eye Clinic in Uyo
        </p>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <Link
              to="tel:+2349071259643"
              className="inline-block px-5 py-2 uppercase font-bold border-2 border-white rounded-full transition-all hover:text-white hover:bg-[#045544] md:px-8 md:py-3 md:text-lg"
            >
              Call Now
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/contact-us"
              className="inline-block px-5 py-2 uppercase font-bold border-2 border-white rounded-full transition-all hover:text-white hover:bg-[#045544] md:px-8 md:py-3 md:text-lg"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsContent;
