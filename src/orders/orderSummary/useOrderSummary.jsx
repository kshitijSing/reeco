
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPriceAfterOffer } from "../../utils/getPriceAfterOffer";

export const useOrderSummaryLogic =  () => {
  const cart = useSelector((state) => state.orders.cart);
  const supplier = useSelector((state) => state.orders.supplier);
  const shippingDate = useSelector((state) => state.orders.shippingDate);
  const department = useSelector((state) => state.orders.department);
  const status = useSelector((state) => state.orders.status);
  const isLoading = useSelector(
    (state) => state.orders.loadingStatus.orderDetails
  );
  const isOrderApproved = useSelector((state) => state.orders.isOrderApproved);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += getPriceAfterOffer(item.price, item.offer) * item.quantity;
    });
    setTotal(`$${sum.toFixed(2)}`);
  }, [cart]);

  return {
  supplier,
  shippingDate,
  department,
  status,
  isLoading,
  isOrderApproved,
  total,
  }
}