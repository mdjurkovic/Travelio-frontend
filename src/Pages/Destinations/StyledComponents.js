import styled from "styled-components";
import { FlexCenter, Link } from "../../Common";

export const DestinationsContainer = styled.div`
  margin: 40px 0 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Destination = styled.div`
  margin: 0 10px 20px 10px;
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 4px;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  cursor: pointer;
`;

export const DestinationLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.05);
    transform-origin: 50% 50%;
  }
`;

export const ImageContainer = styled.div`
  height: 75%;
`;

export const DestinationInfo = styled(FlexCenter)`
  flex: 1 1 auto;
`;

export const NewDestination = styled(FlexCenter)`
  height: 40%;
  width: 40%;
  border: 1px solid;
  border-style: ridge;
  border-radius: 50px;
`;
