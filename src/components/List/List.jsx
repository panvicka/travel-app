import React, { useState, useEffect, createRef } from "react";
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

const List = ({ places, childClicked, isLoading }) => {
  const classes = useStyles();

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [elementRefs, setElementRefs] = useState([]);

  useEffect(() => {
    if (!places) return;

    let createdRefs = 0;
    const refs = [];
    for (let i = 0; i < places.length; i++) {
      if (places[i].name && places[i].photo) {
        createdRefs++;
        refs[createdRefs] = createRef();
      }
    }

    setElementRefs(refs);
  }, [places, isLoading]);

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h4">Stuff to do around you</Typography>

        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
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
                if (placeItem.name && placeItem.photo) {
                  return (
                    <Grid item ref={elementRefs[index]} key={index} xs={12}>
                      <PlaceDetails
                        place={placeItem}
                        refProp={elementRefs[index]}
                        selected={Number(childClicked) === index}
                      />
                    </Grid>
                  );
                } else {
                  return "";
                }
              })}
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default List;
