import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries";
import {
  Chip,
  List,
  ListDivider,
  ListItem,
  ListItemDecorator,
  listItemDecoratorClasses,
  Typography,
} from "@mui/joy";
import Select from "@mui/joy/Select";
import Option, { optionClasses } from "@mui/joy/Option";
import Check from "@mui/icons-material/Check";
import React from "react";

const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: {},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Select
      placeholder="Choose your animal"
      componentsProps={{
        listbox: {
          component: "div",
          sx: {
            maxHeight: 240,
            overflow: "auto",
            "--List-padding": "0px",
          },
        },
      }}
      sx={{ width: 240 }}
    >
      {data.countries.map(({ destinations, name }, index) => (
        <React.Fragment key={name}>
          {index !== 0 && <ListDivider role="none" />}
          <List
            role="group"
            aria-labelledby={`select-group-${name}`}
            sx={{ "--List-decorator-size": "28px" }}
          >
            <ListItem role="presentation" id={`select-group-${name}`} sticky>
              <Typography
                level="body3"
                textTransform="uppercase"
                letterSpacing="md"
              >
                {name} ({destinations.length})
              </Typography>
            </ListItem>
            {destinations.map((destination) => (
              <Option
                key={destination}
                value={destination}
                label={
                  <React.Fragment>
                    <Chip
                      color="success"
                      size="sm"
                      sx={{ borderRadius: "xs", mr: 1, ml: -0.5 }}
                    >
                      {name}
                    </Chip>{" "}
                    {destination.name}
                  </React.Fragment>
                }
                sx={{
                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                    {
                      opacity: 1,
                    },
                }}
              >
                <ListItemDecorator sx={{ opacity: 0 }}>
                  <Check />
                </ListItemDecorator>
                {destination.name}
              </Option>
            ))}
          </List>
        </React.Fragment>
      ))}
    </Select>
  );
};

export default Countries;
