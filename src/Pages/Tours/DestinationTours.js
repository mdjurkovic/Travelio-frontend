import { useQuery } from "@apollo/client";
import { CREATE_TOUR, DELETE_TOUR, GET_TOURS } from "./queries";
import { Loader, PopConfirm } from "../../Components";
import { DESTINATIONS_PATH, useMutation } from "../../Common";
import React, { useEffect, useState } from "react";
import { TourData } from "./Tour";
import { Navigate, useLocation } from "react-router-dom";
import NewTourModal from "./Tour/NewTourModal";
import { DeleteOutlined } from "@ant-design/icons";
import { TourName } from "./StyledComponents";
import { Tooltip } from "antd";
import { DELETE_DESTINATION, GET_DESTINATIONS } from "../Destinations/queries";

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

  useEffect(() => {
    // Fetch initial data
  }, []);

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
      <TourName>
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
      </TourName>

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
