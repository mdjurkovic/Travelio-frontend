import React, { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { CREATE_COUNTRY, GET_COUNTRIES, UPDATE_COUNTRY } from "./queries";
import { Loader } from "../../Components";
import { useMutation } from "../../Common";
import { Switch } from "antd";

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 12px;

  th,
  td {
    padding: 12px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }
`;

const CountryName = styled.h3`
  margin: 0;
`;

const CountriesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;

const Countries = () => {
  const countryRef = useRef(null);
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const { mutation: createCountry } = useMutation(
    CREATE_COUNTRY,
    GET_COUNTRIES,
    {},
    "Error creating country",
    "Country successfully created"
  );
  const { mutation: updateCountry, contextHolder: updateCountryContext } =
    useMutation(
      UPDATE_COUNTRY,
      GET_COUNTRIES,
      "Error updating country",
      "Country successfully updated"
    );

  useEffect(() => {
    // Fetch initial data
  }, []);

  const handleSwitchOnChange = async (id, active) => {
    await updateCountry({ id, active });
  };

  const handleCreateCountry = async () => {
    await createCountry({ country: countryRef.current.value });
    countryRef.current.value = null;
  };

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {updateCountryContext}
      <CountriesContainer>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {data.countries.map(({ id, name, active }) => (
              <tr key={id}>
                <td>
                  <CountryName>{name}</CountryName>
                </td>
                <td>
                  <Switch
                    onChange={() => handleSwitchOnChange(id, !active)}
                    checked={active}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {false && (
          <div>
            <input ref={countryRef} />
            <button onClick={handleCreateCountry}>Add</button>
          </div>
        )}
      </CountriesContainer>
    </>
  );
};

export default Countries;
