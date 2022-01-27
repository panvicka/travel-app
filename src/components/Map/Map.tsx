import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import useStyles from "./style.js";
import { Place, Bounds } from "../../types";
import MapMarker from "./MapMarker";

interface IProps {
  places: Array<Place>;
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>;
  setBounds: React.Dispatch<React.SetStateAction<Bounds>>;
  coordinates: Coords;
  setChildClicked: React.Dispatch<React.SetStateAction<number | null>>;
}

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes for map marker pin
    lat?: number;
    lng?: number;
  }
}

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }: IProps) => {
  const classes = useStyles();

  const URLkeys: GoogleMapReact.BootstrapURLKeys = {
    key: process.env.REACT_APP_GOOGLE_MAP_API_KEY ? process.env.REACT_APP_GOOGLE_MAP_API_KEY : "",
    language: "en",
  };

  const handleMarkerClick = (index: number) => {
    console.log(index);
    setChildClicked(index);
  };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={URLkeys}
        // defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place, index) => {
          if (place.name && place.photo) {
            return (
              <MapMarker
                options={""}
                key={index}
                index={index}
                lng={Number(place.longitude ? place.longitude : 0)}
                lat={Number(place.latitude ? place.latitude : 0)}
                place={place}
                onMarkerClick={handleMarkerClick}
              ></MapMarker>
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
