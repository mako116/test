import { Link } from "react-router-dom";
import rarrSvg from "../../../assets/rarr.svg";

const DashboardSmallNavigation = () => {
  return (
    <section className="py-[29.5px] bg-gray-50">
      <div className="flex justify-end px-4 sm:px-10">
        <button className="flex items-center space-x-2 text-sm sm:text-base">
          <p>imageplusng@gmail.com</p>
          <img className="w-4 h-4" src={rarrSvg} alt="Right Arrow" />
          <Link to="/login">login</Link>
        </button>
      </div>
    </section>
  );
};

export default DashboardSmallNavigation;
