import React from "react";

const Others = () => {
  return (
    <section className="pt-12 pb-12 px-6 sm:px-12 md:pt-16 md:px-20 lg:px-16 xl:px-28">
      <div className="flex flex-col gap-0 md:flex-row md:gap-6 lg:gap-16">
        <div className="md:w-1/2">
          <div className="mb-10 lg:mb-16">
            <h2 className="mb-3 text-2xl text-[#333] font-bold uppercase md:text-3xl">
              Vision Correction Plans
            </h2>
            <p className="text-xl">
              At Imageplus Eye clinic, we are keen towards providing
              comprehensive eye screening/testing & lens prescriptions aimed at
              correcting our patients' visual ability and sustainability.
            </p>
            <p className="text-xl">
              Prior to prescription, our doctors determine what level of vision
              correction you require by completing a routine vision examination.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="mb-3 text-2xl text-[#333] font-bold uppercase md:text-3xl">
              Patient's Center
            </h2>
            <p className="text-xl">
              We run an Out - Patients Care Facility; which is always open to
              people/ patients to freely walk in to make enquiry about our
              services, get registered, consult, screened and testing. To
              cushion our idea of a comfortable eyecare facility, we operate a
              one - stop Eye Clinic where we also have a well stocked opthalmic
              pharmacy and frames and lenses accessories which makes your visit
              to our clinic more relaxed and comfortable; and that is the "PLUS
              EXPERIENCE".
            </p>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="mb-10">
            <h2 className="mb-3 text-2xl text-[#333] font-bold uppercase md:text-3xl">
              Staff Center
            </h2>
            <p className="text-xl">
              We have a well structured Administration which ensures a well
              structured staffing to ease the running of the clinic. To bring
              about effectiveness, the staffers welfare are never neglected.
            </p>
            <p className="text-xl">
              Our experienced and optical staff are always happy to see you at
              Imageplus Eye Clinic and ready to offer assistance for you to pick
              out our elegant and stylish frames to suit every style and budget.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="mb-3 text-2xl text-[#333] font-bold uppercase md:text-3xl">
              Our Corporate Responsibilities
            </h2>
            <p className="text-xl">
              To provide you with the best vision advice and fit today and in
              years to come by bringing world class eye care services to our
              clients in an affordable manner without comprising quality.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          className="inline-block px-5 py-3 text-[#f97729] text-lg uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729] md:px-10 md:py-4"
          href="#book-appointment"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default Others;
