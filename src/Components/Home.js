import { useState } from "react";
import WorldMap from "react-world-map";
import Destinations from "./Destinations/Destinations";
import styled from "styled-components";

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fieldset = styled.fieldset`
  border-radius: 50%;
  text-align: center;
`;

const LegendTitle = styled.legend`
  b {
    color: var(--color-secondary);
    font-size: 20px;
  }
`;

const Home = () => {
  const [selected, onSelect] = useState(null);

  return (
    <HomeBox>
      <Fieldset>
        <LegendTitle>
          <b>Select the continent</b>
        </LegendTitle>
        <WorldMap selected={selected} onSelect={onSelect} />
      </Fieldset>
      <Destinations continent={selected} />
    </HomeBox>
  );
};

export default Home;
