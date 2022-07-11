import {useQuery} from '@apollo/client';
import {GET_COUNTRIES} from "./queries";

const Countries = () => {
    const {loading, error, data} = useQuery(GET_COUNTRIES, {
        variables: {}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.countries.map(({id, name}) => (
        <div key={id}>
            <h3>{name}</h3>
        </div>
    ));
}

export default Countries
