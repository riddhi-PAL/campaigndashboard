import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import {
  HomeOutlined,
  SoundOutlined,
  SettingOutlined
} from "@ant-design/icons";   

const CustomSidebar = () => {
    return (
        <div >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Overview",
            
          },
          {
            key: "2",
            icon: <SoundOutlined />,
            label: "Details",
          },
          {
            key: "3",
            icon: <SettingOutlined />,
            label: "Settings",
          },
        ]}
      /> 
        </div>
    );
};

export default CustomSidebar;