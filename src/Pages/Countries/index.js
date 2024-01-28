import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { CREATE_COUNTRY, GET_COUNTRIES, UPDATE_COUNTRY } from "./queries";
import { Loader, Switch, WorldMap } from "../../Components";
import { useMutation } from "../../Common";
import { CountriesContainer, CountryName, Table } from "./styledComponents";

const Countries = () => {
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

  const countryRef = useRef(null);
  const [selected, onSelect] = useState(null);

  const handleSwitchOnChange = async (id, active) => {
    await updateCountry({ id, active });
  };

  const handleCreateCountry = async () => {
    await createCountry({ country: countryRef.current.value });
    countryRef.current.value = null;
  };

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const countries = !selected
    ? data.countries
    : data.countries.filter((country) => country.continent === selected);

  return (
    <>
      {updateCountryContext}
      <CountriesContainer>
        <WorldMap selected={selected} onSelect={onSelect} />
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(({ id, name, active }) => (
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
