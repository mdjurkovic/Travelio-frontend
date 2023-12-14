import { useState } from "react";
import Destinations from "./Destinations/Destinations";
import { WorldMap } from "../Components";
import styled from "styled-components";

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const [selected, onSelect] = useState(null);

  return (
    <HomeBox>
      <WorldMap onSelect={onSelect} selected={selected} />
      <Destinations continent={selected} />
    </HomeBox>
  );
};

export default Home;
