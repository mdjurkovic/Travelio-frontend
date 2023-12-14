import { useQuery } from "@apollo/client";
import { GET_TOURS } from "./queries";
import { Loader } from "../../Components";
import { Search } from "../../Common";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { TourData } from "./Tour";
import { useLocation } from "react-router-dom";
import NewTourModal from "./Tour/TourModal";

const Tours = () => {
  const location = useLocation();
  const destinationId = location.state ? location.state.id : null;
  const { loading, error, data } = useQuery(GET_TOURS, {
    variables: { destinationId },
  });

  const [open, setOpen] = useState(false);
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
      <Search setFilter={setFilter} />
      <Button onClick={() => setOpen(true)}>New</Button>
      <NewTourModal
        open={open}
        setOpen={setOpen}
        destinationId={destinationId}
      />
      <TourData tours={filteredData} />
    </>
  );
};

export default Tours;
