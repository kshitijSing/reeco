import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDataFetchedFor,
  updateFetchedOrderDetails,
  updateLoadingStatus,
} from "../../redux/orderSlice";
import { fetchOrderDetails } from "../../utils/fetchOrderDetails";

export const useOrderContentsLogic = () => {
  const unfilteredCart = useSelector((state) => state.orders.cart);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    updateFilteredCart();
  }, [unfilteredCart]);

  const updateFilteredCart = (value) => {
    let text = typeof value === "string" ? value : searchText;
    if (!text.length) {
      setCart(unfilteredCart);
      return;
    }
    setCart(
      unfilteredCart.filter((item) => {
        return (
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.brand.toLowerCase().includes(text.toLowerCase())
        );
      })
    );
  };

  useEffect(() => {
    async function fetchData() {
      dispatch(updateLoadingStatus({ type: "orderDetails", value: true }));
      const response = await fetchOrderDetails();
      dispatch(updateLoadingStatus({ type: "orderDetails", value: false }));
      dispatch(updateDataFetchedFor({ type: "orderDetails", value: true }));
      dispatch(updateFetchedOrderDetails(response));
    }
    fetchData();
  }, []);

  return {
    unfilteredCart,
    searchText,
    cart,
    showModal,
    updateFilteredCart,
    setSearchText,
    setShowModal,
  };
};
