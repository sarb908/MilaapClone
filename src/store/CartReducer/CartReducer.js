import * as types from "./actionTypes";

const init = {
  isLoading: false,
  isError: false,
  cartItems: [],
};

export const cartReducer = (state = init, action) => {
  switch (action.type) {
    case types.GET_CART_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_CART_ITEMS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        cartItems: action.payload,
      };
    }
    //////
    case types.UPDATE_CART_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.UPDATE_CART_ITEMS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.UPDATE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    /////
    case types.DELETE_CART_ITEMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.DELETE_CART_ITEMS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.DELETE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    /////

    default: {
      return state;
    }
  }
};
