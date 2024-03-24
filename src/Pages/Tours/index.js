import {useQuery} from "@apollo/client";
import {DELETE_TOUR, GET_TOURS} from "./queries";
import {Loader, Search} from "../../Components";
import {isPastCurrentDate, useMutation} from "../../Common";
import React, {useState} from "react";
import {TourData} from "./Tour";
import {Checkbox} from "antd";
import {DestinationFilter, DestinationHeader} from "../Destinations/styledComponents";

const Tours = () => {
    const {loading, error, data} = useQuery(GET_TOURS);
    const {mutation: deleteTour, contextHolder: deleteTourContext} =
        useMutation(
            DELETE_TOUR,
            GET_TOURS,
            "Error deleting tour",
            "Tour successfully deleted"
        );
    const [searchFilter, setSearchFilter] = useState("");
    const [showPastTours, setShowPastTours] = useState(true);

    if (loading) return <Loader/>;
    if (error) return <p>Error :(</p>;

    const tourData = [...data.tours];

    let filteredData = tourData.filter((item) =>
        item.name.toLowerCase().startsWith(searchFilter.toLowerCase())
    );
    if (!showPastTours) filteredData = filteredData.filter((item) =>
        !isPastCurrentDate(item.departureDate))

    return (
        <>
            {deleteTourContext}
            <DestinationHeader>
                <Search setFilter={setSearchFilter}/>
                <DestinationFilter>
                    <Checkbox checked={showPastTours} onChange={() => setShowPastTours(!showPastTours)}>
                        Show past tours
                    </Checkbox>
                </DestinationFilter>
            </DestinationHeader>
            <TourData tours={filteredData} deleteTour={deleteTour}/>
        </>
    );
};

export default Tours;
