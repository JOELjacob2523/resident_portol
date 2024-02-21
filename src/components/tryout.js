import React, { useState, useEffect } from "react";
import data from "../database.json";
import { Layout, Flex, Card } from "antd";
import "../App.css";
const { Content, Footer } = Layout;

function Tryout() {
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "50px",
    color: "#444444",
    backgroundColor: "#e7f4ff",
    fontSize: "30px",
  };
  const layoutStyle = {
    minHeight: "100vh",
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(100% - 8px)",
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        <div>1</div>
        <div>2</div>
      </div>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Content style={contentStyle}>
            <h4>Unit Info</h4>
            <Card style={{ fontSize: "20px" }}>
              {items.map((item) => (
                <div
                  key={item["# unit_id"]}
                  style={{
                    backgroundColor: "#EDF7FA",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>
                    <strong>Condo ID:</strong> {item.condo_id}
                  </p>
                  <p>
                    <strong>Address:</strong> {item.address}
                  </p>
                  <p>
                    <strong>UserID:</strong> {item.user_id}
                  </p>
                  <p>
                    <strong>Max Cars:</strong> {item.max_cars}
                  </p>
                  <p>
                    <strong>Car ID:</strong> {item.car_id}
                  </p>
                  <p>
                    <strong>Plate Number:</strong> {item.plate_number}
                  </p>
                  <p>
                    <strong>Car Color:</strong> {item.car_color}
                  </p>
                  <p>
                    <strong>Car Make:</strong> {item.car_make}
                  </p>
                  <p>
                    <strong>Car Model:</strong> {item.car_model}
                  </p>
                  <p>
                    <strong>Car Picture:</strong> {item.car_pic}
                  </p>
                  <p>
                    <strong>Unit:</strong> {item.unit_id}
                  </p>
                  <p>
                    <strong>Last Updated:</strong> {item.last_updated}
                  </p>
                </div>
              ))}
            </Card>
          </Content>
        </Layout>
      </Flex>
      <Footer
        style={{
          marginTop: "auto",
          position: "sticky",
          bottom: 0,
          textAlign: "center",
          backgroundColor: "#FBF0F0",
        }}
      >
        SafetyHood ©2023 Created by SafetyHood
      </Footer>
    </div>
  );
}

export default Tryout;
