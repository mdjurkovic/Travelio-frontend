import { Navigate, useRoutes } from "react-router-dom";
import { Countries, DestinationTours, Guiders, Home, Tours } from "../Pages";
import {
  COUNTRIES_PATH,
  DESTINATIONS_PATH,
  GUIDERS_PATH,
  TOURS_PATH,
} from "../Common";
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
      path: `${TOURS_PATH}/:tourId`,
      element: <div>asd</div>,
    },
    {
      path: TOURS_PATH,
      element: <Tours />,
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
