import axios from "axios";
import * as types from "./actionTypes";
export const getCartItemsHandler = (token) => (dispatch) => {
  dispatch({
    type: types.GET_CART_ITEMS_REQUEST,
  });
  return axios
    .get(`https://milaapsarb.onrender.com/cart`, {
      headers: { token: `Bearer ${token}` },
    })
    .then((d) => {
      return dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        payload: d.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_CART_ITEMS_FAILURE,
      });
    });
};

export const updateCartItemsHandler = (item, token) => (dispatch) => {
  dispatch({
    type: types.UPDATE_CART_ITEMS_REQUEST,
  });
  return axios
    .post(`https://milaapsarb.onrender.com/cart`, item, {
      headers: { token: `Bearer ${token}` },
    })
    .then((d) => {
      return dispatch({
        type: types.UPDATE_CART_ITEMS_SUCCESS,
      });
    })
    .then(() => {
      return dispatch(getCartItemsHandler(token));
    })
    .catch((err) => {
      return dispatch({
        type: types.UPDATE_CART_ITEMS_FAILURE,
      });
    });
};

export const deleteCartItemsHandler = (id, token) => (dispatch) => {
  dispatch({
    type: types.DELETE_CART_ITEMS_REQUEST,
  });
  return axios
    .delete(`https://milaapsarb.onrender.com/cart/${id}`, {
      headers: { token: `Bearer ${token}` },
    })
    .then((d) => {
      return dispatch({
        type: types.DELETE_CART_ITEMS_SUCCESS,
      });
    })
    .then(() => {
      return dispatch(getCartItemsHandler(token));
    })
    .catch((err) => {
      return dispatch({
        type: types.DELETE_CART_ITEMS_FAILURE,
      });
    });
};
