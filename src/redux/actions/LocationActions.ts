import { defaultLocation } from "../../constants/LocationConstants";

export const getLoc = () => (dispatch: any) => {
  navigator?.geolocation?.getCurrentPosition(
    (data) => {
      dispatch({
        type: "LONGLAT",
        payload: {
          lat: data.coords.latitude.toString(),
          lng: data.coords.longitude.toString(),
        },
      });
    },
    (error) => {
      dispatch({
        type: "LONGLAT",
        payload: defaultLocation,
      });
    }
  );
};
