import { useQuery } from "@apollo/client";
import { DELETE_TOUR, GET_TOURS } from "./queries";
import { Loader } from "../../Components";
import { Search, useMutation } from "../../Common";
import React, { useEffect, useState } from "react";
import { TourData } from "./Tour";

const Tours = () => {
  const { loading, error, data } = useQuery(GET_TOURS);
  const { mutation: deleteTour, contextHolder: deleteTourContext } =
    useMutation(
      DELETE_TOUR,
      GET_TOURS,
      "Error deleting tour",
      "Tour successfully deleted",
      {}
    );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Fetch initial data
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const filteredData = data.tours.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {deleteTourContext}
      <Search setFilter={setFilter} />
      <TourData tours={filteredData} deleteTour={deleteTour} />
      <div></div>
    </>
  );
};

export default Tours;
