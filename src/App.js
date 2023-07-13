import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServicesContentPage from "./pages/ServicesContent";
import DoctorsContentPage from "./pages/DoctorsContent";

// Dashboard
import LoginPage from "./pages/Dashboard/Login";
import RegisterPage from "./pages/Dashboard/Register";
import DashboardRootLayout from "./pages/Dashboard/DashboardRoot";
import DashboardHomePage from "./pages/Dashboard/DashboardHome";
import DashboardPatientsPage from "./pages/Dashboard/DashboardPatients";
import DashboardServicePage from "./pages/Dashboard/DashboardServices";
import DashboardDoctor from "./pages/Dashboard/DashboardDoctor";
import DashBoardPartner from "./pages/Dashboard/DahboardPartner";
 import DashboardUpdate from "./pages/Dashboard/DashboardUpdate";
import DashboardTestimoni from "./pages/Dashboard/DashboardTestimonias";
import DashboardBoardAppointments from "./components/Dashboard/DashboardBookAppointment/DashboardAppointment";
import DashboardNews from "./pages/Dashboard/DashboardNews";
  
 // Fonts
import "./fonts/Providence.ttf";
  import ProductDetails from "./components/Home/ProductDetails";
import Services from "./components/Home/Services";
import DashboardUser from "./components/Dashboard/DashboardUsers/DashboardUser";
import DashboardserviceUpdate from "./components/Dashboard/DashboardServices/DashboardServiceUpdates";
import DashboardTestUpdate from "./components/Dashboard/DashboardBookAppointment/DashboardTestUpdate";
import ProductList from "./components/Home/News & updated/ProductList";
import DashboardsPatpdate from "./components/Dashboard/DashboardPatients/patientPatch";
import DashboardcommenPatch from "./components/Dashboard/DashboardUpdated/TodoItem";
import DashboardTestPatch from "./components/Dashboard/DashboardTestimonials/DashboardTestPatch";
import DashboardNewtpdate from "./components/Dashboard/DashboardNews/DashboardNewsup";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "news-updates",
        element: <ProductList/>
      },
      {
         path:"shop/:id",
        element: <ProductDetails/> ,
      },
      {
        path: "services/:serviceId",
        element: <ServicesContentPage />,
      },
      {
        path: "doctors/:doctorId",
        element: <DoctorsContentPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "admin",
    element: <DashboardRootLayout />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
      {
        path: "patients",
        element: <DashboardPatientsPage />,
      },
      {
        path: "/admin/patients/:id",
        element: <DashboardsPatpdate />,
      },
      {
        path: "Services",
        element: <DashboardServicePage />,
      },
      {
        path: "/admin/Services/:id",
        element: <DashboardserviceUpdate />,
      },
      {
        path: "Doctors",
        element: <DashboardDoctor />,
      },
      {
        path: "/admin/Doctors/:id",
        element: <DashboardDoctor />,
      },
      {
        path: "Partners",
        element: <DashBoardPartner />,
      },
      {
        path: "/admin/Testimonials/:id",
        element: <DashboardTestPatch />,
      },
      {
        path: "Testimonials",
        element: <DashboardTestimoni />,
      },
       
      {
        path: "Comments",
        element: <DashboardUpdate />,
     },
      {
        path: "/admin/Comments/:id",
        element: <DashboardcommenPatch />,
     },
      {
        path: "book-appointment",
        element: <DashboardBoardAppointments />,
     },  
      {
        path: "/admin/book-appointment/:id",
        element: <DashboardTestUpdate />,
     },  
      {
        path: "news-update",
        element:<DashboardNews/>
     },  
      {
        path: "/admin/news-update/:id",
        element:<DashboardNewtpdate/>
     },  
      {
        path: "users",
        element:<DashboardUser/>
      },  
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>;
};
  
export default App;
