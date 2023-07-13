import { MdUpdate } from "react-icons/md";

const DashboardButton = ({ text, showModalHandler ,showUpdatelHandler}) => {
  return (
    <div className="flex justify-end">
      <button
        className="flex justify-center space-x-1 py-2 px-3 mb-6 text-sm bg-[#f97729] text-white rounded outline-[#f97729] shadow-md transition-all hover:-translate-y-[1px] hover:bg-[#e06b25] hover:shadow-lg sm:text-base"
        onClick={showModalHandler}
      >
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        <span>{text}</span>
      </button>
    </div>
  );
};

export const DashboardEditButton = () => {
  return (
    <button className="py-1 px-2 text-lg lg:text-xl bg-[#045544] outline-[#045544] rounded shadow-md transition-all hover:-translate-y-[1px] hover:bg-[#1d6657] hover:shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    </button>
  );
};

export const DashboardUpdateButton = ({text},showModalHandler) => {
  return (
    <button className="py-1 px-2 text-white text-lg lg:text-xl bg-[#045544] outline-[#045544] rounded shadow-md transition-all hover:-translate-y-[1px] hover:bg-[#1d6657] hover:shadow-lg">
         <MdUpdate/>
      {text}
    </button>
  );
};

export const DashboardDeleteButton =  () => {
 
  return (
    <button className="py-1 px-2 text-lg lg:text-xl bg-[#045544] outline-[#045544] rounded shadow-md transition-all hover:-translate-y-[1px] hover:bg-[#1d6657] hover:shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-5 h-5 sm:w-6 sm:h-6"

      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
      
    </button>
  );
};

export const DashboardViewButton = ({text}) => {
  return (
    <button className="py-1 px-2 text-black bg-[#f8f8f8] outline-[#045544] rounded shadow-md transition-all hover:-translate-y-[1px]">
      
      {text}
    </button>
  );
};

export const DashboardAddButton = ({text}) => {
  return (
    <button className="py-1 px-2 bxg-[#045544] outline-[#045544] rounded shadow-md transition-all hover:-translate-y-[1px] ">
     {text}
    </button>
  );
};

export const DashboardGenerateButton = ({ text }) => {
  return (
    <button
      className={`py-1 px-4 bg-gray-500 outline-gray-500 text-white rounded shadow-md transition-all hover:-translate-y-[1px] hover:bg-gray-700 hover:shadow-lg`}
    >
      {text}
    </button>
  );
};

export const DashboardRegisterButton = ({ text }) => {
  return (
    <button
      className={`py-1 px-4 bg-[#f97729] outline-[#f97729] text-white rounded shadow-md transition-all hover:-translate-y-[1px] hover:bg-[#e06b25] hover:shadow-lg`}
    >
      {text}
    </button>
  );
};

export const DashboardCloseButton = ({ text, showModalHandler }) => {
  return (
    <button
      className={`py-1 px-4 bg-[#045544] outline-[#045544] text-white rounded shadow-md transition-all hover:-translate-y-[1px] hover:bg-[#1d6657] hover:shadow-lg`}
      onClick={showModalHandler}
    >
      {text}
    </button>
  );
};

export default DashboardButton;
