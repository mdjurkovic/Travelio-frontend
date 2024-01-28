import {
  Destination,
  DestinationInfo,
  DestinationLink,
  ImageContainer,
} from "../styledComponents";
import { DESTINATIONS_PATH, TOURS_PATH } from "../../../Common";
import { BlurryLoadingImage } from "../../../Components";

const DestinationData = ({ destination }) => (
  <Destination key={destination.id}>
    <DestinationLink
      to={DESTINATIONS_PATH}
      parameter={destination.name}
      childPath={TOURS_PATH}
      state={destination}
    >
      <ImageContainer>
        <BlurryLoadingImage image={destination.image} />
      </ImageContainer>
      <DestinationInfo>
        <h4>{destination.name}</h4>
      </DestinationInfo>
    </DestinationLink>
  </Destination>
);

export default DestinationData;
