import React, { useState, useEffect } from "react";
import data from "../database.json";
import { Layout, Flex, Card, Typography } from "antd";
import EditButton from "./edit_btn";
import "../App.css";

const { Content, Footer, Header } = Layout;
const { Paragraph } = Typography;

const Tryout = () => {
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "50px",
    color: "#444444",
    backgroundColor: "#E8E7E7",
  };
  const layoutStyle = {
    minHeight: "100vh",
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(100% - 8px)",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    backgroundColor: "#FBF0F0",
    flexDirection: "row",
  };

  const [items, setItems] = useState([]);
  const [json, setJson] = useState({ data });

  useEffect(() => {
    setItems(data);
  }, []);

  const handlePlateNumberChange = (value) => {
    setJson({
      ...json,
      plate_number: value,
    });
    // Handle the change of Plate Number value if needed
    console.log("Plate Number changed:", value);
    console.log(json);
  };

  return (
    <div className="app">
      <Header style={headerStyle}>
        <p>123456</p>
        <p>123456</p>
      </Header>
      <Flex gap="middle" wrap="wrap">
        <Layout>
          <div>
            <Content style={contentStyle}>
              <h4
                style={{
                  height: "100px",
                  paddingTop: "1%",
                  fontSize: "30px",
                  borderBottom: "white 5px solid",
                }}
              >
                Unit Info
              </h4>
              <div>
                {items.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <EditButton onPlateNumberChange={handlePlateNumberChange} />
                    <div
                      key={item["# unit_id"]}
                      style={{
                        backgroundColor: "#E8E7E7",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px",
                        margin: "20px",
                        width: "70%",
                        border: "white 5px solid",
                      }}
                    >
                      <div
                        style={{
                          padding: "20px",
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
                      </div>
                      <div
                        style={{
                          padding: "20px",
                        }}
                      >
                        <p>
                          <strong>Car ID:</strong> {item.car_id}
                        </p>
                        <Paragraph
                          editable={{
                            onChange: handlePlateNumberChange,
                          }}
                        >
                          <strong style={{ fontWeight: "bold" }}>
                            Plate Number:
                          </strong>{" "}
                          {item.plate_number}
                        </Paragraph>
                        <p>
                          <strong>Car Color:</strong> {item.car_color}
                        </p>
                        <p>
                          <strong>Car Make:</strong> {item.car_make}
                        </p>
                      </div>
                      <div
                        style={{
                          padding: "20px",
                        }}
                      >
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
                    </div>
                  </div>
                ))}
              </div>
            </Content>
          </div>
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
};

export default Tryout;
