import {dateFormat, nightsDifference, TOURS_PATH} from "../../../Common";
import {BlurryLoadingImage, Link} from "../../../Components";
import {
    DateSection,
    DaysSection,
    ImageSection,
    NameSection,
    NotFound,
    PriceSection,
    PriceTag,
    TourArticle,
    TourBox,
} from "../styledComponents";
import React from "react";
import Availability from "./Availability";

const TourData = ({tours}) => {
    if (!tours.length)
        return (
            <NotFound>No tours for this destination or selected filter(s)</NotFound>
        );

    return (
        <>
            {tours.map((tour) => (
                <TourArticle key={tour.id}>
                    <Link to={TOURS_PATH} parameter={tour.id} state={tour}>
                        <TourBox key={tour.id}>
                            <DateSection>
                                <h5>Departure</h5>
                                <span>{dateFormat(tour.departureDate)}</span>
                            </DateSection>
                            <DateSection>
                                <h5>Return</h5>
                                <span>{dateFormat(tour.returnDate)}</span>
                            </DateSection>
                            <DaysSection>
                                <h5>Nights</h5>
                                <div>
                                    {tour.nights ||
                                    nightsDifference(tour.returnDate, tour.departureDate) ||
                                    "Unknown"}
                                </div>
                            </DaysSection>
                            <ImageSection>
                                <BlurryLoadingImage image={tour.image || tour.destination.image}/>
                            </ImageSection>
                            <NameSection>
                                <h4>{tour.name}</h4>
                                <Availability tour={tour}/>
                            </NameSection>
                            <div>
                                <h5>Guider</h5>
                                {tour.guider.active ? tour.guider.name : "TBD"}
                            </div>
                            <PriceSection>
                                <h5>Price</h5>
                                <span>
                  <PriceTag>{tour.price}</PriceTag>
                  <span>e</span>
                </span>
                            </PriceSection>
                        </TourBox>
                    </Link>
                </TourArticle>
            ))}
        </>
    );
};

export default TourData;
