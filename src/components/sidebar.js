import { Layout, Menu, theme } from "antd";
import React from "react";
import { items } from "../data/sideBarItems";
import { Link } from "react-router-dom";
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
          {/* <Menu
            className="side-bar-menu"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items}
          /> */}
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
          >
            {/* Map through items and render menu items */}
            {items.map((item) => (
              <Menu.Item key={item.key}>
                {/* Use Link component to create navigation links */}
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
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
