import React from "react";
import {Container, Text} from "../../styledComponents";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = (props) => {
  const cartLength = useSelector((state) => state.orders.cart.length);

  return (
    <>
      <Container primary>
        <Container navbar leaveMargin>
          <Row>
            <Col span={12}>
              <Row gutter={30}>
                <Col>
                  <Text white bold>
                    Reeco
                  </Text>
                </Col>
                {["Store", "Orders", "Analytics"].map((key, index) => (
                  <Col key={key}>
                    <Text
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      white
                    >
                      {key}
                    </Text>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={12}>
              <Container>
                <Row gutter={30} justify={"end"}>
                  <Col>
                    <Container
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Text bold white heading>
                        <ShoppingCartOutlined />
                      </Text>
                      <Text white bold cartcount>
                        {cartLength}
                      </Text>
                    </Container>
                  </Col>
                  <Col>
                    <Container
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Text white="true" bold="true">{`Hello Jennifer`}</Text>
                    </Container>
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

export default Header;