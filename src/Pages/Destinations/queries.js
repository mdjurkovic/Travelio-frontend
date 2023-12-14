import { gql } from "@apollo/client";

export const GET_DESTINATIONS = gql`
  query Destinations {
    destinations {
      name
      id
      country {
        name
        continent
      }
    }
  }
`;
