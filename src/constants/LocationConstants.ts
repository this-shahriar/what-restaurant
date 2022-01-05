import { ILocationState } from "../interfaces/redux.interface";

export const defaultLocation: ILocationState = {
  lat: 23.781007,
  lng: 90.399905,
};

export const mapConfig = {
  radius: 3000, //3km radius search area
  categories: 13065, //restaurant category
  limit: 50, //max 50 results per call
  fields: "geocodes,name,tel,rating,price,distance,website,email,description",
};
