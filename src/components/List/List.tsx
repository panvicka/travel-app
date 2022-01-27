import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, Typography } from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./style.js";
import { Place, SelectedFilter, RatingText } from "../../types";

interface IProps {
  places: Array<Place>;
  childClicked: number | null;
  isLoading: boolean;
  type: SelectedFilter;
  setType: React.Dispatch<React.SetStateAction<SelectedFilter>>;
  rating: RatingText;
  setRating: React.Dispatch<React.SetStateAction<RatingText>>;
}

const List = ({ places, childClicked, isLoading, type, rating, setType, setRating }: IProps) => {
  const classes = useStyles();

  const [elementRefs, setElementRefs] = useState<Array<React.RefObject<HTMLInputElement>> | []>([]);

  useEffect(() => {
    if (!places) return;

    const refs: Array<React.RefObject<HTMLInputElement>> = [];
    for (let i = 0; i < places.length; i++) {
      if (places[i].name && places[i].photo) {
        refs[i] = createRef();
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
                  setType(
                    (e.target.value as string as SelectedFilter)
                      ? (e.target.value as string as SelectedFilter)
                      : SelectedFilter.RESTAURANT
                  );
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
                  console.log(e.target.value);
                  setRating(
                    (e.target.value as string as RatingText)
                      ? (e.target.value as string as RatingText)
                      : RatingText.RATING_ALL
                  );
                }}
              >
                <MenuItem value={RatingText.RATING_ALL}>{RatingText.RATING_ALL}</MenuItem>
                <MenuItem value={RatingText.RATING_ABOVE_3}>{RatingText.RATING_ABOVE_3}</MenuItem>
                <MenuItem value={RatingText.RATING_ABOVE_4}>{RatingText.RATING_ABOVE_4}</MenuItem>
                <MenuItem value={RatingText.RATING_ABOVE_5}>{RatingText.RATING_ABOVE_5}</MenuItem>
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
