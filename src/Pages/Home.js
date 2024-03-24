import {useState} from "react";
import Destinations from "./Destinations";
import {WorldMap} from "../Components";
import {HomeBox} from "./Destinations/styledComponents";

const Home = () => {
    const [selected, onSelect] = useState(null);

    return (
        <HomeBox>
            <WorldMap onSelect={onSelect} selected={selected}/>
            <Destinations continent={selected}/>
        </HomeBox>
    );
};

export default Home;
