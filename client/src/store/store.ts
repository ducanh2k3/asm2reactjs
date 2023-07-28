// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "../reducers/ordersSlice";
// Create the Redux store
const store = configureStore({
  reducer: {
    orders: ordersSlice,
    // Add more reducers here if you have additional state properties
  },
});

export default store;
