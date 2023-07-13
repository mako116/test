import { NavLink, Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import dashboardSvg from "../../../assets/dashboard/home.svg";
import patientsSvg from "../../../assets/dashboard/user-group.svg";
import servicesSvg from "../../../assets/dashboard/services.svg";
import doctorsSvg from "../../../assets/dashboard/users.svg";
import partnersSvg from "../../../assets/dashboard/globe-alt.svg";
import testimonialsSvg from "../../../assets/dashboard/inbox.svg";
import newsUpdateSvg from "../../../assets/dashboard/newspaper.svg";
import commentsSvg from "../../../assets/dashboard/tag.svg";
import bookAppointmentSvg from "../../../assets/dashboard/ticket.svg";
import usersSvg from "../../../assets/dashboard/user.svg";

const DashboardMainNavigation = () => {
  return (
    <section className="px-4 pb-12 text-lg bg-gray-100 h-full">
      <Link to="/admin" className="flex justify-center mb-4 border-b-2">
        <img className="w-[70px]" src={logo} alt="Logo" />
      </Link>

      <nav>
        <ul
          id="dMainNav"
          className="flex flex-col space-y-6 text-sm md:space-y-8 md:text-base lg:text-lg"
        >
          <li>
            <NavLink
              to="/admin"
              className={`flex flex-col items-center border-b-2 pb-4 transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
              end
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={dashboardSvg}
                alt="Dashboard"
              />
              <h4>Dashboard</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/patients"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={patientsSvg}
                alt="Patients"
              />
              <h4>Patients</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/services"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={servicesSvg}
                alt="Services"
              />
              <h4>Services</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/doctors"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={doctorsSvg}
                alt="Doctors"
              />
              <h4>Doctors</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/partners"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={partnersSvg}
                alt="Partners"
              /> 
              <h4>Partners</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/testimonials"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={testimonialsSvg}
                alt="Testimonials"
              />
              <h4>Testimonials</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/news-update"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={newsUpdateSvg}
                alt="News Update"
              />
              <h4 className="text-center md:text-left">News Update</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/comments"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={commentsSvg}
                alt="Comments"
              />
              <h4>Comments</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/book-appointment"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={bookAppointmentSvg}
                alt="Book Appointment"
              />
              <h4 className="text-center md:text-left">Book Appointment</h4>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/users"
              className={`flex flex-col items-center transition-colors hover:text-[#f97729] md:flex-row md:items-stretch md:space-x-2 ${({
                isActive,
              }) => (isActive ? "active" : undefined)}`}
            >
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src={usersSvg}
                alt="User Management"
              />
              <h4 className="text-center md:text-left">User Management</h4>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default DashboardMainNavigation;
