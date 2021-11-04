import React, { useEffect, useState } from "react";
import {
  cloudy,
  exercise,
  games,
  movie,
  park,
  partlyCloudy,
  puddle,
  puzzle,
  rainy,
  stormy,
  sunny,
  yard,
} from "../../assets/images";

import { PageContent } from "../../components/page-content";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";

const City = ({ cities }) => {
  const { slug } = useParams();

  const city = cities.find((city) => city.slug === slug);

  console.log("The slug coming back: ", slug);

  const [weatherGraphic, setWeatherGraphic] = useState(null);

  const [activityGraphic, setActivityGraphic] = useState(null);

  const [weatherSuggestion, setWeatherSuggestion] = useState(null);

  useEffect(() => {
    if (city.weatherForecast === "cloudy") {
      setWeatherGraphic(cloudy) && setActivityGraphic(puzzle);
    } else if (city.weatherForecast === "partly cloudy") {
      setWeatherGraphic(partlyCloudy) && setActivityGraphic(yard);
    } else if (city.weatherForecast === "rainy") {
      setWeatherGraphic(rainy) && setActivityGraphic(puddle);
    } else if (city.weatherForecast === "stormy") {
      setWeatherGraphic(stormy) && setActivityGraphic(movie);
    } else {
      setWeatherGraphic(sunny) && setActivityGraphic(park);
    }
  }, [city.weatherForecast, weatherGraphic]);

  useEffect(() => {
    if (city.weatherForecast === "cloudy") {
      setActivityGraphic(puzzle);
    } else if (city.weatherForecast === "partly cloudy") {
      setActivityGraphic(yard);
    } else if (city.weatherForecast === "rainy") {
      setActivityGraphic(puddle);
    } else if (city.weatherForecast === "stormy") {
      setActivityGraphic(movie);
    } else {
      setActivityGraphic(park);
    }
  }, [city.weatherForecast, activityGraphic]);

  useEffect(() => {
    if (city.weatherForecast === "cloudy") {
      setWeatherSuggestion("Have you thought about solving a puzzle?");
    } else if (city.weatherForecast === "partly cloudy") {
      setWeatherSuggestion("Have you thought about doing yard work?");
    } else if (city.weatherForecast === "rainy") {
      setWeatherSuggestion("Have you thought about jumping in a puddle?");
    } else if (city.weatherForecast === "stormy") {
      setWeatherSuggestion("Have you thought about having a movie marathon?");
    } else {
      setWeatherSuggestion("Have you thought about going to the park?");
    }
  }, [city.weatherForecast, weatherSuggestion]);

  const newDayHandler = () => {
    window.location.reload();
  };

  return (
    <div>
      <PageContent>
        <div className={style.cityInfo__container}>
          <h2>{city.cityName}</h2>
          <h3>The forecast for today is {city.weatherForecast}...</h3>
          <img src={weatherGraphic} alt="" />
          <h3>{weatherSuggestion}</h3>
          <img src={activityGraphic} alt="" />
          <button onClick={() => newDayHandler()}>A New Day</button>
        </div>
      </PageContent>
    </div>
  );
};

export default City;
