import React, { useState, useEffect } from "react";
import axios from "axios";
import { getData, getQueryData } from "../actions";
import { connect } from "react-redux";
import { Button, Form, FormInput } from "shards-react";
function Search(props) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.getQueryData(query);
    //props.getData(query);
  }
  return (
    <section className="search-form">
      <Form onSubmit={handleSubmit} className="form">
        <FormInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="city"
          name="name"
        />
        <Button /*type="submit"*/ value="Submit">Submit</Button>
      </Form>
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
  { getData, getQueryData }
)(Search);
