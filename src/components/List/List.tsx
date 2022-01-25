import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, Typography } from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./style.js";
import { Place } from "../../types";

interface IProps {
  places: Array<Place>;
  childClicked: number | null;
  isLoading: boolean;
}

enum SelectedFilter {
  RESTAURANT = "restaurants",
  HOTELS = "hotels",
  ATTRACTIONS = "attractions",
}

const List = ({ places, childClicked, isLoading }: IProps) => {
  const classes = useStyles();

  const [type, setType] = useState<string>("restaurants");
  const [rating, setRating] = useState("");

  const [elementRefs, setElementRefs] = useState<Array<React.RefObject<HTMLInputElement>> | []>([]);

  useEffect(() => {
    if (!places) return;

    let createdRefs = 0;
    const refs: Array<React.RefObject<HTMLInputElement>> = [];
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
                  setType((e.target.value as string) ? (e.target.value as string) : SelectedFilter.RESTAURANT);
                }}
              >
                <MenuItem value={SelectedFilter.RESTAURANT}>{SelectedFilter.RESTAURANT}</MenuItem>
                <MenuItem value={SelectedFilter.HOTELS}>{SelectedFilter.HOTELS}</MenuItem>
                <MenuItem value={SelectedFilter.ATTRACTIONS}>{SelectedFilter.ATTRACTIONS}</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel>Rating</InputLabel>
              <Select
                value={rating}
                onChange={(e) => {
                  setRating((e.target.value as string) ? (e.target.value as string) : "");
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
