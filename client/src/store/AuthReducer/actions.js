import * as types from "../AuthReducer/actionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST,
  });

  return axios
    .post("http://localhost:8080/signup", payload)
    .then((res) => {
      console.log(res);
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
    .post("http://localhost:8080/login", payload1)
    .then((res) => {
      {
        console.log(res);
        return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
      }
    })
    .catch((e) => {
      return dispatch({ type: types.LOGIN_FAILURE });
    });
};
