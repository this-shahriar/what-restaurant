import { Col } from "antd";
import { ReactChild } from "react";
import "./container.scss";

export const Container = ({ children }: { children: ReactChild }) => {
  return (
    <Col className="container-body" xs={24} md={12} lg={7}>
      {children}
    </Col>
  );
};
