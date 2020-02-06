import {
  FETCH_WEATHER_DATA_START,
  FETCH_WEATHER_DATA_SUCCESS,
  // FETCH_WEATHER_DATA_FAILURE,
  FETCH_QUERY_DATA_START,
  FETCH_QUERY_DATA_FAILURE
  // TOGGLE_FAHRENHEIT_CELSIUS
} from "../actions";

const initialState = {
  consolidated_weather: [],
  isLoading: false,
  error: "error"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        consolidated_weather: action.payload.consolidated_weather,
        title: action.payload.title,
        error: false
      };
    case FETCH_QUERY_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false
      };

    case FETCH_QUERY_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};
