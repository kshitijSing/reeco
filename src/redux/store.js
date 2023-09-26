import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './orderSlice'

export const store = configureStore({
  reducer: {
    orders : orderSlice
  },
})
