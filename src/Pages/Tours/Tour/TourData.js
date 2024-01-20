import { dateFormat, dueDate, nightsDifference } from "../../../Common";
import { BlurryLoadingImage, PopConfirm } from "../../../Components";
import {
  AvailabilityContainer,
  AvailabilityText,
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
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

const TourData = ({ tours, destinationImage, deleteTour }) => {
  if (!tours.length)
    return (
      <NotFound>No tours for this destination or selected filter(s)</NotFound>
    );

  const AvailabilitySection = ({ departureDate }) => {
    const isDueDate = dueDate(departureDate);

    return isDueDate ? (
      <AvailabilityContainer active={false}>
        <CloseCircleFilled />
        <AvailabilityText>Not available</AvailabilityText>
      </AvailabilityContainer>
    ) : (
      <AvailabilityContainer active={true}>
        <CheckCircleFilled />
        <AvailabilityText>Available</AvailabilityText>
      </AvailabilityContainer>
    );
  };

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
                <AvailabilitySection departureDate={departureDate} />
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
              <PopConfirm
                handleDelete={(id) => handleDelete(id)}
                message="tour"
              >
                <button>delete</button>
              </PopConfirm>
            </TourBox>
          </TourArticle>
        )
      )}
      {/*<TourArticle key="newTour">*/}
      {/*  <TourBox>*/}
      {/*    <h4>NEW</h4>*/}
      {/*  </TourBox>*/}
      {/*</TourArticle>*/}
    </>
  );
};

export default TourData;
