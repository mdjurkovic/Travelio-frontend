import { gql } from "@apollo/client";

export const GET_GUIDERS = gql`
  query Guiders {
    guiders {
      id
      name
      tours {
        name
      }
      preferences {
        label
      }
    }
  }
`;

export const DELETE_GUIDER = gql`
  mutation DeleteItem($id: ID!) {
    deleteGuider(id: $id) {
      name
    }
  }
`;

export const CREATE_GUIDER = gql`
  mutation AddItem($guider: String!) {
    createGuider(name: $guider) {
      name
    }
  }
`;
