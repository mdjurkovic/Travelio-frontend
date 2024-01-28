import {
  dateFormat,
  dueDate,
  nightsDifference,
  TOURS_PATH,
} from "../../../Common";
import { BlurryLoadingImage, Link } from "../../../Components";
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

const TourData = ({ tours, destinationImage, deleteTour }) => {
  if (!tours.length)
    return (
      <NotFound>No tours for this destination or selected filter(s)</NotFound>
    );

  const handleDelete = async (id) => {
    await deleteTour({ id });
  };

  return (
    <>
      {tours.map(
        ({
          id,
          name,
          departureDate,
          returnDate,
          nights,
          price,
          image,
          guider,
        }) => (
          <TourArticle key={id}>
            <Link to={TOURS_PATH} parameter={id}>
              <TourBox key={id}>
                <DateSection>
                  <h5>Departure</h5>
                  <span>{dateFormat(departureDate)}</span>
                </DateSection>
                <DateSection>
                  <h5>Return</h5>
                  <span>{dateFormat(returnDate)}</span>
                </DateSection>
                <DaysSection>
                  <h5>Nights</h5>
                  <div>
                    {nights ||
                      nightsDifference(returnDate, departureDate) ||
                      "Unknown"}
                  </div>
                </DaysSection>
                <ImageSection>
                  <BlurryLoadingImage image={image || destinationImage} />
                </ImageSection>
                <NameSection>
                  <h4>{name}</h4>
                  <Availability
                    isDueDate={dueDate(departureDate)}
                    isAlmostFull={true}
                    isFull={false}
                  />
                </NameSection>
                <div>
                  <h5>Guider</h5>
                  {guider.active ? guider.name : "TBD"}
                </div>
                <PriceSection>
                  <h5>Price</h5>
                  <span>
                    <PriceTag>{price}</PriceTag>
                    <span>e</span>
                  </span>
                </PriceSection>
                {/*<PopConfirm*/}
                {/*  handleDelete={(id) => handleDelete(id)}*/}
                {/*  message="tour"*/}
                {/*>*/}
                {/*  <button>delete</button>*/}
                {/*</PopConfirm>*/}
              </TourBox>
            </Link>
          </TourArticle>
        )
      )}
    </>
  );
};

export default TourData;
