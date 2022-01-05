import "./mapbox.scss";
import { Popover } from "antd";
import { InfoCard } from "../Card";
import "mapbox-gl/dist/mapbox-gl.css";
import { GiMeal } from "react-icons/gi";
import { BsFillCursorFill } from "react-icons/bs";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { IMapBoxProp } from "../../interfaces/pages.interface";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Mapbox = ({ lnglat, center }: IMapBoxProp) => {
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX || "",
  });

  return (
    <Map
      // eslint-disable-next-line react/style-prop-object
      style={process.env.REACT_APP_MAP_STYLE || ""}
      containerStyle={{ height: "100vh", width: "100vw" }}
      center={center}
      zoom={[13]}
    >
      {lnglat.map((item, idx) => (
        <Popover
          key={idx}
          content={<InfoCard item={item} own={item.type === "own"} />}
        >
          <Marker coordinates={item.lnglat}>
            {item.type === "own" ? (
              <BsFillCursorFill className="marker-icon own-icon" />
            ) : (
              <GiMeal className="marker-icon" />
            )}
          </Marker>
        </Popover>
      ))}
    </Map>
  );
};

export default Mapbox;
