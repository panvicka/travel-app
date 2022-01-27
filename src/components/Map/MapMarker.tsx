import React, { useEffect } from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style.js";
import { Place } from "../../types";

interface IProps {
  place: Place;
  options: any;
  index: number;
  onMarkerClick(index: number): void;
  lat: number;
  lng: number;
}

const MapMarker = ({ lat, lng, place, options, index, onMarkerClick }: IProps): JSX.Element => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return (
    <div className={classes.markerContainer}>
      {isDesktop && (
        <Paper
          elevation={3}
          className={classes.paper}
          onClick={() => {
            onMarkerClick(index);
          }}
        >
          <Typography variant="subtitle2">{place?.name}</Typography>
          <img
            className={classes.pointer}
            src={place?.photo ? place?.photo.images.large.url : ""}
            alt={place?.name ? place?.name : "restaurant picture"}
          />
          {place?.rating && <Rating size="small" value={Number(place?.rating)} readOnly />}
        </Paper>
      )}

      {!isDesktop && (
        <LocationOnOutlinedIcon
          color="primary"
          fontSize="large"
          onClick={() => {
            onMarkerClick(index);
          }}
        />
      )}
    </div>
  );
};

export default MapMarker;
