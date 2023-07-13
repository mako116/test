import SummaryBox from "./SummaryBox";

const Summary = () => {
  return (
    <section className="pt-12 py-16 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl text-[#333] font-bold uppercase md:text-4xl">
          Eye Clinic in Uyo & Port Harcourt
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>
      <div className="mb-12">
        <p className="text-xl">
          Imageplus is an eye clinic in Akwa Ibom and Port Harcourt. We
          specialize in caring for all your vision needs. We handle everything
          from eye exams, preventative care, treatment, hard-to-fit contact
          lenses, computer vision problems, specialty lenses to low vision and
          blindness rehabilitation. We are focused on helping you see throughout
          your lifetime.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0 md:space-x-6">
        <SummaryBox bg="bg-eye-clinic" text="Eye Clinic" link="/about-us" />
        <SummaryBox
          bg="bg-services"
          text="Services"
          link="#services"
          anchor={true}
        />
        <SummaryBox bg="bg-visit-us" text="Visit Us" link="/contact-us" />
      </div>
    </section>
  );
};

export default Summary;
