import { AnyAction } from "redux";
import { defaultLocation } from "../../constants/LocationConstants";
import { ILocationState } from "../../interfaces/redux.interface";

export const LocReducer = (
  state: ILocationState = { ...defaultLocation },
  action: AnyAction
) => {
  switch (action.type) {
    case "LONGLAT":
      return { ...action.payload };
    default:
      return state;
  }
};
