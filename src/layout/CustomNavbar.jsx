import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Image,
  Layout,
  Row,
} from "antd"; 

import { Typography } from "antd";
import { BellOutlined, MenuOutlined } from "@ant-design/icons";  
import ProfileMenu from "./ProfileMenu";
const { Text } = Typography;
const { Header, Content } = Layout;

const CustomNavbar = () => {
    return (
     
    <>
    <div>
        <Col>
        <Row>
        <Button
          type="text"
          icon={<MenuOutlined />}
          
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            marginLeft:10
          }}
        />
        </Row>
        </Col>
    </div>
    </>
    );
};

export default CustomNavbar;