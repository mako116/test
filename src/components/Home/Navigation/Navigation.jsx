import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MobileNav from "./MobileNav";

import logo from "../../../assets/logo.svg";
import hamburgerMenuIcon from "../../../assets/hamburger-menu.svg";
import closeMenuIcon from "../../../assets/x-mark.svg";

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const location = useLocation();

  const showMobileNavHandler = () => {
    setShowMobileNav((prevVal) => !prevVal);
  };

  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? undefined : (
        <div
          className={`sticky-default flex items-center justify-between px-6 h-20 text-[#555] bg-white xl:justify-center lg:h-32 xl:h-28 ${
            !showMobileNav && "shadow-xl"
          }`}
        >
          <Link
            to="/"
            className="flex items-center h-full lg:pr-7 "
            onClick={() => setShowMobileNav(false)}
          >
            <img className="w-16 lg:w-[92px]" src={logo} alt="Logo" />
          </Link>

          <nav className="hidden justify-center items-center h-full pr-7 pt-10 pb-4 lg:flex lg:flex-col lg:border-l xl:flex-row xl:pt-0 xl:pb-0">
            <ul className="flex items-center space-x-8 px-7 h-full uppercase xl:space-x-12">
              <li className="transition hover:text-[#f97729]">
                <Link to="/">Home</Link>
              </li>
              <li className="transition hover:text-[#f97729]">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="transition hover:text-[#f97729]">
                <Link to="/services">Services</Link>
              </li>
              <li className="transition hover:text-[#f97729]">
                <Link to="/news-updates">News & Updates</Link>
              </li>
              <li className="transition hover:text-[#f97729]">
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
            <a
              className="inline-block mt-6 px-5 py-3 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729] xl:mt-0"
              href="#book-appointment"
            >
              Book Appointment
            </a>
          </nav>

          <div className="hidden items-center pl-7 border-l h-full lg:flex xl:pl-7">
            <input className="outline-none" type="text" placeholder="Search" />
          </div>

          <button className="lg:hidden" onClick={showMobileNavHandler}>
            <img
              src={showMobileNav ? closeMenuIcon : hamburgerMenuIcon}
              alt={showMobileNav ? "Close Menu" : "Hamburger Menu"}
            />
          </button>
        </div>
      )}

      {/* Dashboard */}
      {location.pathname === "/login" || location.pathname === "/register" ? (
        <div className="sticky-default flex items-center justify-between px-6 h-[86px] text-[#555] bg-white md:px-20 lg:px-24">
          <Link
            to="/"
            className="flex items-center h-full"
            onClick={() => setShowMobileNav(false)}
          >
            <img className="w-20" src={logo} alt="Logo" />
          </Link>

          <nav className="hidden justify-center items-center sm:flex sm:flex-row">
            <ul className="flex items-center space-x-8 uppercase xl:space-x-12">
              <li className="transition hover:text-[#f97729]">
                <Link to="/login">Login</Link>
              </li>
              <li className="transition hover:text-[#f97729]">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>

          <button className="sm:hidden" onClick={showMobileNavHandler}>
            <img
              src={showMobileNav ? closeMenuIcon : hamburgerMenuIcon}
              alt={showMobileNav ? "Close Menu" : "Hamburger Menu"}
            />
          </button>
        </div>
      ) : undefined}

      {/* Mobile Menu */}
      <MobileNav
        showMobileNav={showMobileNav}
        showMobileNavHandler={showMobileNavHandler}
      />
    </>
  );
};

export default Navigation;
