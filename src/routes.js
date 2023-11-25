import { Navigate, useRoutes } from "react-router-dom";
import CountriesTable from "./Components/Countries/AITable";
import Tours from "./Components/Tours";
import Home from "./Components/Home";
import GuidersTable from "./Components/Guiders/AITable";
// layouts
//import DashboardLayout from './layouts/dashboard';
//import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [{ path: "*", element: <Navigate to="/404" /> }],
    },
    {
      path: "/guiders",
      element: <GuidersTable />,
    },
    {
      path: "/countries",
      element: <CountriesTable />,
    },
    {
      path: "/tours",
      element: <Tours />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
}
