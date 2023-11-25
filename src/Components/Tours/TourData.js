import Japan from "../../Images/Japan.jpeg";
import styled from "styled-components";
import { DateFormat } from "../DateFormat";

const TourArticle = styled.article`
  padding: 8px;
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
  width: 40px;
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

const TourData = ({ tours }) => {
  return (
    <div>
      {tours.map(({ id, name, departureDate }, index) => (
        <TourArticle key={id}>
          <TourBox key={id}>
            <DateSection>
              <h5>Departure</h5>
              <DateFormat date={departureDate} />
            </DateSection>
            <DateSection>
              <h5>Return</h5>
              <div>12.12.2021.</div>
            </DateSection>
            <DaysSection>
              <h5>Nights</h5>
              <div>11</div>
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
                <PriceTag>1.850</PriceTag>
                <span>e</span>
              </span>
            </PriceSection>
          </TourBox>
        </TourArticle>
      ))}
    </div>
  );
};

export default TourData;
