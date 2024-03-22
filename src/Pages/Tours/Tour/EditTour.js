import {Alert, DatePicker, Form, Input, Select, Slider, Typography,} from "antd";
import {useQuery} from "@apollo/client";
import {memo, useState} from "react";
import dayjs from "dayjs";
import {DESTINATIONS_PATH, isPastCurrentDate, TOURS_PATH, useMutation,} from "../../../Common";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {DynamicInputs, PopConfirm} from "../../../Components";
import {DELETE_TOUR, GET_TOURS, UPDATE_TOUR} from "../queries";
import {GET_GUIDERS} from "../../Guiders/queries";
import {EditTourForm, FormButton, FormFlexContainer, FormFlexItem, StyledInputNumber,} from "../styledComponents";

const {Paragraph} = Typography;
const {TextArea} = Input;
const {RangePicker} = DatePicker;

const EditTour = memo(() => {
    const {error: guidersError, data: guidersData} = useQuery(GET_GUIDERS, {});
    const {mutation: updateTour, contextHolder: updateTourContext} =
        useMutation(
            UPDATE_TOUR,
            GET_TOURS,
            "Error updating tour",
            "Tour successfully updated"
        );
    const {mutation: deleteTour, contextHolder: deleteTourContext} =
        useMutation(
            DELETE_TOUR,
            GET_TOURS,
            "Error deleting tour",
            "Tour successfully deleted"
        );

    const location = useLocation();
    const navigate = useNavigate();
    const currentTour = location.state || {};
    const [editTour, setEditTour] = useState(currentTour);
    const [passengers, setPassengers] = useState(currentTour.passengers);
    const guiders = guidersData ? guidersData.guiders : [];
    const isDueDate = isPastCurrentDate(currentTour.departureDate);
    const [sliderValue, setSliderValue] = useState(0);

    if (!currentTour) return <Navigate to={DESTINATIONS_PATH}/>;

    if (guidersError)
        return <Alert message="Error fetching Guiders" type="error" closable/>;

    const paragraphStyle = {
        fontSize: "30px",
        fontWeight: "bold",
    };

    const updateTourName = (attribute, name) => {
        setEditTour((prevObject) => ({
            ...prevObject,
            [attribute]: name,
        }));
    };

    const handleDynamicInputChange = (values) => {
        setPassengers(values);
    };

    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    const onFinish = async (values) => {
        const tour = {
            name: editTour.name,
            price: values.price,
            description: values.description,
            departureDate: values.date?.[0],
            returnDate: values.date?.[1],
            minPassengers: values.minMaxPassengers?.[0],
            maxPassengers: values.minMaxPassengers?.[1],
            passengers: passengers.filter((passenger) => passenger),
            guider:
                values.guider === currentTour.guider.name
                    ? currentTour.guider.id
                    : values.guider,
        };

        await updateTour({id: currentTour.id, tour});
        navigate(TOURS_PATH);
    };

    const onDelete = async () => {
        await deleteTour({id: currentTour.id});
        setTimeout(() => navigate(TOURS_PATH), 1000);
    };

    return (
        <>
            {updateTourContext}
            {deleteTourContext}
            <EditTourForm onFinish={onFinish} disabled={isDueDate}>
                <FormFlexContainer>
                    <FormFlexItem>
                        <Form.Item name="name" initialValue={currentTour.name}>
                            <Paragraph
                                editable={!isDueDate && {
                                    onChange: (name) => updateTourName("name", name),
                                }}
                                style={paragraphStyle}
                            >
                                {editTour.name}
                            </Paragraph>
                        </Form.Item>
                        <Form.Item
                            name="description"
                            initialValue={currentTour.description}
                        >
                            <TextArea rows={4}>{editTour.name}</TextArea>
                        </Form.Item>
                        <Form.Item
                            name="date"
                            initialValue={[
                                dayjs(currentTour.departureDate),
                                dayjs(currentTour.returnDate),
                            ]}
                            rules={[
                                {
                                    required: true,
                                    message: "Select depart and return date!",
                                },
                            ]}
                        >
                            <RangePicker
                                disabledDate={isPastCurrentDate}
                                placeholder={["Departure", "Return"]}
                            />
                        </Form.Item>
                        <Form.Item name="guider" initialValue={currentTour.guider.name}>
                            <Select placeholder="Guider for the tour">
                                {guiders.map(({id, name}) => (
                                    <Select.Option key={id} value={id}>
                                        {name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="price"
                            initialValue={currentTour.price}
                            rules={[
                                {
                                    required: true,
                                    message: "Must not be empty!",
                                },
                            ]}
                        >
                            <StyledInputNumber prefix="€"/>
                        </Form.Item>
                        <Form.Item
                            name="minMaxPassengers"
                            initialValue={[
                                currentTour.minPassengers,
                                currentTour.maxPassengers,
                            ]}
                        >
                            <Slider
                                range={{
                                    draggableTrack: true,
                                }}
                                max={60}
                                onChange={handleSliderChange}
                            />
                        </Form.Item>
                    </FormFlexItem>
                    <>
                        <Form.Item name="passengers">
                            <DynamicInputs
                                onInputChange={handleDynamicInputChange}
                                passengers={passengers}
                                disabled={sliderValue[1] <= passengers.length}
                                maxPassengers={currentTour.maxPassengers}
                            />
                        </Form.Item>
                    </>
                </FormFlexContainer>
                <Form.Item>
                    <FormButton type="primary" htmlType="submit">
                        save
                    </FormButton>
                </Form.Item>
                <PopConfirm message="tour" handleDelete={onDelete}>
                    <FormButton danger type="text" htmlType="button">
                        delete
                    </FormButton>
                </PopConfirm>
            </EditTourForm>
        </>
    );
});

export default EditTour;
