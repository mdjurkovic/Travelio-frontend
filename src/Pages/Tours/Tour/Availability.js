import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { AvailabilityContainer, AvailabilityText } from "../styledComponents";

let color = "";
let text = "";
let component = null;

const Availability = ({ isDueDate, isFull, isAlmostFull }) => {
  if (isFull) {
    color = "var(--color-negative)";
    text = "Not available";
    component = <CloseCircleFilled />;
  } else if (isDueDate) {
    color = "var(--color-affirmative)";
    text = "Finished";
    component = <CheckCircleFilled />;
  } else if (isAlmostFull) {
    color = "var(--color-warning)";
    text = "Last passengers";
    component = <ExclamationCircleFilled />;
  } else {
    color = "var(--color-affirmative)";
    text = "Available";
    component = <CheckCircleFilled />;
  }

  return (
    <AvailabilityContainer color={color}>
      {component}
      <AvailabilityText>{text}</AvailabilityText>
    </AvailabilityContainer>
  );
};
export default Availability;
