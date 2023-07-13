import yearsCombinedIcon from "../../assets/milestone/square-3-stack-3d.svg";
import userIcon from "../../assets/milestone/user.svg";
import checkCircleIcon from "../../assets/milestone/check-circle.svg";

const Milestone = () => {
  return (
    <section className="py-10 text-white bg-milestone bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col space-y-10 sm:flex-row sm:justify-around sm:space-y-0">
        <div className="flex flex-col items-center">
          <img
            className="w-14 h-14"
            src={yearsCombinedIcon}
            alt="Years Combined"
          />
          <span className="mb-2">combined</span>
          <span className="text-4xl md:text-5xl lg:text-6xl">15</span>
          <span className="text-lg md:text-xl">years experience</span>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-14 h-14" src={userIcon} alt="Patient" />
          <span className="mb-2">over</span>
          <span className="text-4xl md:text-5xl lg:text-6xl">9700</span>
          <span className="text-lg md:text-xl">patients</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-14 h-14"
            src={checkCircleIcon}
            alt="Positive Reviews"
          />
          <span className="mb-2">over</span>
          <span className="text-4xl md:text-5xl lg:text-6xl">1500</span>
          <span className="text-lg md:text-xl">positive reviews</span>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
