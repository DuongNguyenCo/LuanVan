import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    token: "",
  },
  reducers: {
    success: (state, action) => {
      state.isLogin = true;
      state.token = action.payload;
    },
    logoutUser: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.email = "";
    },
  },
});

export const { success, logoutUser } = authSlice.actions;
export default authSlice.reducer;
