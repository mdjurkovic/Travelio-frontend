import { memo, useState } from "react";
import { CREATE_DESTINATION, GET_DESTINATIONS } from "./queries";
import { TOURS_PATH, useMutation } from "../../Common";
import { BlurryLoadingImage, Loader } from "../../Components";
import {
  Destination,
  DestinationInfo,
  DestinationLink,
  DestinationsContainer,
  ImageContainer,
} from "./styledComponents";
import { useQuery } from "@apollo/client";
import NewDestinationModal from "./NewDestinationModal";

const Destinations = memo(({ continent }) => {
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

  const [open, setOpen] = useState(false);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const destinations = !continent
    ? data.destinations
    : data.destinations.filter(
        (destination) => destination.country.continent === continent
      );

  const Modal = () => {
    return (
      <>
        <Destination onClick={() => setOpen(true)} key="new">
          <DestinationLink to="">
            <DestinationInfo>
              <h4>NEW</h4>
            </DestinationInfo>
          </DestinationLink>
        </Destination>
        {open && (
          <NewDestinationModal
            open={open}
            setOpen={setOpen}
            createDestination={createDestination}
          />
        )}
      </>
    );
  };

  return (
    <DestinationsContainer>
      {createDestinationContext}
      {destinations.map((destination) => (
        <Destination key={destination.id}>
          <DestinationLink
            to={TOURS_PATH}
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
      <Modal />
    </DestinationsContainer>
  );
});

export default Destinations;
