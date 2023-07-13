import { Link } from "react-router-dom";

const SummaryBox = ({ bg, text, link, anchor }) => {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center bg-cover bg-no-repeat bg-center w-full h-[331px] rounded transition-all duration-[0.8s] after:bg-[rgba(0,0,0,0.15)] after:block after:w-full after:h-[500px] after:absolute after:z-10 after:rounded hover:after:transition-all after:hover:duration-[700ms] hover:after:ease-[cubic-bezier(0.45,0,0.55,1)] hover:after:bg-[rgba(0,0,0,0.4)] sm:w-[480px] sm:h-[380px] md:w-[240px] md:h-[220px] lg:w-[360px] lg:h-[331px] + ${bg}`}
    >
      {anchor && (
        <a
          className="relative z-20 inline-block py-3 px-6 text-white text-lg uppercase font-bold border-[3px] border-white rounded-full transition-all duration-300 hover:bg-[#045544] hover:border-[#045544] md:py-2 md:px-4 md:text-base lg:py-3 lg:px-6"
          href={link}
        >
          {text}
        </a>
      )}
      {!anchor && (
        <Link
          className="relative z-20 inline-block py-3 px-6 text-white text-lg uppercase font-bold border-[3px] border-white rounded-full transition-all duration-300 hover:bg-[#045544] hover:border-[#045544] md:py-2 md:px-4 md:text-base lg:py-3 lg:px-6"
          to={link}
        >
          {text}
        </Link>
      )}
    </div>
  );
};

export default SummaryBox;
