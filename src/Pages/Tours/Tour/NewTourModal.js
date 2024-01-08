import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Slider,
  Switch,
} from "antd";
import { useQuery } from "@apollo/client";
import { GET_DESTINATION_TYPES, GET_GUIDERS } from "../queries";
import { useState } from "react";
import { ModalForm, ModalFormItem, ModalHeader } from "../../../Common";
import { Upload } from "../../../Components";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const NewTourModal = ({ open, setOpen, destinationId, createTour }) => {
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

  const destinationTypes = dtData ? dtData.destinationTypes : [];
  const guiders = guidersData ? guidersData.guiders : [];
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [coverName, setCoverName] = useState("");
  const defaultPassengers = [10, 60];
  const [form] = Form.useForm();

  const beforeUpload = (file) => {
    setCoverName(file.name);
    return false;
  };

  const handleOk = async () => {
    try {
      setConfirmLoading(true);

      const values = await form.validateFields();

      const tour = {
        name: values.name,
        price: values.price,
        departureDate: values.date[0],
        returnDate: values.date[1],
        minPassengers: values.passengers?.[0] || defaultPassengers[0],
        maxPassengers: values.passengers?.[1] || defaultPassengers[1],
        image: coverName,
        guider: values.guider,
        destination: destinationId,
      };

      await createTour({ tour });

      setConfirmLoading(false);
      handleCancel();
    } catch (error) {
      setConfirmLoading(false);
    }
  };

  const disabledDate = (current) => current && current < new Date();

  const handleCancel = () => setOpen(false);

  return (
    <Modal
      open={open}
      confirmLoading={confirmLoading}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
    >
      <ModalHeader>CREATE TOUR</ModalHeader>
      <ModalForm
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        form={form}
      >
        <ModalFormItem
          label="Name"
          name="name"
          rules={[{ required: true, message: "Input the name!" }]}
        >
          <Input placeholder="Name of the tour" />
        </ModalFormItem>
        <ModalFormItem
          label="Type"
          name="type"
          rules={[{ required: true, message: "Select the tour type!" }]}
        >
          <Select mode="multiple" placeholder="Type of tour">
            {destinationTypes.map(({ id, label }) => (
              <Select.Option key={id} value={label}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </ModalFormItem>
        <ModalFormItem label="Guider" name="guider">
          <Select placeholder="Guider for the tour">
            {guiders.map(({ id, name }) => (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </ModalFormItem>
        <ModalFormItem
          label="Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Select depart and return date!",
            },
          ]}
        >
          <RangePicker
            disabledDate={disabledDate}
            placeholder={["Departure", "Return"]}
          />
        </ModalFormItem>
        <ModalFormItem
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Input the price!",
            },
          ]}
        >
          <InputNumber prefix="€" />
        </ModalFormItem>
        <ModalFormItem label="Description" name="description">
          <TextArea rows={4} />
        </ModalFormItem>
        <ModalFormItem label="Active" valuePropName="checked">
          <Switch />
        </ModalFormItem>
        <ModalFormItem label="Cover">
          <Upload beforeUpload={beforeUpload} />
        </ModalFormItem>
        <ModalFormItem label="Passengers" name="passengers">
          <Slider range defaultValue={defaultPassengers} />
        </ModalFormItem>
      </ModalForm>
    </Modal>
  );
};

export default NewTourModal;
