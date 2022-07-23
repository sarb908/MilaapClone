import * as types from "../AuthReducer/actionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
    console.log(payload)
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILURE,payload:e });
      return types.REGISTER_FAILURE;
    });
};

export const login = (payload1) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://reqres.in//api/login", payload1)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE });
      return types.LOGIN_FAILURE;
    });
};
