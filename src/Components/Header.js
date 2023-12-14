import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "../Common";
import { countries, destinations, guiders, tours } from "../Routes/Consts";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
        margin-left: 3rem;
        }
      }
    }
  }
`;

const Header = () => {
  const location = useLocation();
  console.log(location);

  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <Link
              to={destinations}
              selected={location.pathname === destinations}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to={guiders} selected={location.pathname === guiders}>
              Guiders
            </Link>
          </li>
          <li>
            <Link to={tours} selected={location.pathname.startsWith(tours)}>
              Tours
            </Link>
          </li>
          <li>
            <Link to={countries} selected={location.pathname === countries}>
              Countries
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
