import { createSlice } from "@reduxjs/toolkit";

export const userSlile = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    first_name: "",
    last_name: "",
    email: "",
    errMsg: "",
  },
  reducers: {
    registerSuccess: (state, action) => {
      console.log("redux", action.payload);
      state.isLogin = true;
      state.first_name = action.payload.data.first_name;
      state.last_name = action.payload.data.last_name;
      state.email = action.payload.data.email;
      state.errMsg = "";
    },
    logoutUser: (state) => {
      state.isLogin = false;
      state.first_name = "";
      state.last_name = "";
      state.email = "";
    },
  },
});

export const { registerSuccess, logoutUser } = userSlile.actions;
export default userSlile.reducer;
