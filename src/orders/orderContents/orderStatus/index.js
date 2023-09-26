import React from "react";
import { Row, Col, Space } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from "@ant-design/icons";
import { Modal } from "antd";
import { Apple, Avacado } from '../../../assets';
import { CustomButton, Container, Tag, InputText, Text } from '../../../styledComponents';
import { useOrderStatusLogic } from './useOrderStatusLogic';

const OrderStatus = ({ item }) => {
  const {
   showModal,
   showEditModal,
   reasons,
   price,
   quantity,
   handleApproveItem,
   handleMissingItem,
   handleSelectReason,
   handleSendOrder,
   handleEditModalClose,
   setShowModal,
   setShowEditModal,
   setPrice,
   setQuantity,
   } = useOrderStatusLogic(item);

  const priceRef = React.useRef(null);
  const quantityRef = React.useRef(null);

  const { approved, missing, urgent, name } = item;

  const renderReasonsTag = () => {
    let priceChange = false,
      quantityChange = false,
      others = false,
      missingReason = false;
    (reasons || []).forEach((eachReason) => {
      if (eachReason === "Missing Product") missingReason = true;
      if (eachReason.includes("Quality")) quantityChange = true;
      if (eachReason.includes("Price")) priceChange = true;
      if (eachReason.includes("Other")) others = true;
    });
    if ((missing || missingReason) && !urgent) {
      return (
        <Tag primary dummy bgColor="#d97025">
          <Text small white dummy>
            Missing
          </Text>
        </Tag>
      );
    }
    if ((missing || missingReason) && urgent) {
      return (
        <Tag primary dummy bgColor="#d62436">
          <Text small white dummy>
            Missing - Urgent
          </Text>
        </Tag>
      );
    }
    if (others) {
      return (
        <Tag primary dummy bgColor="#21b056">
          <Text small white dummy>
            Others
          </Text>
        </Tag>
      );
    }
    if (priceChange && !quantityChange) {
      return (
        <Tag primary dummy bgColor="#21b056">
          <Text small white dummy>
            Price updated
          </Text>
        </Tag>
      );
    }
    if (!priceChange && quantityChange) {
      return (
        <Tag primary dummy bgColor="#21b056">
          <Text small white dummy>
            Quantity updated
          </Text>
        </Tag>
      );
    }
    if (priceChange && quantityChange) {
      return (
        <Tag primary dummy bgColor="#21b056">
          <Text small white dummy>
            Quantity and price updated
          </Text>
        </Tag>
      );
    }
    if (!others && !priceChange && !quantityChange && approved) {
      return (
        <Tag primary dummy bgColor="#21b056">
          <Text small white dummy>
            Approved
          </Text>
        </Tag>
      );
    }
  };

  return (
    <Container style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Row gutter={10}>
        <Col span={16}>{renderReasonsTag()}</Col>
        <Col span={8}>
          <Row justify={"end"}>
            <Space size={15}>
              <Text small primary lightgreen={approved} pointer>
                <CheckOutlined onClick={handleApproveItem} />
              </Text>
              <Text
                small
                primary
                pointer
                orange={missing}
                red={missing && urgent}
              >
                <CloseOutlined onClick={() => setShowModal(true)} />
              </Text>
              <Text
                small
                primary
                pointer
                onClick={() => setShowEditModal(true)}
              >
                Edit
              </Text>
            </Space>
          </Row>
        </Col>
      </Row>
      <Modal
        open={showModal}
        title="Missing product"
        onOk={() => {}}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={[
          <Text
            bold
            space
            pointer
            onClick={() => handleMissingItem(false)}
            border="0px"
          >
            No
          </Text>,
          <Text
            bold
            space
            pointer
            onClick={() => handleMissingItem(true)}
            border="0px"
          >
            Yes
          </Text>,
        ]}
      >
        <Text>Is "</Text>
        <Text bold>{item.name}</Text>
        <Text>" urgent ?</Text>
      </Modal>
      <Modal
        open={showEditModal}
        title={
          <Text ellipsis primary bold>
            {name}
          </Text>
        }
        onOk={() => {}}
        onCancel={() => {
          handleEditModalClose();
        }}
        footer={[
          <Text bold space pointer onClick={handleEditModalClose} border="0px">
            Cancel
          </Text>,
          <CustomButton
            primary
            bold
            space
            pointer
            onClick={handleSendOrder}
            border="0px"
          >
            Send
          </CustomButton>,
        ]}
      >
        <Row gutter={16}>
          <Col span={6}>
            <img
              src={item?.category === "fruit" ? Apple : Avacado}
              height="120"
              width="100"
            />
          </Col>
          <Col span={18}>
            <Row>
              <Col span={24}>
                <Container space>
                  <Row>
                    <Col span={10}>
                      <Text primary>Price ($)</Text>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={12}>
                      <InputText
                        type={"number"}
                        min={0}
                        forEdit
                        value={price}
                        ref={priceRef}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <Text> / {item.unit}</Text>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col span={24}>
                <Container space>
                  <Row>
                    <Col span={10}>
                      <Text primary>Quantity</Text>
                    </Col>
                    <Col span={2}>
                      <Container inputHandlerIcon>
                        <MinusCircleTwoTone
                          twoToneColor="#52c41a"
                          onClick={() => {
                            setQuantity(parseInt(quantity) - 1);
                          }}
                        />
                      </Container>
                    </Col>
                    <Col span={8}>
                      <Container inputHandlerIcon>
                        <InputText
                          type={"number"}
                          min={0}
                          forEdit
                          value={quantity}
                          ref={quantityRef}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                        &nbsp;
                        <PlusCircleTwoTone
                          twoToneColor="#52c41a"
                          onClick={() => {
                            setQuantity(parseInt(quantity) + 1);
                          }}
                        />
                      </Container>
                    </Col>
                    <Col span={4}>
                      <Text>*{item.unit}</Text>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col span={24}>
                <Container space>
                  <Row>
                    <Col span={10}>
                      <Text primary>Total</Text>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={12}>{(price * quantity).toFixed(3)}</Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Text bold primary>
              Choose reason
            </Text>
            <Text small> (Optional)</Text>
          </Col>
          <Col span={24}>
            <>
              {[
                "Missing Product",
                "Quality is not the same",
                "Price is not the same",
                "Other",
              ].map((reason) => {
                return (
                  <Tag
                    key={reason}
                    selectionTag
                    selected={(reasons || []).includes(reason)}
                    onClick={() => handleSelectReason(reason)}
                  >
                    {reason}
                  </Tag>
                );
              })}
            </>
          </Col>
        </Row>
      </Modal>
    </Container>
  );
};

export default OrderStatus;
