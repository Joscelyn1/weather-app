import axios from "axios";

export const FETCH_WEATHER_DATA_START = "FETCH_WEATHER_DATA_START";
export const FETCH_WEATHER_DATA_SUCCESS = "FETCH_WEATHER_DATA_SUCCESS";
export const FETCH_WEATHER_DATA_FAILURE = "FETCH_WEATHER_DATA_FAILURE";
export const FETCH_QUERY_DATA_START = "FETCH_QUERY_DATA_START";
export const FETCH_QUERY_DATA_FAILURE = "FETCH_QUERY_DATA_FAILURE";

export const getData = query => {
  return dispatch => {
    dispatch({ type: FETCH_WEATHER_DATA_START });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${query}`
      )
      .then(res => {
        // res.data.data

        dispatch({ type: FETCH_WEATHER_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_WEATHER_DATA_FAILURE, payload: err.response });
      });
  };
};

export const getQueryData = query => {
  return dispatch => {
    dispatch({ type: FETCH_QUERY_DATA_START });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`
      )
      .then(res => {
        if (res.data.length > 0) {
          getData(res.data[0].woeid)(dispatch);
          //dispatch({ type: FETCH_QUERY_DATA_SUCCESS });
        } else {
          dispatch({
            type: FETCH_QUERY_DATA_FAILURE
          });
        }
      })
      .catch(err => {
        dispatch({ type: FETCH_QUERY_DATA_FAILURE, payload: err.response });
      });
  };
};
