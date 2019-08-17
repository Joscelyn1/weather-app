import React, { useState, useEffect } from "react";
import axios from "axios";
import { getData } from "../actions";
import { connect } from "react-redux";
function Search(props) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    alert("A name was submitted: " + query);
    props.getData(query);
    e.preventDefault();
  }
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="city"
          name="name"
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    consolidated_weather: state.consolidated_weather,
    title: state.title
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Search);
