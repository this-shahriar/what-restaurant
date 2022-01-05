import { AnyAction } from "redux";

export const RestaurantReducer = (state: any = null, action: AnyAction) => {
  switch (action.type) {
    case "RESLIST":
      return action.payload;
    default:
      return state;
  }
};
