import {memo, useState} from "react";
import {CREATE_DESTINATION, GET_DESTINATIONS} from "./queries";
import {useMutation} from "../../Common";
import {Loader} from "../../Components";
import {
    Destination,
    DestinationInfo,
    DestinationLink,
    DestinationsContainer,
    LoadMoreDestinations,
    LoadMoreIcon,
} from "./styledComponents";
import {useQuery} from "@apollo/client";
import {DestinationData, NewDestinationModal} from "./Destination";

const Destinations = memo(({continent}) => {
    const {loading, error, data, refetch} = useQuery(GET_DESTINATIONS, {
        variables: {active: true},
    });
    const {
        mutation: createDestination,
        contextHolder: createDestinationContext,
    } = useMutation(
        CREATE_DESTINATION,
        GET_DESTINATIONS,
        "Error creating destination",
        "Destination successfully created",
    );

    const [modalOpened, setModalOpened] = useState(false);
    const [showDisabled, setShowDisabled] = useState(false);

    if (loading) return <Loader/>;
    if (error) return <p>Error :(</p>;

    const destinationData = [...data.destinations];

    let destinations = !continent
        ? destinationData
        : destinationData.filter(
            (destination) => destination.country.continent === continent
        );

    const refetchq = async () => {
        await refetch({active: null});
        setShowDisabled(true)
    }
    const Modal = () => {
        return (
            <>
                <Destination onClick={() => setModalOpened(true)} key="new">
                    <DestinationLink to="">
                        <DestinationInfo>
                            <h4>NEW</h4>
                        </DestinationInfo>
                    </DestinationLink>
                </Destination>
                {modalOpened && (
                    <NewDestinationModal
                        open={modalOpened}
                        setOpen={setModalOpened}
                        createDestination={createDestination}
                    />
                )}
            </>
        );
    };

    return (
        <DestinationsContainer>
            {createDestinationContext}
            {destinations.map((destination) => (
                <DestinationData destination={destination} key={destination.id}/>
            ))}
            {!showDisabled && <LoadMoreDestinations onClick={refetchq}>
                <LoadMoreIcon/>
                <span>Load disabled</span>
            </LoadMoreDestinations>}
            <Modal/>
        </DestinationsContainer>
    );
});

export default Destinations;
