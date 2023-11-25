import { useQuery } from "@apollo/client";
import { GET_TOURS } from "./queries";
import Loader from "../Loader";
import TourData from "./TourData";
import { useState } from "react";
import { Button } from "@mui/joy";

const Tours = () => {
  const { loading, error, data } = useQuery(GET_TOURS, {
    variables: {},
  });
  const [filter, setFilter] = useState("");
  const inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setFilter(lowerCase);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const filteredData = data.tours.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input id="outlined-basic" onChange={inputHandler} />
      <Button>Add</Button>
      <TourData tours={filteredData} />
    </>
  );
};

export default Tours;
