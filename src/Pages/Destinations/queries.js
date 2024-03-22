import { gql } from "@apollo/client";

export const GET_DESTINATION = gql`
  query Destination($id: ID!) {
    destination(id: $id) {
      name
      id
      active
      image
    }
  }
`;

export const GET_DESTINATIONS = gql`
  query Destinations {
    destinations {
      name
      id
      active
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

export const UPDATE_DESTINATION = gql`
  mutation UpdateDestination($id: ID!, $active: Boolean) {
    updateDestination(id: $id, active: $active) {
      name
    }
  }
`;
