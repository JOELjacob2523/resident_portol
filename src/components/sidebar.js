import { Layout, Menu, theme } from "antd";
import React from "react";
import { items } from "../data/sideBarItems";
const { Sider } = Layout;

const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
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
      <Sider
        className="side-bar-menu"
        width={300}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
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
      <div className="side-bar-footer">
        SafetyHood &copy;{new Date().getFullYear()} <br /> Created by SafetyHood
      </div>
    </div>
  );
};

export default Sidebar;
