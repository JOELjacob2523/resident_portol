import React, { useState, useEffect } from "react";
import data from "../database.json";
import { Layout, Flex, Descriptions } from "antd";
const { Content, Footer } = Layout;

function ResidentInfo() {
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "50px",
    color: "#444444",
    backgroundColor: "#e7f4ff",
  };
  const layoutStyle = {
    minHeight: "100vh",
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(100% - 8px)",
  };

  const DescriptionStyle = {
    marginTop: "5%",
    fontSize: "200px",
  };

  const [items, setItems] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    setItems(data);

    const labels = {
      "# unit_id": "Unit ID",
      condo_id: "Condo ID",
      address: "Address",
      user_id: "User ID",
      max_cars: "Max Cars",
      car_id: "Car ID",
      plate_number: "Plate Number",
      car_color: "Car Color",
      car_make: "Car Make",
      car_model: "Model",
      car_pic: "Car Picture",
      unit_id: "Unit",
      last_updated: "Last Updated",
    };

    if (data && data.length > 0) {
      const userItem = data[1]; //Replace 1 with ["# unit_id"]
      const generatedUserInfo = Object.keys(userItem).map((key) => ({
        key,
        label: labels[key],
        children: userItem[key],
      }));
      setUserInfo(generatedUserInfo);
    }
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
            <div key={items["# unit_id"]}>
              <Descriptions
                title="User Info"
                items={userInfo}
                style={DescriptionStyle}
              />
            </div>
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

export default ResidentInfo;
