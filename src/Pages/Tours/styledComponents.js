import styled from "styled-components";
import {Button, Form, InputNumber} from "antd";
import {FlexBetween} from "../../Styles/styledComponents";

export const TourArticle = styled.article`
  margin: 12px 0;
  min-width: 1000px;
  a {
    text-transform: unset;
    font-weight: unset;
  }
`;

export const TourBox = styled.div`
  ${FlexBetween};
  &:hover {
    color: var(--color-secondary);
  }
  cursor: pointer;
  border: 1px solid;
  color: var(--color-primary);
  flex-wrap: flex;
  box-sizing: border-box;
  padding: 25px;
`;

export const DateSection = styled.div`
  text-align: center;
  width: 95px;
`;

export const DaysSection = styled.div`
  text-align: center;
  width: 80px;
`;

export const ImageSection = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin: 0 10px;
`;

export const Cover = styled.img`
  max-height: 100%;
  position: absolute;
  left: -25%;
`;

export const NameSection = styled.div`
  width: 300px;
`;

export const AvailabilityContainer = styled.i`
  vertical-align: middle;
  display: inline-block;
  padding-right: 4px;
  color: ${(props) => props.color};
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

export const EditTourForm = styled(Form)`
    text-align: center;
    min-width 900px;
`;

export const FormFlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FormFlexItem = styled.div`
  min-width: 300px;
`;

export const FormButton = styled(Button)`
  width: 100px;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 110px;
`;
