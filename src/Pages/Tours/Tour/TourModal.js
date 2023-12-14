import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Slider,
  Switch,
} from "antd";
import { useQuery } from "@apollo/client";
import {
  CREATE_TOUR,
  GET_DESTINATION_TYPES,
  GET_GUIDERS,
  GET_TOURS,
} from "../queries";
import { useMutation } from "../../../Common";
import React, { useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
const NewTourModal = ({ open, setOpen, destinationId }) => {
  const {
    loading: dtLoading,
    error: dtError,
    data: dtData,
  } = useQuery(GET_DESTINATION_TYPES, {});
  const {
    loading: guidersLoading,
    error: guidersError,
    data: guidersData,
  } = useQuery(GET_GUIDERS, {});
  const { mutation: createTour } = useMutation(CREATE_TOUR, GET_TOURS, {
    destinationId,
  });

  const destinationTypes = dtData ? dtData.destinationTypes : [];
  const guiders = guidersData ? guidersData.guiders : [];
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => setOpen(false);

  const disabledDate = (current) => current && current < new Date();

  const onFinish = async (values) => {
    try {
      const tour = {
        name: values.name,
        price: 1000,
        departureDate: values.date[0],
        returnDate: values.date[1],
        minPassengers: values.passengers[0],
        maxPassengers: values.passengers[1],
        guider: values.guider,
        destination: destinationId,
      };
      await createTour({ variables: { tour: tour } });
    } catch (error) {
      console.error("Mutation Error:", error.message);
    }
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      centered
    >
      <h3>CREATE TOUR</h3>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Please select tour type!" }]}
        >
          <Select mode="multiple">
            {destinationTypes.map((dt) => (
              <Select.Option key={dt.id} value={dt.label}>
                {dt.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Guider" name="guider">
          <Select>
            {guiders.map((guider) => (
              <Select.Option key={guider.id} value={guider.id}>
                {guider.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please select depart and return date!",
            },
          ]}
        >
          <RangePicker disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Active" valuePropName="checked">
          <Switch />
        </Form.Item>
        {/*<Form.Item*/}
        {/*  label="Cover"*/}
        {/*  valuePropName="fileList"*/}
        {/*  getValueFromEvent={normFile}*/}
        {/*>*/}
        {/*  <Upload action="/upload.do" listType="picture-card">*/}
        {/*    <div>*/}
        {/*      <div*/}
        {/*        style={{*/}
        {/*          marginTop: 8,*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        Upload*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </Upload>*/}
        {/*</Form.Item>*/}
        {/*<Form.Item label="Button">*/}
        {/*  <Button>Button</Button>*/}
        {/*</Form.Item>*/}
        <Form.Item label="Passengers" name="passengers">
          <Slider range defaultValue={[10, 60]} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default NewTourModal;
