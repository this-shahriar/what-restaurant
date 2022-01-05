import { Button, Card, Col, Input, Row } from "antd";
import { Pad } from "../Pad";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as restaurantActions from "../../redux/actions/RestaurantActions";
import { useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const { getRestaurantList } = bindActionCreators(restaurantActions, dispatch);
  const { lat, lng } = useSelector((state: any) => state.LocReducer);
  const [searchString, setSearchString] = useState<string>();

  return (
    <div>
      <Input
        onChange={(e) => setSearchString(e.target.value)}
        onPressEnter={() => getRestaurantList(`${lat},${lng}`, searchString)}
        prefix={<BiSearchAlt />}
        placeholder="Search"
        size="large"
      />
      <Pad />
      {/* <Row gutter={8}>
        <Col span={6}>
          <Button type="primary"> Get top 10</Button>
        </Col>
      </Row> */}
    </div>
  );
};

export default Search;
