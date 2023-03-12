import { createSlice } from "@reduxjs/toolkit";

export const checkSlice = createSlice({
  name: "check",
  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    success: (state) => {
      state.loading = false;
    },
    error: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { loading, error, success } = checkSlice.actions;
export default checkSlice.reducer;
