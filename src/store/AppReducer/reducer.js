import {
  GET_LEND_DATA_REQUEST,
  GET_LEND_DATA_SUCCESS,
  GET_LEND_DATA_FAILURE,
  GET_DONATE_DATA_REQUEST,
  GET_DONATE_DATA_SUCCESS,
  GET_DONATE_DATA_FAILURE
} from "./actionTypes";

const initialState = {
  donate:[],
  lend: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LEND_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LEND_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lend: payload,
      };
    case GET_LEND_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_DONATE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DONATE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donate: payload,
      };
    case GET_DONATE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
