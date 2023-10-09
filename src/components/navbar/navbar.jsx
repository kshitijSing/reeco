import React from "react";
import {Container, Text} from "../../styledComponents";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Navbar = (props) => {
  const cartLength = useSelector((state) => state.orders.cart.length);

  return (
    <>
      <Container primary>
        <Container navbar leaveMargin>
          <Row>
            <Col span={12}>
              <Row gutter={30}>
                <Col>
                  <Text white bold heading>
                    Reeco
                  </Text>
                </Col>
                {["Store", "Orders", "Analytics"].map((key, index) => (
                  <Col key={key}>
                    <Text white heading>
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
                    <Container>
                      <Text bold white heading>
                        <ShoppingCartOutlined />
                      </Text>
                      <Text white bold cartcount>
                        {cartLength}
                      </Text>
                    </Container>
                  </Col>
                  <Col>
                    <Container>
                      <Text white bold heading>{`Hello Shivali`}</Text>
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

export default Navbar;
