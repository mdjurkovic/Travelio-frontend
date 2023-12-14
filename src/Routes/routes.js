import { Navigate, useRoutes } from "react-router-dom";
import { Countries, Guiders, Home, Tours } from "../Pages";
import { countries, destinations, guiders, tours } from "./Consts";
// layouts
//import DashboardLayout from './layouts/dashboard';
//import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: destinations,
      element: <Home />,
    },
    {
      path: `${destinations}:destinationName`,
      element: <Tours />,
    },
    {
      path: tours,
      element: <Tours />,
    },
    {
      path: guiders,
      element: <Guiders />,
    },
    {
      path: countries,
      element: <Countries />,
    },
    {
      path: "*",
      element: <Navigate to={guiders} replace />,
    },
  ]);
}
