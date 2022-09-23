import axios from "axios";
import * as types from "./actionTypes";
export const getCartItemsHandler = () => (dispatch) => {
  dispatch({
    type: types.GET_CART_ITEMS_REQUEST,
  });
  return axios
    .get(`https://milapp-json-server.herokuapp.com/cart`)
    .then((d) => {
      console.log(d.data);
      return dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        payload: d.data,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: types.GET_CART_ITEMS_FAILURE,
      });
    });
};

export const updateCartItemsHandler = (item) => (dispatch) => {
  dispatch({
    type: types.UPDATE_CART_ITEMS_REQUEST,
  });
  return axios
    .post(`https://milapp-json-server.herokuapp.com/cart`, item)
    .then((d) => {
      console.log(d.data);
      return dispatch({
        type: types.UPDATE_CART_ITEMS_SUCCESS,
      });
    })
    .then(() => {
      return dispatch(getCartItemsHandler());
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: types.UPDATE_CART_ITEMS_FAILURE,
      });
    });
};

export const deleteCartItemsHandler = (id) => (dispatch) => {
  dispatch({
    type: types.DELETE_CART_ITEMS_REQUEST,
  });
  return axios
    .delete(`https://milapp-json-server.herokuapp.com/cart/${id}`)
    .then((d) => {
      console.log(d.data);
      return dispatch({
        type: types.DELETE_CART_ITEMS_SUCCESS,
      });
    })
    .then(() => {
      return dispatch(getCartItemsHandler());
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: types.DELETE_CART_ITEMS_FAILURE,
      });
    });
};
