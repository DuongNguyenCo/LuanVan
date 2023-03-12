import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./userSlice";
import checkReduce from "./checkSilce";

export default configureStore({
  reducer: {
    user: userReduce,
    check: checkReduce,
  },
});
