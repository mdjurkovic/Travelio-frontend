import styled from "styled-components";
import {FlexCenter} from "../../Common";
import {Link} from "../../Components";
import {Loading3QuartersOutlined} from "@ant-design/icons";

export const DestinationsContainer = styled.div`
  ${FlexCenter};
  margin-top: 40px;
  width: 100%;
  flex-wrap: wrap;
`;

export const DestinationBox = styled.div`
  margin: 0 10px 20px 10px;
  width: 300px;
  height: 300px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.05);
    transform-origin: 50% 50%;
    color: var(--color-secondary) !important;
  }
  svg {
    &:hover {
      color: var(--color-secondary) !important;
    }
  }
`

export const Destination = styled(DestinationBox)`
  background: white;
  border-radius: 4px;
  overflow: hidden;
`;

export const LoadMoreDestinations = styled(DestinationBox)`
  ${FlexCenter};
  flex-direction: column;
`;

export const LoadMoreIcon = styled(Loading3QuartersOutlined)`
  svg {
    width: 50px;
    height: 50px;
  }
  margin-bottom: 20px;
`

export const DestinationLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  height: 75%;
`;

export const DestinationInfo = styled.div`
  ${FlexCenter};
  flex: 1 1 auto;
`;

export const NewDestination = styled.div`
  ${FlexCenter};
  height: 40%;
  width: 40%;
  border: 1px solid;
  border-style: ridge;
  border-radius: 50px;
`;

export const DestinationHeader = styled.div`
  width: 1000px;
  text-align: center;
  position: relative;
`;

export const DestinationFilter = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% / 2 - 12px);
`;

export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewDestinationButton = styled.button`
  margin: 12px 0 24px;
`;
