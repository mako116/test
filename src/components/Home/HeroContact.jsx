import { Link } from "react-router-dom";

const HeroContact = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 py-6 px-4 mb-3 bg-[#f97729] text-white text-center text-[15px] md:flex-row md:space-y-0 md:space-x-8 lg:space-x-20">
      <div className="md:pr-4 md:border-r lg:pr-16">
        <p className="font-bold">12 William Street (Amaecom Global House)</p>
        <p>Just after Nepa line road by Aka road</p>
        <p>Uyo, Akwa Ibom State</p>
      </div>
      <div className="md:pr-4 md:border-r lg:pr-16">
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
          <Link to="mailto:imageplusng@gmail.com">imageplusng@gmail.com</Link>
        </p>
      </div>
      <div>
        <p className="font-bold">Office Hours</p>
        <p>Monday - Friday: 8AM - 5PM</p>
        <p>Saturday: 8AM - 5PM</p>
      </div>
    </div>
  );
};

export default HeroContact;
