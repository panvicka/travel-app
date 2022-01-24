import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style.js";
import { Place, Bounds } from "../../types";

interface IProps {
  places: Array<Place>;
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>;
  setBounds: React.Dispatch<React.SetStateAction<Bounds>>;
  coordinates: Coords;
}

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes for map marker pin
    lat?: number;
    lng?: number;
  }
}

const Map = ({ setCoordinates, setBounds, coordinates, places }: IProps) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const URLkeys: GoogleMapReact.BootstrapURLKeys = {
    key: process.env.REACT_APP_GOOGLE_MAP_API_KEY ? process.env.REACT_APP_GOOGLE_MAP_API_KEY : "",
    language: "en",
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={URLkeys}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={""}
      >
        {places?.map((place, index) => {
          if (place.name && place.photo) {
            return (
              <div
                key={index}
                className={classes.markerContainer}
                lat={Number(place.latitude ? place.latitude : 0)}
                lng={Number(place.longitude ? place.longitude : 0)}
              >
                {!isDesktop ? (
                  <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="subtitle2">{place.name}</Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : ""}
                      alt={place.name ? place.name : "restaurant picture"}
                    />
                    {}
                    {place.rating && <Rating size="small" value={Number(place.rating)} readOnly />}
                  </Paper>
                )}
              </div>
            );
          } else {
            return "";
          }
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
