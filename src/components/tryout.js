import React, { useState, useEffect } from "react";
import data from "../database.json";
import DropdownBtn from "./dropdown_btn";
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
    zIndex: "100",
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
                  height: "10px",
                }}
              >
                Unit Info
              </h4>
              <div>
                {items.map((item, index) => (
                  <div key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <EditButton
                        onPlateNumberChange={handlePlateNumberChange}
                      />
                      <div
                        style={{
                          filter: "drop-shadow(8px 8px 8px gray)",
                          backgroundColor: "#FBFAFA",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          margin: "20px",
                          padding: "10px",
                          borderRadius: "3px",
                          width: "30%",
                          zIndex: "1",
                        }}
                      >
                        <div
                          style={{
                            padding: "10px",
                          }}
                        >
                          <p>
                            <strong>Condo ID:</strong> {item.condo_id}
                          </p>
                          <p>
                            <strong>Address:</strong> {item.address}
                          </p>
                          <p>
                            <strong>City/State/Zip:</strong> {item.city}{" "}
                            {item.state} {item.zip_code}
                          </p>
                          <p>
                            <strong>Max Cars:</strong> {item.max_cars}
                          </p>
                          <p>
                            <strong>Last Updated:</strong> {item.last_updated}
                          </p>
                        </div>
                        <div
                          style={{
                            alignSelf: "flex-end",
                          }}
                        >
                          <DropdownBtn />
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "none" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "#474a4a",
                          color: "whitesmoke",
                        }}
                      >
                        <div>
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
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "#474a4a",
                          color: "whitesmoke",
                        }}
                      >
                        car 2
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "#474a4a",
                          color: "whitesmoke",
                        }}
                      >
                        car 3
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "#474a4a",
                          color: "whitesmoke",
                        }}
                      >
                        car 4
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "#474a4a",
                          color: "whitesmoke",
                        }}
                      >
                        car 5
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "#474a4a",
                          color: "whitesmoke",
                        }}
                      >
                        car 6
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
              backgroundColor: "#474a4a",
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
                  e.currentTarget.style.backgroundColor = "#474a4a";
                  e.currentTarget.style.color = "aliceblue";
                  e.currentTarget.style.border = "white 2px solid";
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
          zIndex: "100",
        }}
      >
        <div>SafetyHood ©2023 Created by SafetyHood</div>
      </Footer>
    </div>
  );
};

export default Tryout;
