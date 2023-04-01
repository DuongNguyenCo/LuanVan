import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "business",
  initialState: {
    business: null,
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.business = action.payload;
    },
  },
});

export const { registerSuccess } = businessSlice.actions;
export default businessSlice.reducer;
