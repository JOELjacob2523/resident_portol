import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, Popover, Avatar } from "antd";

const HeadPopover = () => {
  const [open, setOpen] = useState(false);
  const handleVisibleChange = (newOpen) => {
    setOpen(newOpen);
  };

  const content = (
    <div className="app-head-popover-div">
      <List size="small">
        <List.Item>
          <List.Item.Meta avatar={<UserOutlined />} title="My Profile" />
        </List.Item>
        <List.Item>
          <List.Item.Meta avatar={<SettingOutlined />} title="Settings" />
        </List.Item>
        <List.Item>
          <List.Item.Meta avatar={<LogoutOutlined />} title="Logout" />
        </List.Item>
      </List>
    </div>
  );

  return <Avatar size={45} icon={<UserOutlined />} className="user-Avatar" />;
};

export default HeadPopover;
