import {CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled,} from "@ant-design/icons";
import {AvailabilityContainer, AvailabilityText} from "../styledComponents";
import {isPastCurrentDate} from "../../../Common";

let color = "";
let text = "";
let component = null;

const Availability = ({tour}) => {
    const isDueDate = isPastCurrentDate(tour.departureDate);
    const isNotEnough = tour.minPassengers > tour.passengers.length;
    const isAlmostFull = tour.maxPassengers - tour.passengers.length <= 4;
    const isFull = tour.maxPassengers === tour.passengers.length;

    if (isFull) {
        color = "var(--color-negative)";
        text = "Full";
        component = <CloseCircleFilled/>;
    } else if (isDueDate && tour.passengers.length < tour.minPassengers) {
        color = "var(--color-negative)";
        text = "Cancelled";
        component = <CheckCircleFilled/>;
    } else if (isDueDate) {
        color = "var(--color-past)";
        text = "Finished";
        component = <CheckCircleFilled/>;
    } else if (isNotEnough) {
        color = "var(--color-warning)";
        text = "Not enough passengers";
        component = <ExclamationCircleFilled/>;
    } else if (isAlmostFull) {
        color = "var(--color-affirmative)";
        text = "Last few passengers";
        component = <ExclamationCircleFilled/>;
    } else {
        color = "var(--color-affirmative)";
        text = "Filling in";
        component = <CheckCircleFilled/>;
    }

    return (
        <AvailabilityContainer color={color}>
            {component}
            <AvailabilityText>{text}</AvailabilityText>
            <br/>
            {tour.passengers.length} / {tour.maxPassengers}
        </AvailabilityContainer>
    );
};
export default Availability;
