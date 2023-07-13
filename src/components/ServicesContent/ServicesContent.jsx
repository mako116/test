import { Link } from "react-router-dom";

import lowVisionClinicImg from "../../assets/services/low-vision.jpg";
import geriatricPedriatricCareImg from "../../assets/services/geriatric-pedriatic-eye-care.jpg";
import visionScreeningImg from "../../assets/services/vision-screening.jpg";
import diagnosticTestingImg from "../../assets/services/diagnostic-testing.jpg";
import opticalServicesImg from "../../assets/services/optical-services.jpg";
import contactLensesImg from "../../assets/services/contact-lenses.jpg";
import theOutdoorClinicImg from "../../assets/services/the-outdoor-clinic.jpg";
import { useEffect } from "react";

const ServicesContent = ({
  lowVisionClinic,
  geriatricPedriatricCare,
  visionScreening,
  diagnosticTesting,
  opticalServices,
  contactLenses,
  theOutdoorClinic,
}) => {
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
      <div className="pt-12 pb-14 px-6 sm:px-12 md:px-20 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center mb-10">
          {lowVisionClinic && (
            <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
              Low Vision Clinic
            </h2>
          )}
          {geriatricPedriatricCare && (
            <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
              Geriatric & Pedriatic Eye Care
            </h2>
          )}
          {visionScreening && (
            <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
              Vision Screening & Training Programs
            </h2>
          )}
          {diagnosticTesting && (
            <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
              Automated Diagonstic Testing
            </h2>
          )}
          {opticalServices && (
            <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
              Opthalmic & Optical Services
            </h2>
          )}
          {contactLenses && (
            <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
              Contact Lenses
            </h2>
          )}
          {theOutdoorClinic && (
            <h2 className="mb-2 text-center text-4xl font-bold uppercase md:text-5xl">
              The Outdoor Clinic
            </h2>
          )}
          <div className="w-10 h-[3px] bg-[#f97729]" />
        </div>
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0">
          <div className="flex justify-center lg:w-1/2 lg:justify-start">
            {lowVisionClinic && (
              <img
                className="w-96 h-96"
                src={lowVisionClinicImg}
                alt="Low Vision Clinic"
              />
            )}
            {geriatricPedriatricCare && (
              <img
                className="w-96 h-72"
                src={geriatricPedriatricCareImg}
                alt="Geriatric & Pedriatric Care"
              />
            )}
            {visionScreening && (
              <img
                className="w-96 h-96"
                src={visionScreeningImg}
                alt="Vision Screening"
              />
            )}
            {diagnosticTesting && (
              <img
                className="w-96 h-96"
                src={diagnosticTestingImg}
                alt="Diagnostic Testing"
              />
            )}
            {opticalServices && (
              <img
                className="w-96 h-96"
                src={opticalServicesImg}
                alt="Optical Services"
              />
            )}
            {contactLenses && (
              <img
                className="w-96 h-96"
                src={contactLensesImg}
                alt="Contact Lenses"
              />
            )}
            {theOutdoorClinic && (
              <img
                className="w-96 h-96"
                src={theOutdoorClinicImg}
                alt="The Outdoor Clinic"
              />
            )}
          </div>
          {lowVisionClinic && (
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <p>
                Our Low Vision Clinic offers a holistic therapy to restore
                functional vision to patients with severe vision impairment
                following damage to retina, optic nerve or brain. This category
                of patients who are near-blind still possess residual vision
                that can be managed and improved upon.
              </p>
              <p>
                Our Optometric team creates a world without limits for the
                visually impaired using innovative technology to strengthen and
                maximize the potentials of people with low vision and blindness
                to enable them lead an independent life, since vision is
                integral to your quality of life. We strive to give you the
                sharpest vision possible so you enjoy life to its fullest.
              </p>
              <p>
                We offer a range of low vision devices such as magnifiers,
                telescopes, electronic video magnifiers and E- vision glasses to
                enhance vision for the legally blind.
              </p>
            </div>
          )}
          {geriatricPedriatricCare && (
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <p>
                Optometric care of the older patient and children requires a
                variety of approaches to be taken in the eye exam. Our well
                equipped Doctor of Optometry can provide the utmost of care for
                this group of people who deserve compassion and dignity in their
                care.
              </p>
            </div>
          )}
          {visionScreening && (
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <p>
                We provide vision screening services to individuals and
                corporate organizations that want an assessment of the status of
                their eye health. We counsel and advise according to our
                findings. Example of our vision screening program includes
                screening of school children, drivers and staff of corporate
                organizations for any visual abnormality.
              </p>
              <p>
                In addition, seminars on eye education can be conducted for
                clients and staff of corporate organizations.
              </p>
            </div>
          )}
          {diagnosticTesting && (
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <p>
                We are the leading edge of eye care and patient technology, with
                advanced diagnostic techniques. Our Optometrists address
                specific needs of their patients, they take their time to
                complete a thorough eye examination and answer questions you
                might have regarding your eye health. We diagnose, treat and
                manage different eye diseases.Ever wondered what the back of
                your eyes look like?
              </p>
              <p>
                Our Retinal photos allow us to capture an image of your retina
                at your examination so that a complete ocular health history can
                be kept on file. Your photos can then be compared year to year
                to establish if there is any relative change in your eye health
                between visits. This will allow our Optometrists to see very
                subtle changes that may not have been otherwise detected.
              </p>
              <p>
                We strongly recommend retinal photos especially for patients who
                have a family history of glaucoma , macular degeneration, high
                blood pressure , diabetes , retinal problems or poor vision.
              </p>
            </div>
          )}
          {opticalServices && (
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <p>
                Enjoy truly customized lenses exclusively for your eyes. Our
                lenses protect from sunlight, glare and block harmful blue
                light. We offer a variety of lenses including progressive
                varifocals.
              </p>
              <p>
                Let’s face it,most of us want to look fabulous in our new
                glasses. We spend incredible amount of time evaluating the new
                lines in order to bring unique and beautiful frames to Imageplus
                eye clinic. Our current selection represents the latest in
                fashion eyewear in other to provide you with a shopping
                experience comparable to anywhere in the world. Our wide
                selection of frames include popular brands, value- priced frames
                and designer labels.
              </p>
              <p>
                Our in house workshop ensures that your lenses are of the
                highest quality and fit your frame to perfection.
              </p>
              <p>
                Once you’ve taken your new glasses home and had some time to
                work with them, we will call you to ensure you are happy with
                your new eye wear. If for whatever reason you are having
                difficulty adjusting to your new prescription, we’ll work with
                you until we solve the problem. We guarantee our products. Our
                Opticians are trained to fabricate and fit lenses within 24hrs.
              </p>
            </div>
          )}
          {contactLenses && (
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <p>
                Tired of always sitting on your glasses and trying to tape them
                back? Then go frameless and never worry again! Count on our
                knowledge and expertise to find the contact lenses perfect for
                your needs, whether you want night and day contact
                lenses,costume contact lenses, daily disposables, prosthetic
                contact lenses or need a set for your astigmatism.
              </p>
              <p>
                Lose the frames without losing your clear vision! With a wide
                selection of brands, colors and styles as well as good care and
                personal attention, you will walk out of Imageplus eye clinic
                confident in the fact that you have found only the best contact
                lenses and cleaning solutions to fit your needs.
              </p>
            </div>
          )}
          {theOutdoorClinic && (
            <div className="flex flex-col space-y-4 text-xl lg:w-3/4">
              <p>
                Having difficulty seeing your eye doctor due to illness,
                disability or the likes? We can always be of help.
              </p>
              <p>
                At Imageplus Eye Clinic, we bring you a high quality and
                professional service you can trust, in the comfort of your home,
                saving you time and hassle, without compromise.
              </p>
            </div>
          )}
        </div>
      </div>

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

export default ServicesContent;
