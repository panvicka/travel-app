import axios, { AxiosRequestConfig } from "axios";
import { Coords } from "google-map-react";
import { Place, SelectedFilter } from "../types";
import { mockDataPlaces } from "./dummyAPIdataPlaces";
import { dummyWeatherData } from "./dummyAPIdataWeather";

export const getPlaceData = async (type: SelectedFilter, sw: Coords, ne: Coords) => {
  if (sw.lat === 0 && sw.lng === 0 && ne.lat === 0 && ne.lng === 0) {
    return;
  }

  try {
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVEL_ADVISOR_KEY,
      },
    };

    const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

    if (process.env.REACT_APP_MOCK_API === "true") {
      console.log("fetching travel data from mocked API");

      return mockDataPlaces;
    } else {
      console.log("fetching travel data from real API");
      const {
        data: { data },
      } = await axios.get(url, options as any as AxiosRequestConfig);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const weatherUrl = "https://community-open-weather-map.p.rapidapi.com/find";

export const getWeatherData = async (lat: number, lng: number) => {
  const weatherOptions = {
    params: {
      lon: lng,
      lat: lat,
    },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_WEATHER,
    },
  };
  try {
    if (process.env.REACT_APP_MOCK_API === "true") {
      console.log("fetching weather data from mocked API");
      return dummyWeatherData;
    } else {
      console.log("fetching weather data from real API");
      const { data } = await axios.get(weatherUrl, weatherOptions as any as AxiosRequestConfig);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
