import { gql } from "@apollo/client";

export const GET_TOURS = gql`
  query Tours($destination: ID) {
    tours(destination: $destination) {
      id
      name
      price
      departureDate
      returnDate
      minPassengers
      maxPassengers
      image
      guider {
        id
        name
        active
      }
      destination {
        id
        name
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

export const GET_GUIDERS = gql`
  query Guiders {
    guiders {
      name
      id
    }
  }
`;

export const CREATE_TOUR = gql`
  mutation CreateTour($tour: TourCreateInput!) {
    createTour(tour: $tour) {
      name
    }
  }
`;

export const DELETE_TOUR = gql`
  mutation DeleteTour($id: ID!) {
    deleteTour(id: $id) {
      name
    }
  }
`;
