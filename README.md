# Travel App

App that uses several API to show the user the best restaurants in the area.

### Technology

- frontend **ReactJS** with **Typescript**
- **Maps JavaScript API** for the map element
- **Places API** for the search autocomplete
- **Travel Advisor** from [RapidAPI](https://rapidapi.com/apidojo/api/travel-advisor) for the restaurant, places and attractions tips
- **Open Weather App** from [RapidAPI](https://rapidapi.com/community/api/open-weather-map/) for the weather info

I found inspiration in this tutorial [Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI](https://www.youtube.com/watch?v=GDa8kZLNhJ4) but improved few things: 

- uses Typescript 
- refactored the marker maps [using the recommend way](https://developers.google.com/maps/documentation/javascript/reference/marker), removing the console errors 
- created dummy data for mocked API calls as the RapidAPI has limit 500 req/month. 

### Usage 
- clone the repository 
```
git clone https://github.com/panvicka/travel-app.git
```
- get your API keys for [Google services](https://console.cloud.google.com/) and activate **Maps JavaScript API** and **Places API** APIs. 
- get API key for **Travel Advisor** and **Open Weather App** 
- in the root create a `.env` file with your keys
```
REACT_APP_GOOGLE_MAP_API_KEY=QWERTY
REACT_APP_RAPID_API_TRAVEL_ADVISOR_KEY=QWERTY
REACT_APP_RAPID_API_WEATHER=QWERTY
REACT_APP_MOCK_API=false
```
- run the start script if you want to get the data from the APIs
```
npm run start 
```
- or run the start:mocking script to save the APIs calls 
```
npm run start:mocking
```