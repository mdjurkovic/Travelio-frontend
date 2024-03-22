import {useQuery} from "@apollo/client";
import {DELETE_TOUR, GET_TOURS} from "./queries";
import {Loader, Search} from "../../Components";
import {useMutation} from "../../Common";
import React, {useState} from "react";
import {TourData} from "./Tour";

const Tours = () => {
    const {loading, error, data} = useQuery(GET_TOURS);
    const {mutation: deleteTour, contextHolder: deleteTourContext} =
        useMutation(
            DELETE_TOUR,
            GET_TOURS,
            "Error deleting tour",
            "Tour successfully deleted"
        );

    const [filter, setFilter] = useState("");

    if (loading) return <Loader/>;
    if (error) return <p>Error :(</p>;

    const filteredData = data.tours.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            {deleteTourContext}
            <Search setFilter={setFilter}/>
            {/*<Test/>*/}
            <TourData tours={filteredData} deleteTour={deleteTour}/>
        </>
    );
};

export default Tours;
