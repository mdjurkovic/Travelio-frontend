import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { CREATE_COUNTRY, DELETE_COUNTRY, GET_COUNTRIES } from "./queries";
import { Loader } from "../../Components";
import { useMutation } from "../../Common";

const Table = styled.table`
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

const CountriesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;

const CountriesTable = () => {
  const countryRef = useRef(null);
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const { mutation: createCountry } = useMutation(
    CREATE_COUNTRY,
    GET_COUNTRIES
  );
  const { mutation: deleteCountry } = useMutation(
    DELETE_COUNTRY,
    GET_COUNTRIES
  );

  useEffect(() => {
    // Fetch initial data
  }, []);

  const handleDeleteItem = (id) => {
    const itemToUpdate = data.countries.find((item) => item.id === id);

    if (itemToUpdate) {
      deleteCountry({ variables: { id } });
    }
  };

  const handleCreateCountry = () => {
    createCountry({ variables: { country: countryRef.current.value } });
  };

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <CountriesContainer>
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
                <Button onClick={() => handleDeleteItem(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <input ref={countryRef} />
        <button onClick={handleCreateCountry}>Add</button>
      </div>
    </CountriesContainer>
  );
};

export default CountriesTable;
