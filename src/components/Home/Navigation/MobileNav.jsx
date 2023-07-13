import { Link, useLocation } from "react-router-dom";

import searchIcon from "../../../assets/magnifying-glass.svg";

const MobileNav = ({ showMobileNav, showMobileNavHandler }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? undefined : (
        <div
          className={`fixed z-30 top-0 right-0 h-screen w-full bg-[rgba(0,0,0,0.4)] duration-700 transition-all lg:hidden ${
            showMobileNav
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
          onClick={showMobileNavHandler}
        />
      )}

      {location.pathname === "/login" ||
      location.pathname === "/register" ? undefined : (
        <nav
          className={`fixed right-0 z-30 h-screen w-3/4 text-lg bg-white border-t-2 duration-500 transition-all lg:hidden ${
            showMobileNav
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="flex justify-between space-x-2 py-3 border-b">
            <input
              className="outline-none w-full px-6"
              type="text"
              placeholder="Search"
            />
            <button className="px-6">
              <img className="w-8 h-8" src={searchIcon} alt="Search Icon" />
            </button>
          </div>
          <ul className="mb-8">
            <li
              className="py-2 px-6 border-b transition hover:text-[#f97729]"
              onClick={showMobileNavHandler}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="py-2 px-6 border-b transition hover:text-[#f97729]"
              onClick={showMobileNavHandler}
            >
              <Link to="/about-us">About us</Link>
            </li>
            <li
              className="py-2 px-6 border-b transition hover:text-[#f97729]"
              onClick={showMobileNavHandler}
            >
              <a href="/services">Services</a>
            </li>
            <li
              className="py-2 px-6 border-b transition hover:text-[#f97729]"
              onClick={showMobileNavHandler}
            >
              <Link to="/news-updates">News & Updates</Link>
            </li>
            <li
              className="py-2 px-6 border-b transition hover:text-[#f97729]"
              onClick={showMobileNavHandler}
            >
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>

          <div className="flex justify-center">
            <a
              className="inline-block px-4 py-2 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729]"
              href="#book-appointment"
              onClick={showMobileNavHandler}
            >
              Book Appointment
            </a>
          </div>
        </nav>
      )}

      {/* Dashboard */}
      {location.pathname === "/login" || location.pathname === "/register" ? (
        <div
          className={`fixed z-30 top-0 right-0 h-screen w-full bg-[rgba(0,0,0,0.4)] duration-700 transition-all sm:hidden ${
            showMobileNav
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
          onClick={showMobileNavHandler}
        />
      ) : undefined}

      {location.pathname === "/login" || location.pathname === "/register" ? (
        <nav
          className={`fixed right-0 z-30 h-screen w-3/4 text-lg bg-white border-t-2 duration-500 transition-all sm:hidden ${
            showMobileNav
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <ul className="mb-8">
            <li
              className="py-2 px-6 border-b transition hover:text-[#f97729]"
              onClick={showMobileNavHandler}
            >
              <Link to="/login">Login</Link>
            </li>
            <li
              className="py-2 px-6 border-b transition hover:text-[#f97729]"
              onClick={showMobileNavHandler}
            >
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      ) : undefined}
    </>
  );
};

export default MobileNav;
