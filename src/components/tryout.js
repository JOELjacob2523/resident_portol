import React, { useState, useEffect } from "react";
import data from "../database.json";
import DropdownBtn from "./dropdown_btn";
import { Layout } from "antd";
import Card from "react-bootstrap/Card";
import "../App.css";

const { Footer, Header } = Layout;

const Tryout = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    backgroundColor: "blue",
    flexDirection: "row",
    color: "aliceblue",
    zIndex: 100,
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div>
      <Header style={headerStyle}>
        <p>123456</p>
        <p>123456</p>
      </Header>
      <Card
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div>
          {items.map((item, index) => (
            <Card.Header
              key={index}
              className="text-center"
              style={{
                fontSize: "25px",
              }}
            >
              <strong>Unit Info for:</strong> {item.name}
            </Card.Header>
          ))}
          <Card.Body>
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
                        width: "80%",
                        zIndex: 1,
                        lineHeight: "2",
                      }}
                    >
                      <div
                        style={{
                          float: "inline-end",
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
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card.Body>
        </div>
      </Card>

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
      <Footer
        style={{
          position: "sticky",
          bottom: 0,
          textAlign: "center",
          backgroundColor: "blue",
          color: "aliceblue",
          zIndex: 100,
        }}
      >
        <div>SafetyHood ©{new Date().getFullYear()} Created by SafetyHood</div>
      </Footer>
    </div>
  );
};

export default Tryout;
