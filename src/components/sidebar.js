import { Layout, Menu, theme } from "antd";
import React from "react";
import { items } from "../data/sideBarItems";
const { Sider } = Layout;

const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="container">
      <div className="logo-container">
        <div className="logo-inner">
          <img
            style={{ marginLeft: "10px" }}
            src="/safetyhood.svg"
            alt="Safetyhood"
          />
        </div>
      </div>
      <div className="side-bar-container">
        <Sider
          width={300}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            className="side-bar-menu"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items}
          />
        </Sider>
      </div>
      <div className="side-bar-footer">
        SafetyHood &copy;{new Date().getFullYear()} <br /> Created by SafetyHood{" "}
        <br /> All Rights Reserved
      </div>
    </div>
  );
};

export default Sidebar;
