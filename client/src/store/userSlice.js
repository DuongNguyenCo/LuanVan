import { createSlice } from "@reduxjs/toolkit";

export const userSlile = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: false,
    isLogin: false,
    first_name: "",
    last_name: "",
    email: "",
    errMsg: "",
  },
  reducers: {
    registerload: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.isLogin = true;
      state.first_name = action.payload.data.first_name;
      state.last_name = action.payload.data.last_name;
      state.email = action.payload.data.email;
      state.errMsg = "";
    },
    registerError: (state) => {
      state.loading = false;
      state.error = true;
    },
    registerFailed: (state) => {
      state.loading = false;
    },
  },
});

export const { registerload, registerSuccess, registerError, registerFailed } =
  userSlile.actions;
export default userSlile.reducer;
