import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "business",
  initialState: {
    list: [],
  },
  reducers: {
    setListAddress: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setListAddress } = addressSlice.actions;
export default addressSlice.reducer;
