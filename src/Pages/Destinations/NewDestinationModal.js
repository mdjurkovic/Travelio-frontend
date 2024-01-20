import { Form, Input, Modal, Select } from "antd";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES, GET_DESTINATION_TYPES } from "./queries";
import { useState } from "react";
import { ModalForm, ModalFormItem, ModalHeader } from "../../Common";
import { Upload } from "../../Components";

const NewDestinationModal = ({ open, setOpen, createDestination }) => {
  const {
    loading: cLoading,
    error: cError,
    data: cData,
  } = useQuery(GET_COUNTRIES, { variables: { active: true } });
  const {
    loading: dtLoading,
    error: dtError,
    data: dtData,
  } = useQuery(GET_DESTINATION_TYPES, {});

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const destinationTypes = dtData ? dtData.destinationTypes : [];
  const countries = cData ? cData.countries : [];
  const [coverName, setCoverName] = useState("");

  const beforeUpload = (file) => {
    setCoverName(file.name);
    return false;
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      const values = await form.validateFields();
      const jsonArray = values.destinationType.map((jsonString) => {
        const jsonObject = JSON.parse(jsonString);
        const { __typename, ...dt } = jsonObject;
        return dt;
      });
      const destination = {
        name: values.name,
        type: jsonArray,
        image: coverName,
        country: values.country,
      };

      await createDestination({ destination });

      setConfirmLoading(false);
      handleCancel();
    } catch (error) {
      console.log("fail");
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      confirmLoading={confirmLoading}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
    >
      <ModalHeader>CREATE DESTINATION</ModalHeader>
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
          <Input placeholder="Name" />
        </ModalFormItem>
        <ModalFormItem
          label="Type"
          name="destinationType"
          rules={[{ required: true, message: "Select the tour type!" }]}
        >
          <Select mode="multiple" placeholder="Destination type">
            {destinationTypes.map((dt) => (
              <Select.Option
                key={dt.id}
                value={JSON.stringify(dt)}
                initialValues={JSON.stringify(dt)}
              >
                {dt.label}
              </Select.Option>
            ))}
          </Select>
        </ModalFormItem>
        <ModalFormItem
          label="Country"
          name="country"
          rules={[{ required: true, message: "Select the country!" }]}
        >
          <Select placeholder="Country" showSearch={true}>
            {countries.map(({ id, name }) => (
              <Select.Option key={id} value={id} filterOption={filterOption}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </ModalFormItem>
        <ModalFormItem label="Cover">
          <Upload beforeUpload={beforeUpload} />
        </ModalFormItem>
      </ModalForm>
    </Modal>
  );
};

export default NewDestinationModal;
