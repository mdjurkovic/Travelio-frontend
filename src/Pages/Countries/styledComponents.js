import styled from "styled-components";
import {FlexEvenly} from "../../Common";

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 12px;

  th,
  td {
    padding: 12px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }
`;

export const CountryName = styled.h3`
  margin: 0;
`;

export const CountriesContainer = styled.div`
  ${FlexEvenly};
  width: 70%;
`;
