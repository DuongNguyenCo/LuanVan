import { registerSuccess } from "./userSlice";
import { loading, error, success } from "./checkSilce";
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

export const getBusiness = async (setData, page = 1) => {
  try {
    const data = await axios.get(`/api/business/get-all?page=${page}`);
    if (data.data.errCode === 0) {
      setData(data.data.data);
    }
  } catch (err) {}
};
