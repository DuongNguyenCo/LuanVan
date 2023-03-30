import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./userSlice";
import busiReduce from "./businessSlice";
import checkReduce from "./checkSilce";
import languegeReduce from "./LanguageSlice";
import typejobSlice from "./typejobSlice";
import addressReduce from "./addressSlice";

export default configureStore({
  reducer: {
    user: userReduce,
    check: checkReduce,
    language: languegeReduce,
    typejob: typejobSlice,
    business: busiReduce,
    address: addressReduce,
  },
});
