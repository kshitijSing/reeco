import React from "react";
import { useDispatch } from "react-redux";
import {
  approveItem,
  updateCartAfterEdit,
  updateMissingItem,
} from "../../../redux/orderSlice";

export const useOrderStatusLogic = (item) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [reasons, setReasons] = React.useState(item.reasons || []);
  const [price, setPrice] = React.useState(item.price || 0);
  const [quantity, setQuantity] = React.useState(item.quantity || 0);
  const dispatch = useDispatch();


  const { approved, missing, urgent } = item;

  const handleApproveItem = () => {
    dispatch(approveItem({ item, approved: !approved }));
  };

  const handleMissingItem = (urgent) => {
    dispatch(updateMissingItem({ item, missing: !missing, urgent: urgent }));
    setShowModal(false);
  };

  const handleSelectReason = (reason) => {
    if (reasons.includes(reason)) {
      setReasons(reasons.filter((r) => r !== reason));
      return;
    }
    setReasons([...reasons, reason]);
  };

  const handleSendOrder = () => {
    dispatch(updateCartAfterEdit({ item, price, quantity, reasons }));
    setShowEditModal(false);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setReasons(item.reasons || []);
    setPrice(item.price);
    setQuantity(item.quantity);
  };

  return {
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
  }
}