import { Routes, Route } from "react-router-dom";
import {
  DetailJ,
  DetailB,
  Find,
  HomeC,
  List,
  Login,
  Register,
  Apply,
} from "./containers/client/user";
import {
  HomeB,
  LoginB,
  JobB,
  Receipt,
  CandidateB,
} from "./containers/client/business";
import { path } from "./utils/constant";
function App() {
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path={path.HOME} element={<HomeC />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.FINDJOB} element={<Find />} />
        <Route path={path.LISTBUSINESS} element={<List />} />
        <Route path={path.DETAILJ} element={<DetailJ />} />
        <Route path={path.DETAILB} element={<DetailB />} />
        <Route path={path.APPLY} element={<Apply />} />

        <Route path={path.BUSINESS} element={<HomeB />} />
        <Route path={path.BLOGIN} element={<LoginB />} />
        <Route path={path.BJOB} element={<JobB />} />
        <Route path={path.BRECEIPT} element={<Receipt />} />
        <Route path={path.BCANDIDATE} element={<CandidateB />} />
      </Routes>
    </div>
  );
}

export default App;
