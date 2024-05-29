import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "../slices/expenseSlice";

const store = configureStore({
  reducer: {
    totalExpenses: accountSlice,
  },
});

export default store;
