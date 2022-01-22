import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Topography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./style.js";

const List = ({places}) => {
  const classes = useStyles();

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  console.log('places from list');
  console.log(places);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Stuff to do around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={5}>Above 5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((placeItem, index) => {
          console.log(placeItem)
          return (
            <Grid item key={index} xs={12}>
              <PlaceDetails place={placeItem} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default List;
