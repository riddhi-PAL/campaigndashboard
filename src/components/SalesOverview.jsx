import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import 'antd/dist/antd' ;
import '../assests/global.css';  
const SalesOverview = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12} >

          <Row className='cards'>
            <Col>
              <div className='icon-bg'>
                <img src="/PiggyBank.svg" alt="" />
              </div>
            </Col>
            <Col>
              <div className='header'>
                <p>Total Budget </p>
                 < span>$7900000</span>
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={12}  >
          <Row className='cards'>
            <Col>
              <div className='icon-bg'>
                <img src="/vaadin_money-exchange.svg" alt="" />
              </div>
            </Col>
            <Col>
              <div className='header'>
                <p>Total Liability</p>
                <span>$45000</span>
              </div>
            </Col>
          </Row>

        </Col>
        {/* <Col span={8}  >
          <Row className='cards'>
            <Col>
              <div className='icon-bg'>
              <img src="/trophy.svg" alt="" />
              </div>
            </Col>
            <Col>
              <div className='header'>
                <p>Total number of campaigns</p>
                <span>1350</span>
              </div>
            </Col>
          </Row>

        </Col> */}
      </Row>
    </div>
  );
};

export default SalesOverview;