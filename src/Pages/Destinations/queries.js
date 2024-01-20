import { gql } from "@apollo/client";

export const GET_DESTINATIONS = gql`
  query Destinations {
    destinations {
      name
      id
      image
      country {
        name
        continent
      }
    }
  }
`;

export const GET_DESTINATION_TYPES = gql`
  query DestinationTypes {
    destinationTypes {
      label
      id
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Countries($active: Boolean) {
    countries(active: $active) {
      id
      name
      active
    }
  }
`;

export const CREATE_DESTINATION = gql`
  mutation CreateDestination($destination: DestinationCreateInput) {
    createDestination(destination: $destination) {
      name
    }
  }
`;

export const DELETE_DESTINATION = gql`
  mutation DeleteDestination($id: ID!) {
    deleteDestination(id: $id) {
      name
    }
  }
`;
