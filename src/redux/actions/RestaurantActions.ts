import { message } from "antd";
import axios from "axios";
import { ApiList } from "../../constants/ApiList";
import { Errors } from "../../constants/ErrorMessages";
import { mapConfig } from "../../constants/LocationConstants";

export const getRestaurantList =
  (ll: string, query?: string) => async (dispatch: any) => {
    const res = await axios({
      method: "GET",
      url: ApiList.RESTAURANT_SEARCH,
      params: { ll: ll, query: query, ...mapConfig },
      headers: {
        Accept: "application/json",
        Authorization: process.env.REACT_APP_FSQ || "",
      },
    });

    if (res?.data?.results) {
      dispatch({
        type: "RESLIST",
        payload: res.data.results,
      });
    } else {
      message.error({ title: Errors.GET_RESTAURANT });
    }
  };
