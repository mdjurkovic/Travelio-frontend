import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql`
    query Countries {
        countries {
            id
            name
        }
    }
`;

export const GET_COUNTRY_BY_ID = gql`
    query Departures($countryId: ID!) {
        country(id: $countryId) {
            name
        }
    }
`;
