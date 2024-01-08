import { Navigate, useRoutes } from "react-router-dom";
import { Countries, DestinationTours, Guiders, Home, Tours } from "../Pages";
import { COUNTRIES, DESTINATIONS, GUIDERS, TOURS } from "./Consts";
// layouts
//import DashboardLayout from './layouts/dashboard';
//import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: DESTINATIONS,
      element: <Home />,
    },
    {
      path: `${TOURS}/:tourName`,
      element: <DestinationTours />,
    },
    {
      path: TOURS,
      element: <Tours />,
    },
    {
      path: GUIDERS,
      element: <Guiders />,
    },
    {
      path: COUNTRIES,
      element: <Countries />,
    },
    {
      path: "*",
      element: <Navigate to={DESTINATIONS} replace />,
    },
  ]);
}
