import { useParams } from "react-router-dom";

import DoctorsContent from "../components/DoctorsContent.jsx/DoctorsContent";

const DoctorsContentPage = () => {
  const params = useParams();

  return (
    <>
      {params.doctorId === "dr-ijeoma-nnabuife" && (
        <DoctorsContent drIjeoma={true} />
      )}
      {params.doctorId === "dr-edidiong-monday-udo" && (
        <DoctorsContent drEdidiong={true} />
      )}
    </>
  );
};

export default DoctorsContentPage;
