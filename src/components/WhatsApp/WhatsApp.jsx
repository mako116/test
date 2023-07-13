 import { WhatsAppWidget } from "react-whatsapp-widget";
 import "react-whatsapp-widget/dist/index.css";
 import { ReactComponent as CompanyIcon } from "../../assets/logo.svg";

 const WhatsApp = () => {
   const whatsappData = [
     {
       phoneNumber: "+2348179773100",
       companyName: "Imageplus",
       message: "Welcome to Imageplus Eye Clinic"
     },
    //  {
    //    phoneNumber: "+2349071259643",
    //    companyName: "Imageplus  ",
    //    message: "Welcome to Imageplus Eye Clinic"
    //  }
   ];

   return (
     <div className="relative">
       {whatsappData.map((data, index) => (
         <div className="whatsapp-widget" key={index}>
            <WhatsAppWidget
             CompanyIcon={CompanyIcon}
             phoneNumber={data.phoneNumber}
             companyName={data.companyName}
             message={data.message}
           />
       
          </div>
       ))}
      
     </div>
   );
 };

 export default WhatsApp;