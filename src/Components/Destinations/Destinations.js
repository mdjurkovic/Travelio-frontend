import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_DESTINATIONS } from "./queries";
import Loader from "../Loader";
import styled from "styled-components";
import Japan from "../../Images/Japan.jpeg";

const DestinationsBox = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Destination = styled.a`
  margin-right: 10px;
  margin-left 10px;
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 0.25rem;
  margin-bottom: 20px;
  a {
    height: 100%;
  }
`;

const DestinationImage = styled.img`
  height: calc(100% / 4 * 3);
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const DestinationInfo = styled.div`
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Destinations = ({ continent }) => {
  const { loading, error, data } = useQuery(GET_DESTINATIONS, {
    variables: {},
  });

  const [destinationsContinent, setDestinationsContinent] = useState(
    data ? data.destinations : null
  );

  useEffect(() => {
    let destinations = null;
    if (data) destinations = data.destinations;

    if (!continent) setDestinationsContinent(destinations);
    else
      setDestinationsContinent(
        destinations?.filter(
          (destination) => destination.country.continent === continent
        )
      );
  }, [continent, data]);

  if (loading)
    return (
      <DestinationsBox>
        <Loader />
      </DestinationsBox>
    );
  if (error) return <p>Error :(</p>;

  return (
    <DestinationsBox>
      {destinationsContinent?.map((destination) => (
        <Destination href="/" key={destination.name}>
          <DestinationImage src={Japan} />
          <DestinationInfo>
            <h4>{destination.name}</h4>
          </DestinationInfo>
        </Destination>
      ))}
    </DestinationsBox>
  );
};

export default Destinations;
