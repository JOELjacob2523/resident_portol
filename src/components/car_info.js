import { Avatar, Card, Col, Row } from "antd";
import data from "../database.json";
import React, { useState, useEffect } from "react";
import Meta from "antd/es/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const CarInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "15px",
      }}
    >
      {/* {info.map((item, index) => ( */}
      <Row gutter={16}>
        <Col span={16}>
          <Card
            title={`Car #${1}`}
            bordered={false}
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
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
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
      {/* ))} */}
    </div>
  );
};

export default CarInfo;
