import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 2000,
  loan: 0,
};

const accountSlice = createSlice({
  initialState,
  name: "account",
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    loan(state, action) {
      if (state.loan > 0) return;
      if (state.loan === 0) {
        state.balance += action.payload;
        state.loan += action.payload;
      }
    },
    payLoan(state) {
      state.loan = 0;
    },
  },
});

export const { deposit, withdraw, loan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
