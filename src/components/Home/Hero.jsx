import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroSection = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      preventMovementUntilSwipeScrollTolerance={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
    >
      <div className="flex justify-center bg-heroBg-sm-1 bg-cover bg-no-repeat bg-top h-full md:justify-end md:bg-heroBg-1g-1">
        <div className="py-32 px-16 text-white md:py-56">
          <div className="text-center">
            <h2 className="mb-3 font-bold text-3xl sm:text-4xl md:text-[55px]">
              We Are Imageplus Clinic
            </h2>
            <p className="mb-10 text-xl italic sm:text-2xl md:text-3xl">
              Your Primary Eye Care Practitioners
            </p>
          </div>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0 md:justify-center">
            <a
              href="#doctors"
              className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10"
            >
              Meet Our Doctors
            </a>
            <a
              href="#book-appointment"
              className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-heroBg-sm-2 bg-cover bg-no-repeat bg-top h-full mb-16 md:justify-end md:mb-20 md:bg-heroBg-1g-2">
        <div className="py-32 px-16 text-white md:py-56">
          <div className="text-center">
            <h2 className="mb-3 font-bold text-3xl sm:text-4xl md:text-[55px]">
              We Are Imageplus Clinic
            </h2>
            <p className="mb-10 text-xl italic sm:text-2xl md:text-3xl">
              We Love What We Do
            </p>
          </div>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0 md:justify-center">
            <a
              href="#doctors"
              className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10"
            >
              Meet Our Doctors
            </a>
            <a
              href="#book-appointment"
              className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-heroBg-sm-3 bg-cover bg-no-repeat bg-top h-full mb-16 md:justify-end md:mb-20 md:bg-heroBg-1g-3">
        <div className="py-32 px-16 text-white md:py-56">
          <div className="text-center">
            <h2 className="mb-3 font-bold text-3xl sm:text-4xl md:text-[55px]">
              We Are Imageplus Clinic
            </h2>
            <p className="mb-10 text-xl italic sm:text-2xl md:text-3xl">
              Give Them Good Vision
            </p>
          </div>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0 md:justify-center">
            <a
              href="#doctors"
              className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10"
            >
              Meet Our Doctors
            </a>
            <a
              href="#book-appointment"
              className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HeroSection;
