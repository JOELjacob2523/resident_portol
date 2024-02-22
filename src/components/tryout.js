import React, { useState, useEffect } from "react";
import data from "../database.json";
import { Layout, Flex, Typography } from "antd";
import EditButton from "./edit_btn";
import "../App.css";

const { Content, Footer, Header } = Layout;
const { Paragraph } = Typography;

const Tryout = ({ handlePlateNumberChange }) => {
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
    maxWidth: "100%",
    backgroundColor: "#E8E7E7",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    backgroundColor: "#0f1111",
    flexDirection: "row",
    color: "aliceblue",
  };

  const [items, setItems] = useState([]);
  const [json, setJson] = useState({ data });

  useEffect(() => {
    setItems(data);
  }, []);

  handlePlateNumberChange = (value) => {
    setJson({
      ...json,
      plate_number: value,
    });
    // Handle the change of Plate Number value if needed
    console.log("Plate Number changed:", value);
    console.log(json);
  };

  return (
    <div>
      <Header style={headerStyle}>
        <p>123456</p>
        <p>123456</p>
      </Header>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <div>
            <Content style={contentStyle}>
              <h4
                style={{
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

          <div
            style={{
              fontSize: "15px",
              textAlign: "center",
              backgroundColor: "#0f1111",
              color: "aliceblue",
              paddingTop: "15px",
            }}
          >
            We'd love to hear what you think!!
            <div>
              <button
                style={{
                  borderRadius: "50px",
                  marginTop: "7px",
                  marginBottom: "10px",
                  height: "40px",
                  width: "10%",
                  border: "1px solid white",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#0f1111";
                  e.currentTarget.style.color = "aliceblue";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "";
                }}
              >
                Give feedback
              </button>
            </div>
          </div>
        </Layout>
      </Flex>
      <Footer
        style={{
          position: "sticky",
          bottom: 0,
          textAlign: "center",
          backgroundColor: "#0f1111",
          color: "aliceblue",
        }}
      >
        <div>SafetyHood ©2023 Created by SafetyHood</div>
      </Footer>
    </div>
  );
};

export default Tryout;
