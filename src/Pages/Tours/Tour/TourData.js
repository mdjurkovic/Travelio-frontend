import Japan from "../../../Images/Japan.jpeg";
import styled from "styled-components";
import { dateFormat, nightsDifference, useMutation } from "../../../Common";
import { DELETE_TOUR, GET_TOURS } from "../queries";

const TourArticle = styled.article`
  padding: 10px 0;
  width: 1200px;
`;

const TourBox = styled.div`
  &:hover {
    color: var(--color-secondary);
  }
  cursor: pointer;
  border: 1px solid;
  color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: flex;
  box-sizing: border-box;
  padding: 25px;
`;

const DateSection = styled.div`
  text-align: center;
  width: 80px;
`;

const DaysSection = styled.div`
  text-align: center;
  width: 50px;
`;

const ImageSection = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  max-height: 100%;
  position: absolute;
  left: -25%;
`;

const NameSection = styled.div`
  width: 400px;
`;

const Availability = styled.i`
  vertical-align: middle;
  display: inline-block;
  padding-right: 4px;
  color: var(--color-affirmative);
  &:before {
    display: inline-block;
    content: "✔";
    text-align: center;
    border-radius: 50%;
    font: icon;
    line-height: 21.5px;
    height: 18.5px;
    width: 18.5px;
    ${({ active }) =>
      active &&
      `
    background-color: rgb(122, 189, 48, 0.4);
  `}
  }
`;

const AvailabilityText = styled.span`
  padding-left: 8px;
  color: var(--color-affirmative);
`;

const PriceSection = styled.div`
  width: 200px;
  text-align: center;
`;

const PriceTag = styled.div`
  font-size: 32px;
  display: inline;
`;

const NotFound = styled.div`
  margin-top: 40px;
`;

const TourData = ({ tours, destinationId }) => {
  const { mutation: deleteTour } = useMutation(DELETE_TOUR, GET_TOURS, {
    destinationId,
  });

  if (!tours.length)
    return (
      <NotFound>No tours for this destination or selected filter(s)</NotFound>
    );

  const handleDelete = (id) => {
    deleteTour({ variables: { id } });
  };

  return (
    <div>
      {tours.map(
        ({ id, name, departureDate, returnDate, nights, price }, index) => (
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
                <Image src={Japan} />
              </ImageSection>
              <NameSection>
                <h4>{name}</h4>
                <Availability active={true}>
                  <AvailabilityText>Available</AvailabilityText>
                </Availability>
              </NameSection>
              <PriceSection>
                <h5>Price</h5>
                <span>
                  <PriceTag>{price}</PriceTag>
                  <span>e</span>
                </span>
              </PriceSection>
              <button onClick={() => handleDelete(id)}>delete</button>
            </TourBox>
          </TourArticle>
        )
      )}
    </div>
  );
};

export default TourData;
