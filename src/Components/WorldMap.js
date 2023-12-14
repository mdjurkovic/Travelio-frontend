import WorldMap from "react-world-map";
import styled from "styled-components";

const Fieldset = styled.fieldset`
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const WorldMapComponent = ({ selected, onSelect }) => {
  return (
    <Fieldset>
      <WorldMap selected={selected} onSelect={onSelect} />
    </Fieldset>
  );
};

export default WorldMapComponent;
