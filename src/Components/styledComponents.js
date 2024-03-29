import styled from "styled-components";
import {FlexBetween} from "../Styles/styledComponents";

export const Fieldset = styled.fieldset`
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const HeaderContainer = styled.header`
  ${FlexBetween};
  padding: 30px;
  margin-bottom: 60px;

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

export const FooterContainer = styled.div`
  margin-top: 40px;
  min-height: 1px;
  width: 100%;
`;
