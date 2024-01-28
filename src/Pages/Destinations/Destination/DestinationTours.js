import { useQuery } from "@apollo/client";
import { Loader, PopConfirm, Tooltip } from "../../../Components";
import { DESTINATIONS_PATH, useMutation } from "../../../Common";
import { useState } from "react";
import { NewTourModal, TourData } from "../../Tours/Tour";
import { Navigate, useLocation } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { DestinationName } from "../styledComponents";
import { CREATE_TOUR, DELETE_TOUR, GET_TOURS } from "../../Tours/queries";
import { DELETE_DESTINATION, GET_DESTINATIONS } from "../queries";

const DestinationTours = () => {
  const location = useLocation();
  const destinationId = location.state.id;
  const destinationImage = location.state.image;
  const destination = location.state;
  const [open, setOpen] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const { loading, error, data } = useQuery(GET_TOURS);
  const { mutation: createTour, contextHolder: createTourContext } =
    useMutation(
      CREATE_TOUR,
      GET_TOURS,
      "Error creating tour",
      "Tour successfully created",
      {}
    );
  const { mutation: deleteTour, contextHolder: deleteTourContext } =
    useMutation(
      DELETE_TOUR,
      GET_TOURS,
      "Error deleting tour",
      "Tour successfully deleted",
      {}
    );
  const {
    mutation: deleteDestination,
    contextHolder: deleteDestinationContext,
  } = useMutation(
    DELETE_DESTINATION,
    GET_DESTINATIONS,
    "Error deleting destination",
    "Destination successfully deleted",
    {}
  );

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  if (shouldRedirect) {
    return <Navigate to={DESTINATIONS_PATH} replace />;
  }

  const handleRedirect = () => {
    setShouldRedirect(true);
  };

  const Modal = () => {
    return (
      <>
        <button onClick={() => setOpen(true)}>New</button>
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

  const filteredData = data.tours.filter(
    (item) => item.destination.id === destinationId
  );

  const handleDeleteDestination = async () => {
    await deleteDestination({ id: destination.id });
    await handleRedirect();
  };

  return (
    <>
      <DestinationName>
        {destination.name}
        <PopConfirm
          handleDelete={handleDeleteDestination}
          message="destination"
        >
          <sup>
            <Tooltip title="Delete">
              <DeleteOutlined />
            </Tooltip>
          </sup>
        </PopConfirm>
      </DestinationName>

      {createTourContext}
      {deleteTourContext}
      {deleteDestinationContext}
      <TourData
        tours={filteredData}
        destinationImage={destinationImage}
        destinationId={destinationId}
        destination={destination}
        deleteTour={deleteTour}
      />
      <Modal />
    </>
  );
};

export default DestinationTours;
