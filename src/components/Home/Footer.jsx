import { Link } from "react-router-dom";

import { BsFacebook, BsInstagram } from "react-icons/bs";

import locationIcon from "../../assets/map-pin.svg";
import timeIcon from "../../assets/clock.svg";
import phoneIcon from "../../assets/phone.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-8 pt-8 pb-12 px-6 bg-[#efefef] sm:px-8 lg:px-16 xl:px-28 md:flex-row md:space-y-0 md:space-x-4 lg:justify-between lg:space-x-0">
      <div className="flex flex-col space-y-2 text-lg">
        <h3 className="text-2xl text-[#f97729] font-bold">Uyo, Akwa Ibom</h3>
        <div className="flex space-x-4">
          <img className="w-7 h-7" src={locationIcon} alt="Location" />
          <p className="max-w-sm">
            12 William Street (Amaecom Global House) Just after Nepa line road
            by Aka road Uyo, Akwa Ibom State
          </p>
        </div>
        <div className="flex space-x-4">
          <img className="w-7 h-7" src={timeIcon} alt="Time" />
          <p className="max-w-[250px]">
            Monday - Friday 8AM - 5PM Saturday 8AM - 5PM
          </p>
        </div>
        <div className="flex space-x-4">
          <img className="w-6 h-6" src={phoneIcon} alt="Phone" />
          <Link to="tel:+2349071259643">0907 125 9643</Link>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <h3 className="mb-4 text-2xl text-[#f97729] font-bold">
            Stay in touch:
          </h3>
          <form className="flex items-center space-x-4">
            <input
              className="px-3 py-2 w-80 bg-transparent border border-[#9b9c9e] rounded md:w-60 lg:w-80"
              type="text"
              placeholder="Enter your e-mail here..."
            />
            <button className="px-4 py-2 text-sm text-white font-bold uppercase bg-[#2f2f2f] rounded-full transition-opacity hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex space-x-4">
          <h3 className="mb-4 text-2xl text-[#f97729] font-bold">Follow us:</h3>
          <div className="flex space-x-4 mt-1">
            <Link
              rel="noreferrer"
              target="_blank"
              to="https://www.instagram.com/imagepluseyeclinic/"
              className="inline-block transition-all hover:scale-110"
            >
              <BsInstagram size={24} />
            </Link>
            <Link
              rel="noreferrer"
              target="_blank"
              to="https://www.facebook.com/imagepluseyeclinic?mibextid=ZbWKwL"
              className="inline-block transition-all hover:scale-110"
            >
              <BsFacebook size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
