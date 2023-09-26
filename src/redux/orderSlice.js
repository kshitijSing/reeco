import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cart: [],
  supplier: '',
  shippingDate: '',
  department: '',
  status: '',
  loadingStatus: {},
  dataFetchedFor: {},
  isOrderApproved: false,
}

export const orderSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateLoadingStatus: (state, action) => {
      const { type, value } = action.payload
      state.loadingStatus[type] = value
    },
    updateDataFetchedFor: (state, action) => {
      const { type, value } = action.payload
      state.dataFetchedFor[type] = value
    },
    updateFetchedOrderDetails: (state, action) => {
      const { supplier, shippingDate, cart, department, status } = action.payload
      state.supplier = supplier
      state.shippingDate = shippingDate
      state.cart = cart
      state.department = department
      state.status = status
    },
    approveItem: (state, action) => {
      const { item: { uuid }, approved } = action.payload
      state.cart = state.cart.map(eachItem => {
        if (eachItem.uuid === uuid) {
          eachItem.approved = approved
          eachItem.missing = false
          eachItem.urgent = false
        }
        return eachItem
      })
    },
    updateMissingItem: (state, action) => {
      const { item: { uuid }, missing, urgent } = action.payload
      state.cart = state.cart.map(eachItem => {
        if (eachItem.uuid === uuid) {
          eachItem.missing = missing
          eachItem.urgent = urgent
          eachItem.approved = false
        }
        return eachItem
      })
    },
    updateCartAfterEdit: (state, action) => {
      const { item: { uuid }, price, quantity, reasons } = action.payload
      state.cart = state.cart.map(eachItem => {
        if (eachItem.uuid === uuid) {
          eachItem.price = price
          eachItem.quantity = quantity
          eachItem.reasons = reasons
          if (!reasons.includes('Missing Product')) eachItem.approved = true
        }
        return eachItem
      })
    },
    addProductsToCart: (state, action) => {
      const { products } = action.payload
      state.cart = [...state.cart, ...products.map(eachProduct => {
        eachProduct.missing = false
        eachProduct.urgent = false
        eachProduct.approved = true
        eachProduct.originalPrice = eachProduct.price
        eachProduct.originalQuantity = eachProduct.quantity
        return eachProduct
      })]
    },
    approveOrder: (state, action) => {
      state.status = 'Approved'
      state.isOrderApproved = true
    }
  },
})

export const { increment, decrement, incrementByAmount, updateLoadingStatus, updateDataFetchedFor, updateFetchedOrderDetails, approveItem, updateMissingItem, updateCartAfterEdit, addProductsToCart, approveOrder } = orderSlice.actions

export default orderSlice.reducer