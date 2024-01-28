import { useState } from "react";
import Destinations from "./Destinations";
import { WorldMap } from "../Components";
import { HomeBox } from "./Destinations/styledComponents";

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
        4 dont delete destinations, deactivate them (hide or disable)
        <br />
        <b>5 On click open up a modal to edit the tour</b> <br />
        6 Add passengers to the tour <br />
        <s>7 Handle tour availability</s>
        <br />
        <s>8 countries world map</s>
        <br />
      </span>
      <Destinations continent={selected} />
    </HomeBox>
  );
};

export default Home;
