import React, { useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { getData } from "../actions";
import { connect } from "react-redux";
import Search from "./Search.js";
import Day from "./Day.js";
function Week(props) {
  useEffect(() => {
    props.getData(2442047);
  }, []);
  const week = Array.from(props.consolidated_weather);
  console.log(props, "props");
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
      ) : (
        ""
      )}
      {props.isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height="100" width="100" />
      ) : (
        ""
      )}
      <Search />
      <div className="week-container">
        {props.consolidated_weather.map(day => (
          <Day day={day} index={week.indexOf(day)} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    consolidated_weather: state.consolidated_weather,
    title: state.title,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Week);
