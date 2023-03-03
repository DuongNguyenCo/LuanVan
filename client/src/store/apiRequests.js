import {
  registerload,
  registerSuccess,
  registerError,
  registerFailed,
} from "./userSlice";
import axios from "axios";
import { path } from "../utils/constant";

export const registerUser = async (user, dispatch, navigate, setErr) => {
  try {
    dispatch(registerload());
    const res = await axios.post("/api/user/create", user);
    console.log(res);
    if (res.data.errCode === 0) {
      dispatch(registerSuccess(res.data));
      navigate(path.HOME);
    } else {
      setErr(res.data.errMesssage);
      dispatch(registerFailed());
    }
  } catch (err) {
    dispatch(registerError());
  }
};
