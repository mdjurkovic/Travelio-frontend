import React, { useEffect, useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import styled from "styled-components";
import { CREATE_GUIDER, DELETE_GUIDER, GET_GUIDERS } from "./queries";
import Loader from "../../Components/Loader";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  th,
  td {
    padding: 0.5rem;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }
`;

const GuidersTable = () => {
  const newGuiderRef = useRef(null);

  const { loading, error, data } = useQuery(GET_GUIDERS);

  const [deleteItem] = useMutation(DELETE_GUIDER, {
    refetchQueries: [
      { query: GET_GUIDERS }, // DocumentNode object parsed with gql
      "GetGuiders", // Query name
    ],
  });

  const [addItem] = useMutation(CREATE_GUIDER, {
    refetchQueries: [
      { query: GET_GUIDERS }, // DocumentNode object parsed with gql
      "GetGuiders", // Query name
    ],
  });

  useEffect(() => {
    // Fetch initial data
  }, []);

  const handleDeleteGuider = (id) => {
    const itemToUpdate = data.guiders.find((item) => item.id === id);
    if (itemToUpdate) {
      deleteItem({ variables: { id } });
    }
  };

  const handleAddItem = () => {
    addItem({ variables: { guider: newGuiderRef.current.value } });
  };

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.guiders.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleDeleteGuider(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h3>Add Item</h3>
        <input type="text" placeholder="Name" ref={newGuiderRef} />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
};

export default GuidersTable;
