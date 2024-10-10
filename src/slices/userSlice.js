import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
