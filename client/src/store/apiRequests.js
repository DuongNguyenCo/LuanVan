import { registerSuccess } from "./userSlice";
import { registerSuccess as registerB } from "./businessSlice";
import { loading, error, success } from "./checkSilce";
import { setListLanguage } from "./LanguageSlice";
import { setTypejob } from "./typejobSlice";
import { setListAddress } from "./addressSlice";
import axios from "axios";
import { path } from "../utils/constant";

export const registerUser = async (user, dispatch, navigate, setErr) => {
  try {
    dispatch(loading());
    const res = await axios.post("/api/user/create", user);
    if (res.data.errCode === 0) {
      console.log("axios", res.data);
      dispatch(success());
      dispatch(registerSuccess(res.data));
      navigate(path.HOME);
    } else {
      setErr(res.data.errMessage);
      dispatch(success());
    }
  } catch (err) {
    dispatch(error());
  }
};

export const loginUSer = async (user, dispatch, navigate, setErr) => {
  try {
    dispatch(loading());
    const res = await axios.post("/api/user/login", user);
    if (res.data.errCode === 0) {
      dispatch(success());
      dispatch(registerSuccess(res.data));
      navigate(path.HOME);
    } else {
      setErr(res.data.errMessage);
      dispatch(success());
    }
  } catch (err) {
    dispatch(error());
  }
};

export const registerBusiness = async (busi, dispatch, navigate, setErr) => {
  try {
    dispatch(loading());
    const res = await axios.post("/api/business/create", busi);
    if (res.data.errCode === 0) {
      dispatch(success());
      dispatch(registerB(res.data));
      navigate(path.BUSINESS);
    } else {
      setErr(res.data.errMessage);
      dispatch(success());
    }
  } catch (err) {
    dispatch(error());
  }
};
export const loginBusiness = async (business, dispatch, navigate, setErr) => {
  try {
    dispatch(loading());
    const res = await axios.post("/api/business/login", business);
    if (res.data.errCode === 0) {
      dispatch(success());
      dispatch(registerB(res.data));
      navigate(path.BUSINESS);
    } else {
      setErr(res.data.errMessage);
      dispatch(success());
    }
  } catch (err) {
    dispatch(error());
  }
};

export const createAddressJob = async (address, dispatch, setErr) => {
  try {
    dispatch(loading());
    const res = await axios.post("/api/business/create", address);
    if (res.data.errCode === 0) {
    } else {
      setErr(res.data.errMessage);
      dispatch(success());
    }
  } catch (err) {
    dispatch(error());
  }
};

export const getBusiness = async (setData, page = 1) => {
  try {
    const data = await axios.get(`/api/business/get-all?page=${page}`);
    if (data.data.errCode === 0) {
      setData(data.data.data);
    }
  } catch (err) {}
};

export const getLanguage = async (dispatch) => {
  try {
    const data = await axios.get(`/api/language/get-all`);
    if (data.data.errCode === 0) {
      dispatch(setListLanguage(data.data.data));
    }
  } catch (err) {
    dispatch(error());
  }
};

export const getAddress = async (id, dispatch) => {
  try {
    const data = await axios.get(`/api/address/get-all/${id}`);
    if (data.data.errCode === 0) {
      dispatch(setListAddress(data.data.data));
    }
  } catch (err) {
    dispatch(error());
  }
};

export const getTypeJob = async (dispatch) => {
  try {
    const data = await axios.get(`/api/type-job/get-all`);
    if (data.data.errCode === 0) {
      dispatch(setTypejob(data.data.data));
    }
  } catch (err) {
    dispatch(error());
  }
};

export const getTest = async (dispatch, idBusiness) => {
  try {
    // console.log(idBusiness);
    const data = await axios.get(`/api/type-job/get-all`);
    const data1 = await axios.get(`/api/address/get-all/${idBusiness}`);
    const data2 = await axios.get(`/api/language/get-all`);
    if (data2.data.errCode === 0) {
      dispatch(setListLanguage(data2.data.data));
    }
    if (data1.data.errCode === 0) {
      dispatch(setListAddress(data1.data.data));
    }
    if (data.data.errCode === 0) {
      dispatch(setTypejob(data.data.data));
    }
  } catch (err) {
    dispatch(error());
  }
};

export const createJob = async (job, dispatch, navigate) => {
  try {
    const data = await axios.post(`/api/job/create`, job);
    console.log(data);
  } catch (err) {
    dispatch(error());
  }
};
