import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../../Components";
import {
  COUNTRIES_PATH,
  DESTINATIONS_PATH,
  GUIDERS_PATH,
  TOURS_PATH,
} from "../../Common";
import { HeaderContainer } from "../styledComponents";

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <Link
              to={DESTINATIONS_PATH}
              selected={location.pathname === DESTINATIONS_PATH}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={TOURS_PATH}
              selected={location.pathname.includes(TOURS_PATH)}
            >
              Tours
            </Link>
          </li>
          <li>
            <Link
              to={GUIDERS_PATH}
              selected={location.pathname === GUIDERS_PATH}
            >
              Guiders
            </Link>
          </li>
          <li>
            <Link
              to={COUNTRIES_PATH}
              selected={location.pathname === COUNTRIES_PATH}
            >
              Countries
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
