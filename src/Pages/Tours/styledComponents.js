import styled from "styled-components";

export const TourArticle = styled.article`
  margin: 12px 0;
  width: 1200px;
`;

export const TourBox = styled.div`
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

export const DateSection = styled.div`
  text-align: center;
  width: 80px;
`;

export const DaysSection = styled.div`
  text-align: center;
  width: 50px;
`;

export const ImageSection = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const Cover = styled.img`
  max-height: 100%;
  position: absolute;
  left: -25%;
`;

export const NameSection = styled.div`
  width: 400px;
`;

export const AvailabilityContainer = styled.i`
  vertical-align: middle;
  display: inline-block;
  padding-right: 4px;
  color: ${(props) =>
    props.active ? "var(--color-affirmative);" : "var(--color-negative)"};
`;

export const AvailabilityText = styled.span`
  padding-left: 4px;
`;

export const PriceSection = styled.div`
  width: 200px;
  text-align: center;
`;

export const PriceTag = styled.div`
  font-size: 32px;
  display: inline;
`;

export const NotFound = styled.div`
  margin: 40px;
`;

export const NewTour = styled.div`
  height: 130px;
  width: 100%;
  background: white;
`;

export const TourName = styled.h3`
  cursor: pointer;
  sup {
    visibility: hidden;
  }
  &:hover {
    sup {
      visibility: visible;
    }
  }
`;
