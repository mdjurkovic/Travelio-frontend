import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: center;
    .ant-typography {
      margin: 0;
      inset-inline-start: unset;
    }
    span {
      span {
        line-height: unset;
      }
    }
  }

  th {
    background-color: #f2f2f2;
  }
`;

export const AddGuiderContainer = styled.div`
  text-align: center;
  margin-top: 48px;
`;

export const EditGuiderCell = styled.td`
  width: 178px;
`;
