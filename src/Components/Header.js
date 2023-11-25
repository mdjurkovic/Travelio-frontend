import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = styled.header`
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

        a {
          font-size: 24px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: bold;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: var(--color-secondary);
          }
        }
      }
    }
  }
`;

const StyledLink = styled(Link).attrs(({ isSelected }) => ({
  style: {
    color: isSelected ? "var(--color-secondary)" : "var(--color-primary)",
  },
}))``;

const HeaderContainer = () => {
  const location = useLocation();
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <StyledLink to="/" isSelected={location.pathname === "/"}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="/guiders"
              isSelected={location.pathname === "/guiders"}
            >
              Guiders
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/tours" isSelected={location.pathname === "/tours"}>
              Tours
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="/countries"
              isSelected={location.pathname === "/countries"}
            >
              Countries
            </StyledLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderContainer;
