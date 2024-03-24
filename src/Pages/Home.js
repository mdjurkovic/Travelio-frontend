import {useState} from "react";
import Destinations from "./Destinations";
import {WorldMap} from "../Components";
import {HomeBox} from "./Destinations/styledComponents";

const Home = () => {
    const [selected, onSelect] = useState(null);

    return (
        <HomeBox>
            <WorldMap onSelect={onSelect} selected={selected}/>
            <span>
        <s>1 countries upload</s> <br/>
        <s>
          2 fix button/input styling <br/>
        </s>
        <s>3 cascade delete guiders / lock finished tours</s>
        <br/>
        <s>4 dont delete destinations, deactivate them (hide or disable)</s>
        <br/>
        <s>
          <>5 On click open up a modal to edit the tour</>
        </s>{" "}
                <br/>
        <s>
          6 Add passengers to the tour <br/>
        </s>
        <s>7 Sync tour availability and passenger number</s>
        <br/>
        <s>8 countries world map</s>
        <br/>
        <s>9 Handle finished tours - disable for editing</s> <br/>
        <s>10 EditTour styles - guiderId flashing, form layout</s> <br/>
        <s>11 Tour filters</s> <br/>
        <s>12 Handle tour delete</s> <br/>
        <b>13 Handle tour disable</b>
      </span>
            <Destinations continent={selected}/>
        </HomeBox>
    );
};

export default Home;
