import { createSlice } from "@reduxjs/toolkit";

export const userSlile = createSlice({
  name: "user",
  initialState: {
    candidate: null,
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.candidate = action.payload;
    },
    logoutUser: (state) => {
      state.candidate = null;
    },
  },
});

export const { registerSuccess, logoutUser } = userSlile.actions;
export default userSlile.reducer;
