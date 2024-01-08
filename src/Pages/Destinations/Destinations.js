import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_DESTINATION, GET_DESTINATIONS } from "./queries";
import { BlurryLoadingImage, useMutation } from "../../Common";
import { Loader } from "../../Components";
import { TOURS } from "../../Routes/Consts";
import {
  Destination,
  DestinationInfo,
  DestinationLink,
  DestinationsContainer,
  ImageContainer,
} from "./StyledComponents";
import NewDestinationModal from "./NewDestinationModal";

const Destinations = ({ continent }) => {
  const { loading, error, data } = useQuery(GET_DESTINATIONS, {
    variables: {},
  });
  const {
    mutation: createDestination,
    contextHolder: createDestinationContext,
  } = useMutation(
    CREATE_DESTINATION,
    GET_DESTINATIONS,
    "Error creating destination",
    "Destination successfully created",
    {}
  );

  const [destinationsContinent, setDestinationsContinent] = useState(
    data ? data.destinations : []
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let destinations = [];
    if (data) destinations = data.destinations;

    if (!continent) setDestinationsContinent(destinations);
    else
      setDestinationsContinent(
        destinations.filter(
          (destination) => destination.country.continent === continent
        )
      );
  }, [continent, data]);

  useEffect(() => {
    // Fetch initial data
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <DestinationsContainer>
      {createDestinationContext}
      {destinationsContinent?.map((destination) => (
        <Destination key={destination.id}>
          <DestinationLink
            to={TOURS}
            parameter={destination.name}
            state={destination}
          >
            <ImageContainer>
              <BlurryLoadingImage image={destination.image} />
            </ImageContainer>
            <DestinationInfo>
              <h4>{destination.name}</h4>
            </DestinationInfo>
          </DestinationLink>
        </Destination>
      ))}
      {open && (
        <NewDestinationModal
          open={open}
          setOpen={setOpen}
          createDestination={createDestination}
        />
      )}
      <Destination onClick={() => setOpen(true)} key="new">
        <DestinationLink to="">
          <DestinationInfo>
            <h4>NEW</h4>
          </DestinationInfo>
        </DestinationLink>
      </Destination>
    </DestinationsContainer>
  );
};

export default Destinations;
