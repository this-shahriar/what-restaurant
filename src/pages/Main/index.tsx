/* eslint-disable react-hooks/exhaustive-deps */
import "./main.scss";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import { Empty, Card, Typography } from "antd";
import { AiOutlineRest } from "react-icons/ai";
import { Pad } from "../../shared-components/Pad";
import { getRandomItem } from "../../utils/random";
import Mapbox from "../../shared-components/Mapbox";
import Search from "../../shared-components/Search";
import { useDispatch, useSelector } from "react-redux";
import { InfoCard } from "../../shared-components/Card";
import { IMarkers } from "../../interfaces/pages.interface";
import { Container } from "../../shared-components/Container";
import { ILocationState } from "../../interfaces/redux.interface";
import * as locationActions from "../../redux/actions/LocationActions";
import * as restaurantActions from "../../redux/actions/RestaurantActions";
import { defaultLocation } from "../../constants/LocationConstants";

const Main = () => {
  const dispatch = useDispatch();
  const [justLoaded, setJustLoaded] = useState(true);
  const [markers, setMarkers] = useState<IMarkers[]>([]);
  const { getLoc } = bindActionCreators(locationActions, dispatch);
  const RestaurantList = useSelector((state: any) => state.RestaurantReducer);
  const { getRestaurantList } = bindActionCreators(restaurantActions, dispatch);
  const { lat, lng } = useSelector(
    ({ LocReducer }: { LocReducer: ILocationState }) => LocReducer
  );

  useEffect(() => {
    if (!RestaurantList && lat !== defaultLocation.lat)
      getRestaurantList(`${lat},${lng}`);
    else if (RestaurantList) {
      let sanitizedList = [];
      if (justLoaded) {
        sanitizedList = [...getRandomItem(RestaurantList)];
        setJustLoaded(false);
      } else sanitizedList = [...RestaurantList];
      setMarkers(
        sanitizedList.map((restaurant: any) => ({
          ...restaurant,
          lnglat: [
            restaurant.geocodes.main.longitude,
            restaurant.geocodes.main.latitude,
          ],
        }))
      );
    }
  }, [RestaurantList, lat]);

  useEffect(() => {
    getLoc();
  }, []);

  return (
    <div data-test-id="main-body" className="main-wrapper">
      <Container>
        <Card>
          <Search />
          <div className="list-desktop-view">
            <div className="search-title">
              <AiOutlineRest className="rest-icon" />
              <Typography.Title level={4}>Restaurants</Typography.Title>
            </div>
            <Pad />
            {markers?.length > 0 ? (
              <div className="marker-wrapper">
                {markers.map((item, idx) => (
                  <InfoCard item={item} key={idx} />
                ))}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        </Card>
      </Container>
      {lat && lng && (
        <Mapbox
          center={[lng, lat]}
          lnglat={[
            ...markers,
            {
              lnglat: [lng, lat],
              name: "Your location",
              type: "own",
            },
          ]}
        />
      )}
    </div>
  );
};

export default Main;
