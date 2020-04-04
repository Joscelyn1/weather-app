import React, { useEffect } from "react";

import Loader from "react-loader-spinner";
import { getData, getInfoFromLatLong } from "../actions";
import { connect } from "react-redux";
import Search from "./Search.js";
import Day from "./Day.js";

function Week(props) {
  // if ("geolocation" in navigator) {
  //   console.log("geolocation is available");
  // } else {
  //   console.log("geolocation is not available");
  // }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      props.getInfoFromLatLong(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }, []);

  const week = Array.from(props.consolidated_weather);

  return (
    <div className="container">
      <h1 className="title">
        {props.title} Weather{" "}
        <span aria-label="sun" role="img">
          ☀️
        </span>
      </h1>
      {props.error ? (
        <p className="error">Error: couldn't find a city with that name</p>
      ) : null}
      {props.isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      ) : null}
      <Search />

      <div className="week-container">
        {props.consolidated_weather.map((day) => (
          <Day key={day.id} day={day} index={week.indexOf(day)} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    consolidated_weather: state.consolidated_weather,
    title: state.title,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getData, getInfoFromLatLong })(Week);
