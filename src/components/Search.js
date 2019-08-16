import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormInput, Form } from "shards-react";
import { getData } from "../actions";
import { connect } from "react-redux";
function Search(props) {
  const [query, setQuery] = useState("");

  return (
    <section className="search-form">
      <Form className="form">
        <FormInput
          onSubmit={e => setQuery(e.target.value)}
          placeholder="city"
          name="name"
        />
        <Button onClick={props.getData(query)} theme="light" type="submit">
          Search
        </Button>
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
  { getData }
)(Search);

/*
  console.log(props);
  const [date, setDate] = useState("");
  return (
    <div className="App">
      <h1> Nasa Photo of the Day </h1>
      <input
        type="text"
        placeholder="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      {props.loading && <div>loading...</div>}
      {props.apod && (
        <div>
          <img alt="something" src={props.apod.url} />
          <p>{props.apod.explanation}</p>
        </div>
      )}
      {props.error !== "" && <p>{props.error}</p>}
      <button onClick={() => props.getApod(date)}>Get Photo of the Day</button>
    </div>
  );
}

*/
