import { memo, useState } from "react";
import { CREATE_DESTINATION, GET_DESTINATIONS } from "./queries";
import { useMutation } from "../../Common";
import { Loader } from "../../Components";
import {
  Destination,
  DestinationInfo,
  DestinationLink,
  DestinationsContainer,
} from "./styledComponents";
import { useQuery } from "@apollo/client";
import { DestinationData, NewDestinationModal } from "./Destination";

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
        <DestinationData destination={destination} key={destination.id} />
      ))}
      <Modal />
    </DestinationsContainer>
  );
});

export default Destinations;
