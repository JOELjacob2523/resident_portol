import { Avatar, Button, Card, Col, Row, Image } from "antd";
import data from "../database.json";
import React, { useState, useEffect } from "react";
import Meta from "antd/es/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FiPlusCircle } from "react-icons/fi";
import carImage from "../images/exterior-640-en_US.webp";
import carIcon from "../images/car_icon.png";
import CarInfoTop from "./carInfoTop";
import "../css/carInfo.css";

const CarInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div className="car-info-container">
      <CarInfoTop />
      <div className="inner-container">
        {info.map((item, index) => (
          <div key={index} className="info-card-container">
            <Row gutter={16}>
              <Col span={16} style={{ padding: "5px" }}>
                <Card
                  title={`Car #${1}`}
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                  cover={<img alt="example" src={carImage} />}
                  //cover={<Image src={carImage} />}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                    }
                    title={`Car #${index + 1}`}
                    description={
                      <div>
                        {`Plate Number: ${item.plate_number}`}
                        <br key={`${index}-br`} />{" "}
                        {`Car color: ${item.car_color}`}
                        <br key={`${index + 1}-br`} />{" "}
                        {`Car make: ${item.car_make}`}
                        <br key={`${index + 2}-br`} />{" "}
                        {`Car model: ${item.car_model}`}
                      </div>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <Row gutter={16}>
          <Col span={16} style={{ padding: "5px" }}>
            <Card
              title="Add New Car"
              bordered={false}
              style={{
                width: 300,
                height: 485,
              }}
              cover={<img alt="example" src={carIcon} />}
            >
              <Button className="add-btn">
                <FiPlusCircle />
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CarInfo;
