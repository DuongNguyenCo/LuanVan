import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "business",
  initialState: {
    isLogin: false,
    id: "",
    id_service: "",
    name: "",
    phone: "",
    email: "",
    des: "",
    benefit: "",
    url: "",
    street: "",
    ward: "",
    district: "",
    city: "",
    errMsg: "",
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.data.id;
      state.id_service = action.payload.data.id_service;
      state.name = action.payload.data.name;
      state.phone = action.payload.data.phone;
      state.email = action.payload.data.email;
      state.des = action.payload.data.des;
      state.benefit = action.payload.data.benefit;
      state.url = action.payload.data.url;
      state.street = action.payload.data.street;
      state.ward = action.payload.data.ward;
      state.district = action.payload.data.district;
      state.city = action.payload.data.city;
      state.errMsg = "";
    },
  },
});

export const { registerSuccess } = businessSlice.actions;
export default businessSlice.reducer;
