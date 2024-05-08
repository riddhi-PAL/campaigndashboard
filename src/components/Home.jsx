import React from 'react';
import { Button, Layout, Menu, theme, Row, Col, Input, Dropdown,Breadcrumb  } from 'antd';
import '../assests/global.css';
import { HomeOutlined,   } from '@ant-design/icons';
import SalesOverview from './SalesOverview';
const HomePage = () => {
    return (
        <>
            <div className='main-page'>
                <Row>
                    <Col span={24}><span className='main-heading'>Campaign Overview</span></Col>
                </Row>
                <Row justify='space-between'>
                    <Col ><span className='sub-heading'>A List of advertising campaigns</span></Col>
                    <Col  ><span className='breadcrumb'><Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: <HomeOutlined />,
                            },
                            {
                                title: 'Campaigns',
                            },
                            {
                                title: 'Campaign List',
                            },
                            
                        ]}
                    /></span></Col>
                </Row>
               <div>
                 <SalesOverview/>
               </div>
               {/* <div>
                 <SalesOverview/>
               </div> */}
                   

                

            </div>
        </>
    );
};

export default HomePage;