import {
    FullscreenExitOutlined,
    RadarChartOutlined,
    FullscreenOutlined,
    AppleOutlined,
    GlobalOutlined,
  } from "@ant-design/icons";
  import { Row, Space, Col } from "antd";
  import { motion } from "framer-motion";
  import React from "react";
  import {Container, Text} from "../../styledComponents";
  import { useOrderSummaryLogic } from './useOrderSummary';
  
  const OrderSummary = (props) => {
    const {
    supplier,
    shippingDate,
    department,
    status,
    total,
     } = useOrderSummaryLogic();
  
    return (
      <Container
        leaveMargin
        paddingTop20
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <Container border bgwhite>
          <Container space leaveMargin={"30px"}>
            <Row gutter={10} style={{height: '80px', alignItems: 'center'}}>
              <Col span={4}>
                <Container
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Col>
                    <Text small>Supplier</Text>
                  </Col>
                    <Col>
                      <Text bold primary>
                        {supplier}
                      </Text>
                    </Col>
                </Container>
              </Col>
              <Col span={4} style={{borderLeft: '1px solid lightGrey'}}>
                <Container
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                >
                  <Col>
                    <Text small>Shipping date</Text>
                  </Col>
                    <Col>
                      <Text bold primary>
                        {shippingDate}
                      </Text>
                    </Col>
                 
                </Container>
              </Col>
              <Col span={4} style={{borderLeft: '1px solid lightGrey'}}>
                <Container
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Col>
                    <Text small>Total</Text>
                  </Col>
                    <Col>
                      <Text bold primary>
                        {total}
                      </Text>
                    </Col>
                
                </Container>
              </Col>
              <Col span={4} style={{borderLeft: '1px solid lightGrey'}}>
                <Container
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  <Col>
                    <Text small>Category</Text>
                  </Col>
                    <Col>
                      <Space>
                        <Text bold primary>
                          <FullscreenOutlined />
                        </Text>
                        <Text bold primary>
                          <RadarChartOutlined />
                        </Text>
                        <Text bold primary>
                          <AppleOutlined />
                        </Text>
                        <Text bold primary>
                          <GlobalOutlined />
                        </Text>
                        <Text bold primary>
                          <FullscreenExitOutlined />
                        </Text>
                        
                      </Space>
                    </Col>
                </Container>
              </Col>
              <Col span={4} style={{borderLeft: '1px solid lightGrey'}}>
                <Container
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Col>
                    <Text small>Department</Text>
                  </Col>
                    <Col>
                      <Text bold primary>
                        {department}
                      </Text>
                    </Col>
                
                </Container>
              </Col>
              <Col span={4} style={{borderLeft: '1px solid lightGrey'}}>
                <Container
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                >
                  <Col>
                    <Text small>Status</Text>
                  </Col>
                    <Col>
                      <Text bold primary green={true}>
                        {status}
                      </Text>
                    </Col>
                
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    );
  };
  
  export default OrderSummary;
  