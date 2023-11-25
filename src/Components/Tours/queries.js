import { gql } from "@apollo/client";

export const GET_TOURS = gql`
  query Tours {
    tours {
      name
      departureDate
      id
    }
  }
`;
