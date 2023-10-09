import React from 'react';
import OrderHeader from './orderHeader';
import OrderSummary from './orderSummary';
import OrderContents from './orderContents';

const OrderPage = () => {
  return (
   <div>
    <OrderHeader />
    <OrderSummary />
    <OrderContents />
   </div>
  )
}

export default OrderPage;
