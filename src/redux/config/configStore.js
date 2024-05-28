import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "../slices/accountSlice";

const store = configureStore({
  reducer: {
    totalExpenses: accountSlice,
  },
});

export default store;
