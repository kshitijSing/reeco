import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { CustomButton, Container, Text } from '../../styledComponents'; 
import { useOrderHeaderLogic } from './useOrderHeader'; 

const OrderHeader = (props) => {
  const {
    isLoading,
    handleApproveOrder,
    isOrderApproved,
    isOrdersLoading
   } = useOrderHeaderLogic();

  return (
    <>
      <Container
        titlebar
        bgwhite
        paddingTop
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        ref={props.titlebarRef}
      >
        <Container leaveMargin>
          <Row gutter={30}>
            <Col span={24} style={{textAlign: 'left'}}>
              <Space align="left">
                <Text pointer>Orders ＞</Text>
                <Text underline pointer>
                  Order 32457ABC
                </Text>
              </Space>
            </Col>
            <Col span={24} style={{textAlign: 'left'}}>
              <Container space>
                <Row>
                  <Col span={12}>
                    <Text primary bold heading>
                      Order 32457ABC
                    </Text>
                  </Col>
                  <Col span={12}>
                    {!isOrdersLoading && (
                      <Row gutter={30} justify={"end"}>
                        <Col>
                          <CustomButton>Back</CustomButton>
                        </Col>
                        <Col>
                          {!isOrderApproved && (
                            <CustomButton primary onClick={handleApproveOrder}>
                              {!!isLoading ? (
                                <Container>
                                  <LoadingOutlined />
                                </Container>
                              ) : (
                                "Approve order"
                              )}
                            </CustomButton>
                          )}
                        </Col>
                      </Row>
                    )}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default OrderHeader;
