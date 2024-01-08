import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
      active
    }
  }
`;

export const CREATE_COUNTRY = gql`
  mutation Country($country: String!) {
    createCountry(name: $country) {
      name
      active
      createdAt
    }
  }
`;

export const UPDATE_COUNTRY = gql`
  mutation UpdateCountry($id: ID!, $active: Boolean!) {
    updateCountry(id: $id, active: $active) {
      id
      active
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
