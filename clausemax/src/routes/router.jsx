import React from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { AboutUs, Contact,Service,Home,ServiceInfo} from "../pages"



export const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      { path: "/", element: <Home /> }, 
      { path: "/about", element: <AboutUs /> },
      { path: "/service", element: <Service /> },
      { path: "/contact", element: <Contact /> },
      { path: "/info", element: <ServiceInfo /> },
    ],
  },
]);
