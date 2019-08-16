import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

function Day(props) {
  const day = new Date(JSON.stringify(props.day.applicable_date));
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return (
    <Card className="day-card" style={{ maxWidth: "500px" }}>
      <CardHeader>
        {props.index === 0
          ? "Today"
          : props.index === 1
          ? "Tomorrow"
          : week[day.getDay()]}
      </CardHeader>
      <CardImg
        width="75px"
        src={`https://www.metaweather.com/static/img/weather/${
          props.day.weather_state_abbr
        }.svg`}
      />
      <CardBody>
        <CardTitle>{props.day.weather_state_name}</CardTitle>
        <p>{Math.round((9 / 5) * props.day.the_temp + 32)}°F</p>
      </CardBody>
      <CardFooter>
        {Math.round((9 / 5) * props.day.min_temp + 32)}°F -{" "}
        {Math.round((9 / 5) * props.day.max_temp + 32)}°F
      </CardFooter>
    </Card>
  );
}

export default Day;
