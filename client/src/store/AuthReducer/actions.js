import * as types from "../AuthReducer/actionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST,
  });

  return axios
    .post("https://milaapsarb.onrender.com/signup", payload)
    .then((res) => {
      return dispatch({
        type: types.REGISTER_SUCCESS,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.REGISTER_FAILURE });
    });
};

export const login = (payload1) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://milaapsarb.onrender.com/login", payload1)
    .then((res) => {
      {
        return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
      }
    })
    .catch((e) => {
      return dispatch({ type: types.LOGIN_FAILURE });
    });
};
