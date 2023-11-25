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
  mutation AddItem($country: String!) {
    createCountry(name: $country) {
      name
      createdAt
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation UpdateItem($updateCountryId: ID!, $country: CountryUpdateInput!) {
    updateCountry(country: $country, id: $updateCountryId) {
      id
      name
    }
  }
`;

export const DELETE_COUNTRY = gql`
  mutation DeleteItem($id: ID!) {
    deleteCountry(id: $id) {
      name
    }
  }
`;
