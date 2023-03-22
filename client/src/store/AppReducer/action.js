import axios from "axios";
import {
  GET_LEND_DATA_REQUEST,
  GET_LEND_DATA_SUCCESS,
  GET_LEND_DATA_FAILURE,
  GET_DONATE_DATA_REQUEST,
  GET_DONATE_DATA_SUCCESS,
  GET_DONATE_DATA_FAILURE,
} from "./actionTypes";

export const getLend = (params) => (dispatch) => {
  dispatch({ type: GET_LEND_DATA_REQUEST });
  axios
    .get("https://milaapsarb.onrender.com/lend", params)
    .then((r) => dispatch({ type: GET_LEND_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_LEND_DATA_FAILURE }));
};

export const getDonate =
  (data = "") =>
  (dispatch) => {
    dispatch({ type: GET_DONATE_DATA_REQUEST });
    axios
      .get(
        `https://milaaplendingserver.onrender.com/donate?${
          data?.length > 0 ? `q=${data}` : ""
        }`
      )
      .then((r) => dispatch({ type: GET_DONATE_DATA_SUCCESS, payload: r.data }))
      .catch((e) => dispatch({ type: GET_DONATE_DATA_FAILURE }));
  };
