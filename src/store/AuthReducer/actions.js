import * as types from "../AuthReducer/actionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST,
  });

  localStorage.setItem("logindetail", JSON.stringify(payload));

  dispatch({
    type: types.REGISTER_SUCCESS,
  });
  dispatch({
    type: types.REGISTER_FAILURE,
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
