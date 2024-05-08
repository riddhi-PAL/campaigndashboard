
import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuOutlined,
    DownOutlined,
    SearchOutlined,
    BellOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Row, Col, Input, Dropdown } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import '../assests/global.css'
import CustomSidebar from './CustomSidebar';
import ProfileMenu from './ProfileMenu';
import HomePage from '../components/Home';
const { Header, Sider, Content } = Layout;

const PageContainer = () => {
    const [collapsed, setCollapsed] = useState(true);
    const color1 = '#ffffff';
    const bgcolor = '#f3f2f7';
    const [day, setDay] = React.useState('');

    const handleChange = (event) => {
        setDay(event.target.value);
    };

    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: color1,
                        height: '65px'
                    }}
                >
                    <div>
                        <Row>

                            <Col >
                                <Button
                                    type="text"
                                    icon={<MenuOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: "16px",
                                        width: 64,
                                        height: 64,
                                        marginLeft: 10,
                                        background: 'transparent', // Set initial background color
                                        transition: 'background-color 0.8s', // Add smooth transition
                                        ':hover': {
                                            background: 'transparent', // Set background color on hover
                                        }
                                    }}
                                />
                            </Col>
                            <Col>
                                <img src="/tulogo.png" alt="" style={{ height: '38px', width: '90px', marginTop: '15px' }} />
                            </Col>



                            <Col span={3}>

                                <div style={{ height: '42px', width: '92px', marginLeft: '40px', marginTop: '15px' }}>
                                    <p style={{ lineHeight: '10px', color: '#9E9E9E', fontSize: '12px', fontWeight: 400, textAlign: 'start' }}>Welcome</p>
                                    <p style={{ lineHeight: '0.2px', color: '#444444', fontSize: '16px', fontWeight: 400, textAlign: 'start', fontFamily: 'Poppins' }}>Chandan D</p>
                                </div>

                            </Col>

                            <Col offset={1}>
                                <div>
                                    <Input
                                        placeholder='Search...'
                                        suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        style={{ width: 425, height: 36, borderRadius: 8, backgroundColor: '#F2F2F2', borderColor: '#F2F2F2' }}
                                    />
                                </div>

                            </Col>


                            <Col span={2}>

                                <div style={{ height: '42px', width: '92px', marginTop: '15px', marginLeft: '16px' }}>
                                    <p style={{ lineHeight: '10px', color: '#9E9E9E', fontSize: '12px', fontWeight: 400, textAlign: 'end' }}>Monday</p> 
                                    <p style={{ lineHeight: '8px', color: '#444444', fontSize: '13.5px', fontWeight: 400, textAlign: 'end',fontStyle:'italic' }}>23 March 2024</p> 
                                </div>

                            </Col>
                            <Col >

                                <div style={{ height: '42px', width: '92px', marginTop: '15px', marginLeft: '16px' }}>
                                    <p style={{ lineHeight: '0.5px', color: '#9E9E9E', fontSize: '12px', fontWeight: 400, textAlign: 'start' }}>Viewing as</p>
                                    <p style={{ lineHeight: '0.5px', }}>
                                        <Select
                                            value={day}
                                            onChange={handleChange}
                                            displayEmpty
                                            style={{ height: '24px', backgroundColor: '#F2F2F2', width: '180px', fontSize: '12px', color: '#444444', borderRadius: '0px' }}
                                        >
                                            <MenuItem value="">
                                                <span style={{ fontSize: '12px', color: '#444444' }}>None</span>
                                            </MenuItem>
                                            <MenuItem value={10} style={{ fontSize: '12px', color: '#444444' }}>Ten</MenuItem>
                                            <MenuItem value={20} style={{ fontSize: '12px', color: '#444444' }}>Twenty</MenuItem>
                                            <MenuItem value={30} style={{ fontSize: '12px', color: '#444444' }}>Thirty</MenuItem>
                                        </Select>
                                    </p>
                                </div>

                            </Col>

                            <Col offset={2}>
                                <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#F2F2F2', position: 'relative',padding:'10px',marginTop: '15px', }}>
                                    <BellOutlined style={{ fontSize: 16, color: '#444444', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                                </div>
                                </Col>
                            <Col>
                                <div  >
                                   <ProfileMenu/>
                                </div>
                                </Col>

                        </Row>

                    </div>
                </Header>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed} width={170}>
                        <CustomSidebar />
                    </Sider>
                    <Content style={{background:bgcolor}}><HomePage /></Content>
                </Layout>
            </Layout>

        </div>
    );
};

export default PageContainer;