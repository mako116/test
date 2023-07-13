import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../components/Home/Navigation/Navigation";
import Footer from "../components/Home/Footer";
import WhatsApp from "../components/WhatsApp/WhatsApp";
  
const RootLayout = () => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? undefined : (
        <Footer />
      )}
      {location.pathname === "/login" ||
      location.pathname === "/register" ? undefined : (
        <WhatsApp />
       
      )}
     
 
    </>
  );
};

export default RootLayout;
