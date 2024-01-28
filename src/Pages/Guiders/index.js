import React, { useRef } from "react";
import { useQuery } from "@apollo/client";
import { Loader, PopConfirm } from "../../Components";
import { useMutation } from "../../Common";
import {
  CREATE_GUIDER,
  DELETE_GUIDER,
  GET_GUIDERS,
  UPDATE_GUIDER,
} from "./queries";
import { AddGuiderContainer, Table } from "./styledComponents";
import { Avatar, Form, Input, Typography } from "antd";

const { Paragraph } = Typography;

const GuidersTable = () => {
  const createGuiderRef = useRef(null);
  const [form] = Form.useForm();
  const { loading, error, data } = useQuery(GET_GUIDERS);
  const { mutation: createGuider, contextHolder: contextHolderCreate } =
    useMutation(
      CREATE_GUIDER,
      GET_GUIDERS,
      "Error creating guider",
      "Guider successfully created",
      {}
    );
  const { mutation: deleteGuider, contextHolder: contextHolderDelete } =
    useMutation(
      DELETE_GUIDER,
      GET_GUIDERS,
      "Error deleting guider",
      "Guider successfully deleted",
      {}
    );
  const { mutation: updateGuider, contextHolder: contextHolderUpdate } =
    useMutation(
      UPDATE_GUIDER,
      GET_GUIDERS,
      "Error updating guider",
      "Guider successfully updated",
      {}
    );

  const handleDeleteGuider = async (id) => {
    await deleteGuider({ id });
  };

  const handleAddGuider = async () => {
    try {
      await createGuider({ guider: createGuiderRef.current.input.value });
      form.resetFields(["guider"]);
    } catch (e) {
      alert(e);
    }
  };

  const handleUpdateGuider = async (id, newName) => {
    await updateGuider({ id, guider: newName });
  };

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {contextHolderDelete}
      {contextHolderCreate}
      {contextHolderUpdate}
      <Table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Total tours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.guiders.map(({ id, name, description, toursCount }) => (
            <tr key={id}>
              <td>
                <Avatar>{name[0]}</Avatar>
              </td>
              <td>
                <Paragraph
                  editable={{
                    onChange: (newName) => handleUpdateGuider(id, newName),
                  }}
                >
                  {name}
                </Paragraph>
              </td>
              <td>{toursCount}</td>
              <td>
                <PopConfirm
                  handleDelete={() => handleDeleteGuider(id)}
                  message="guider"
                >
                  <button>Delete</button>
                </PopConfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form form={form}>
        <AddGuiderContainer>
          <h3>New Guider</h3>
          <Form.Item
            name="guider"
            rules={[{ required: true, message: "Input the guider name!" }]}
          >
            <Input
              type="text"
              placeholder="Name"
              ref={createGuiderRef}
              allowClear
            />
          </Form.Item>
          <button onClick={handleAddGuider}>New</button>
        </AddGuiderContainer>
      </Form>
    </div>
  );
};

export default GuidersTable;
