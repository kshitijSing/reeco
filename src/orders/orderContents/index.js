import { PrinterOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { Apple, Avacado } from "../../images";

import {
  Container,
  CustomButton,
  Table,
  TRow,
  TData,
  Text,
} from "../../styledComponents";
import OrderStatus from "./orderStatus";
import SearchBar from '../../components/searchBar/searchBar'
import { useOrderContentsLogic } from "./useOrderContents";

const OrderContents = (props) => {
  const { cart } = useOrderContentsLogic();

  return (
    <>
      <Container
        leaveMargin
        space
        paddingBottom
        marginTop
        paddingTop20
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Container border bgwhite paddingTop>
          <Container space leaveMargin="30px" white>
            <Row gutter={30}>
              <Col span={12}>
                <SearchBar />              
              </Col>
              <Col span={12}>
                <Container
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Row gutter={30} justify="end">
                    <Col>
                      <CustomButton>
                        Add item
                      </CustomButton>
                    </Col>
                    <Col>
                      <Text heading green pointer>
                        <PrinterOutlined />
                      </Text>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col span={24}>
                <Container
                  space
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Table>
                    <thead>
                      <TRow height>
                        <TData
                          borderTop
                          borderBottom
                          borderLeft
                          radius="top-left"
                          width={"5%"}
                        ></TData>
                        <TData space="2px" width={"30%"} borderTop borderBottom>
                          <Text>Product name</Text>
                        </TData>
                        <TData width={"10%"} borderTop borderBottom>
                          <Text>Brand</Text>
                        </TData>
                        <TData width={"10%"} borderTop borderBottom>
                          <Text>Price</Text>
                        </TData>
                        <TData width={"10%"} borderTop borderBottom>
                          <Text>Quantity</Text>
                        </TData>
                        <TData width={"10%"} borderTop borderBottom>
                          <Text>Total</Text>
                        </TData>
                        <TData
                          width={"25%"}
                          borderTop
                          borderBottom
                          radius="top-right"
                        >
                          <Text>Status</Text>
                        </TData>
                      </TRow>
                    </thead>
                    <tbody>
                      {(cart || []).map((item) => (
                        <TRow key={item.uuid} height7>
                          <TData width={"5%"} borderBottom>
                            <img
                              src={item?.category === "fruit" ? Apple : Avacado}
                              height="50"
                              width="50"
                              alt="fruits"
                            />
                          </TData>
                          <TData padingRight width={"30%"} borderBottom>
                            <Text primary>{item.name}</Text>
                          </TData>
                          <TData width={"10%"} borderBottom>
                            <Text primary>{item.brand}</Text>
                          </TData>
                          <TData width={"10%"} borderBottom>
                            <Text primary>{`$${item.price}/${item.unit}`}</Text>
                            <div>
                              {item.price !== item.originalPrice && (
                                <Text
                                  strike
                                  small
                                >{`$${item.originalPrice}`}</Text>
                              )}
                            </div>
                          </TData>
                          <TData width={"10%"} borderBottom>
                            <Text primary bold>
                              {item.quantity}
                            </Text>{" "}
                            * <Text primary>{item.unit}</Text>
                            <div>
                              {item.quantity !== item.originalQuantity && (
                                <Text
                                  strike
                                  small
                                >{`${item.originalQuantity}`}</Text>
                              )}
                            </div>
                          </TData>
                          <TData width={"10%"} borderBottom>
                            <Text primary>{`$${(
                              item.price * item.quantity
                            ).toFixed(2)}`}</Text>
                            {item.price * item.quantity !==
                              item.originalPrice * item.originalQuantity && (
                              <div>
                                {
                                  <Text strike small>{`$${(
                                    item.originalPrice * item.originalQuantity
                                  ).toFixed(2)}`}</Text>
                                }
                              </div>
                            )}
                          </TData>
                          <TData
                            width={"25%"}
                            borderBottom
                            // background="#f0f0f0"
                          >
                            <OrderStatus item={item} />
                          </TData>
                        </TRow>
                      ))}
                    </tbody>
                  </Table>
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default OrderContents;
