import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
      destinations {
        name
      }
    }
  }
`;

export const CREATE_COUNTRY = gql`
  mutation Country($country: String!) {
    createCountry(name: $country) {
      name
      createdAt
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation UpdateCountry($updateCountryId: ID!, $country: CountryUpdateInput!) {
    updateCountry(country: $country, id: $updateCountryId) {
      id
      name
    }
  }
`;

export const DELETE_COUNTRY = gql`
  mutation DeleteCountry($id: ID!) {
    deleteCountry(id: $id) {
      name
    }
  }
`;
