import "./App.css";
import React, { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlaceData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Bounds, Place, SelectedFilter, RatingText, RatingFilter } from "./types";
import { Coords } from "google-map-react";

const ratings: Array<RatingFilter> = [
  {
    ratingText: RatingText.RATING_ALL,
    ratingValue: 0,
  },
  {
    ratingText: RatingText.RATING_ABOVE_5,
    ratingValue: 5,
  },
  {
    ratingText: RatingText.RATING_ABOVE_4,
    ratingValue: 4,
  },
  {
    ratingText: RatingText.RATING_ABOVE_3,
    ratingValue: 3,
  },
];

function App() {
  const [places, setPlaces] = useState<Array<Place> | []>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<Array<Place> | []>([]);

  const [coordinates, setCoordinates] = useState<Coords>({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState<Bounds>({ ne: { lat: 0, lng: 0 }, sw: { lat: 0, lng: 0 } });
  const [childClicked, setChildClicked] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [type, setType] = useState<SelectedFilter>(SelectedFilter.RESTAURANT);
  const [rating, setRating] = useState<RatingText>(RatingText.RATING_ALL);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const currentRatingValueObject = ratings.find((obj) => {
      return obj.ratingText === rating;
    });

    if (places) {
      const filteredPlacesArray = places.filter((place) => {
        if (Number(place?.rating) >= currentRatingValueObject!.ratingValue) {
          return place;
        }
        return false;
      });
      setFilteredPlaces(filteredPlacesArray);
    }
  }, [rating, places]);

  useEffect(() => {
    setIsLoading(true);
    if (bounds.sw.lat !== 0 && bounds.ne.lat !== 0) {
      getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
        // only use items with name, photo and reviews
        let fullData = data?.filter((item: Place) => {
          if (item.name && item.num_reviews && item.photo) {
            return true;
          }
          return false;
        });
        setPlaces(fullData as Array<Place>);
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            setRating={setRating}
            rating={rating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
