import React from "react";
import { WeatherResponseObject } from "../../types";

interface IProps {
  weatherDataObject: WeatherResponseObject;
  options: any;
  lat: number;
  lng: number;
}

const WeatherMark = ({ weatherDataObject }: IProps) => {
  return (
    <>
      <img src={`http://openweathermap.org/img/w/${weatherDataObject.weather[0].icon}.png`} height="70px" alt="" />;
    </>
  );
};

export default WeatherMark;
