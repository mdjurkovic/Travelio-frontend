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
      <span>
        <s>1 countries upload</s> <br />
        <s>
          2 fix button/input styling <br />
        </s>
        <s>3 cascade delete guiders / lock finished tours</s>
        <br />
        4 dont delete destination, deactivate them
        <br />
        5 passengers <br />
        6 edit tour <br />
        <s>7 countries world map</s>
        <br />
      </span>
      <Destinations continent={selected} />
    </HomeBox>
  );
};

export default Home;
