import HeroContact from "../components/Home/HeroContact";
import Hero from "../components/Home/Hero";
import Summary from "../components/Home/Summary/Summary";
import Services from "../components/Home/Services";
import Others from "../components/Home/Others";
import BookAppointmentTestimonials from "../components/Home/BookAppointmentTestimonials/BookAppointmentTestimonials";
import Doctors from "../components/Home/Doctors";
import Partners from "../components/Home/Partners";
import Milestone from "../components/Home/Milestone";

const HomePage = () => {
  return (
    <>
      <HeroContact />
      <Hero />
      <Summary />
      <Services />
      <Others />
      <BookAppointmentTestimonials />
      <Doctors />
      <Partners />
      <Milestone />
    </>
  );
};

export default HomePage;
