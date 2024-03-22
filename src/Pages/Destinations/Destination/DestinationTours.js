import { useQuery } from "@apollo/client";
import { Loader, Switch } from "../../../Components";
import { useMutation } from "../../../Common";
import { useState } from "react";
import { NewTourModal, TourData } from "../../Tours/Tour";
import { useLocation } from "react-router-dom";
import {
  DestinationHeader,
  DestinationSwitch,
  NewDestinationButton,
} from "../styledComponents";
import { CREATE_TOUR, GET_TOURS } from "../../Tours/queries";
import { GET_DESTINATIONS, UPDATE_DESTINATION } from "../queries";

const DestinationTours = () => {
  const location = useLocation();
  const destination = location.state;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(destination.active);

  const { loading, error, data } = useQuery(GET_TOURS, {
    variables: { destination: destination.id },
  });
  const { mutation: createTour, contextHolder: createTourContext } =
    useMutation(
      CREATE_TOUR,
      GET_TOURS,
      "Error creating tour",
      "Tour successfully created",
      { destination: destination.id }
    );
  const {
    mutation: updateDestination,
    contextHolder: updateDestinationContext,
  } = useMutation(
    UPDATE_DESTINATION,
    GET_DESTINATIONS,
    "Error updating destination",
    "Destination successfully updated"
  );

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const destinationId = location.state.id;
  const destinationImage = location.state.image;

  const handleDestinationUpdate = async (value) => {
    await updateDestination({
      id: destination.id,
      active: value,
    });
    setActive(value);
  };

  const Modal = () => {
    return (
      <>
        <NewDestinationButton onClick={() => setOpen(true)}>
          New
        </NewDestinationButton>
        {open && (
          <NewTourModal
            open={open}
            setOpen={setOpen}
            destinationId={destinationId}
            createTour={createTour}
          />
        )}
      </>
    );
  };

  return (
    <>
      <DestinationHeader>
        <h3>{destination.name}</h3>
        <DestinationSwitch>
          <Switch
            checked={active}
            onChange={(value) => handleDestinationUpdate(value)}
          />
        </DestinationSwitch>
      </DestinationHeader>

      {createTourContext}
      {updateDestinationContext}
      <TourData
        tours={data.tours}
        destinationImage={destinationImage}
        destinationId={destinationId}
        destination={destination}
      />
      <Modal />
    </>
  );
};

export default DestinationTours;
