import { useParams } from "react-router-dom";

import ServicesContent from "../components/ServicesContent/ServicesContent";

const ServicesContentPage = () => {
  const params = useParams();

  return (
    <>
      {params.serviceId === "low-vision-clinic" && (
        <ServicesContent lowVisionClinic={true} />
      )}
      {params.serviceId === "geriatric-pedriatic-care" && (
        <ServicesContent geriatricPedriatricCare={true} />
      )}
      {params.serviceId === "vision-screening" && (
        <ServicesContent visionScreening={true} />
      )}
      {params.serviceId === "diagonstic-testing" && (
        <ServicesContent diagnosticTesting={true} />
      )}
      {params.serviceId === "optical-services" && (
        <ServicesContent opticalServices={true} />
      )}
      {params.serviceId === "contact-lenses" && (
        <ServicesContent contactLenses={true} />
      )}
      {params.serviceId === "the-outdoor-clinic" && (
        <ServicesContent theOutdoorClinic={true} />
      )}
    </>
  );
};

export default ServicesContentPage;
