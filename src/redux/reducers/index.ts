import { combineReducers } from "redux";
import { LocReducer } from "./LocationReducer";
import { RestaurantReducer } from "./RestaurantReducer";

export default combineReducers({
  LocReducer,
  RestaurantReducer,
});
