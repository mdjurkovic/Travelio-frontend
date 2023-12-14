import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "../../Common";
import styled from "styled-components";
import { CREATE_GUIDER, DELETE_GUIDER, GET_GUIDERS } from "./queries";
import { Loader } from "../../Components";

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
  const guiderRef = useRef(null);
  const { loading, error, data } = useQuery(GET_GUIDERS);
  const { mutation: createGuider } = useMutation(CREATE_GUIDER, GET_GUIDERS);
  const { mutation: deleteGuider } = useMutation(DELETE_GUIDER, GET_GUIDERS);

  const handleDeleteGuider = (id) => {
    const itemToUpdate = data.guiders.find((item) => item.id === id);
    if (itemToUpdate) {
      deleteGuider({ variables: { id } });
    }
  };

  const handleAddGuider = () => {
    createGuider({ variables: { guider: guiderRef.current.value } });
  };

  useEffect(() => {
    // Fetch initial data
  }, []);

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
        <h3>Add Guider</h3>
        <input type="text" placeholder="Name" ref={guiderRef} />
        <button onClick={handleAddGuider}>Add</button>
      </div>
    </div>
  );
};

export default GuidersTable;
