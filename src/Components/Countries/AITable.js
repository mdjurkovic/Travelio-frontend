import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import styled from "styled-components";
import {
  CREATE_COUNTRY,
  DELETE_COUNTRY,
  GET_COUNTRIES,
  UPDATE_COUNTRY,
} from "./queries";
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

const Button = styled.button`
  margin: 5px;
  font-size: 12px;
  padding: 10px 12px;
`;

const CountryName = styled.h3`
  margin: 0;
`;

const CountriesTable = () => {
  const newCountryRef = useRef(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [addItem] = useMutation(CREATE_COUNTRY, {
    refetchQueries: [
      { query: GET_COUNTRIES }, // DocumentNode object parsed with gql
      "GetCountries", // Query name
    ],
  });
  const [updateItem] = useMutation(UPDATE_COUNTRY, {
    refetchQueries: [
      { query: GET_COUNTRIES }, // DocumentNode object parsed with gql
      "GetCountries", // Query name
    ],
  });
  const [deleteItem] = useMutation(DELETE_COUNTRY, {
    refetchQueries: [
      { query: GET_COUNTRIES }, // DocumentNode object parsed with gql
      "GetCountries", // Query name
    ],
  });

  useEffect(() => {
    // Fetch initial data
  }, []);

  const handleAddItem = () => {
    addItem({ variables: { country: newCountryRef.current.value } });
  };

  const handleUpdateItem = (id) => {
    const itemToUpdate = data.countries.find((item) => item.id === id);
    if (itemToUpdate) {
      updateItem({ variables: { id } });
    }
  };

  const handleDeleteItem = (id) => {
    const itemToUpdate = data.countries.find((item) => item.id === id);
    if (itemToUpdate) {
      deleteItem({ variables: { id } });
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.countries.map((item) => (
            <tr key={item.id}>
              <td>
                <CountryName>{item.name}</CountryName>
              </td>
              <td>
                <Button onClick={() => handleUpdateItem(item.id)}>
                  Update
                </Button>
                <Button onClick={() => handleDeleteItem(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <h3>Add Item</h3>
        <input type="text" placeholder="Name" ref={newCountryRef} />
        {isUpdate ? (
          <Button onClick={handleUpdateItem}>Update</Button>
        ) : (
          <Button onClick={handleAddItem}>Add</Button>
        )}
      </div>
    </div>
  );
};

export default CountriesTable;
