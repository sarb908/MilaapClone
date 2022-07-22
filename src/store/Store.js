import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/authReducer";
import { reducer } from "./AppReducer/reducer";
import { cartReducer } from "./CartReducer/CartReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  authReducer: authReducer,
  reducer: reducer,
  cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
