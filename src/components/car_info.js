import { Avatar, Button, Card, Col, Row } from "antd";
import data from "../database.json";
import React, { useState, useEffect } from "react";
import Meta from "antd/es/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FiMapPin, FiPlusSquare } from "react-icons/fi";
import carImage from "../images/exterior-640-en_US.webp";
import "../css/carInfo.css";

const CarInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div className="car-info-container">
      <div className="inner-container">
        <div className="top-div">
          <div>Welcome, Joel Jacob</div>
          <div className="car-info">
            {data.map((item, index) => (
              <div key={index}>
                <FiMapPin /> {`${item.address}`},
                <br key={`${index}-br`} />{" "}
                {`${item.city} ${item.state} ${item.zip_code}`}
              </div>
            ))}
          </div>
        </div>
        {info.map((item, index) => (
          <div key={index} className="info-card-container">
            <Row gutter={16}>
              <Col span={16}>
                <Card
                  title={`Car #${1}`}
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                  cover={<img alt="example" src={carImage} />}
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
                    description={`Plate Number: ${item.plate_number}`}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <Row gutter={16}>
          <Col span={16}>
            <Card
              title="Add new car"
              bordered={false}
              style={{
                width: 300,
              }}
              cover={<img alt="example" src={carImage} />}
            >
              <Button className="add-btn">
                <FiPlusSquare />
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CarInfo;
