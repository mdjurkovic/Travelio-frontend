import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "../Common";
import { COUNTRIES, DESTINATIONS, GUIDERS, TOURS } from "../Routes/Consts";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-bottom: 40px;

  nav {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      margin: 0;

      li {
        margin-left: 48px;
        }
      }
    }
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <Link
              to={DESTINATIONS}
              selected={location.pathname === DESTINATIONS}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to={GUIDERS} selected={location.pathname === GUIDERS}>
              Guiders
            </Link>
          </li>
          <li>
            <Link to={TOURS} selected={location.pathname.startsWith(TOURS)}>
              Tours
            </Link>
          </li>
          <li>
            <Link to={COUNTRIES} selected={location.pathname === COUNTRIES}>
              Countries
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
