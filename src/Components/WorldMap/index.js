import WorldMap from "react-world-map";
import { Fieldset } from "../styledComponents";

const WorldMapComponent = ({ selected, onSelect }) => {
  return (
    <Fieldset>
      <WorldMap selected={selected} onSelect={onSelect} />
    </Fieldset>
  );
};

export default WorldMapComponent;
