import "./card.scss";
import { Pad } from "../Pad";
import { IMarkers } from "../../interfaces/pages.interface";
import { Button, Divider, Tag, Typography, message } from "antd";

export const InfoCard = ({ item, own }: { item: IMarkers; own?: boolean }) => {
  const getDirections = () => {
    //todo
    message.info("Upcoming feature!");
  };

  return (
    <div className="marker-cards">
      <div className="marker-title">
        <Typography.Title level={5}>{item.name}</Typography.Title>
        {item.rating && <Tag color="#1690ff">{item.rating}</Tag>}
      </div>
      {!own && (
        <>
          <Divider />
          <p className="text-center">
            {item.description || "No description available"}
          </p>
          <Pad />
          <Button block onClick={getDirections} type="primary">
            Get directions
          </Button>
        </>
      )}
    </div>
  );
};
