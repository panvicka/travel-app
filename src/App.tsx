import "./App.css";
import React, { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlaceData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { Bounds, Place } from "./types";
import { Coords } from "google-map-react";

function App() {
  const [places, setPlaces] = useState<Array<Place> | []>([]);
  const [coordinates, setCoordinates] = useState<Coords>({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState<Bounds>({ ne: { lat: 0, lng: 0 }, sw: { lat: 0, lng: 0 } });
  const [childClicked, setChildClicked] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    setIsLoading(true);
    if (bounds) {
      getPlaceData(bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data as Array<Place>);
        setIsLoading(false);
      });
    }
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked={childClicked} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
