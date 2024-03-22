import { Navigate, useRoutes } from "react-router-dom";
import { Countries, DestinationTours, Guiders, Home, Tours } from "../Pages";
import {
  COUNTRIES_PATH,
  DESTINATIONS_PATH,
  GUIDERS_PATH,
  TOURS_PATH,
} from "../Common";
import { EditTour } from "../Pages/Tours/Tour";
// layouts
//import DashboardLayout from './layouts/dashboard';
//import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: DESTINATIONS_PATH,
      element: <Home />,
    },
    {
      path: `${DESTINATIONS_PATH}/:destinationName${TOURS_PATH}`,
      element: <DestinationTours />,
    },
    {
      path: TOURS_PATH,
      element: <Tours />,
    },
    {
      path: `${TOURS_PATH}/:tourId`,
      element: <EditTour />,
    },
    {
      path: GUIDERS_PATH,
      element: <Guiders />,
    },
    {
      path: COUNTRIES_PATH,
      element: <Countries />,
    },
    {
      path: "*",
      element: <Navigate to={DESTINATIONS_PATH} replace />,
    },
  ]);
}
