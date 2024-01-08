import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Loader, PopConfirm } from "../../Components";
import { useMutation } from "../../Common";
import {
  CREATE_GUIDER,
  DELETE_GUIDER,
  GET_GUIDERS,
  UPDATE_GUIDER,
} from "./queries";
import { Avatar, Typography } from "antd";

const { Paragraph } = Typography;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: center;
    .ant-typography {
      margin: 0;
      inset-inline-start: unset;
    }
    span {
      span {
        line-height: unset;
      }
    }
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }
`;

const AddGuiderContainer = styled.div`
  text-align: center;
  margin-top: 48px;
  button {
    margin-top: 20px;
  }
`;

const GuidersTable = () => {
  const createGuiderRef = useRef(null);
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

  const handleAddGuider = () => {
    try {
      createGuider({ guider: createGuiderRef.current.value }).then(
        () => (createGuiderRef.current.value = null)
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateGuider = async (id, newName) => {
    await updateGuider({ id, guider: newName });
  };

  useEffect(() => {
    // Fetch initial data
  }, []);

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
      <AddGuiderContainer>
        <h3>Add Guider</h3>
        <input type="text" placeholder="Name" ref={createGuiderRef} />
        <button onClick={handleAddGuider}>Add</button>
      </AddGuiderContainer>
    </div>
  );
};

export default GuidersTable;
