import { Routes, Route } from "react-router-dom";
import {
  DetailJ,
  DetailB,
  Find,
  Home,
  List,
  Login,
  Register,
  Apply,
} from "./containers/client/user";
import { path } from "./utils/constant";
function App() {
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.FINDJOB} element={<Find />} />
        <Route path={path.LISTBUSINESS} element={<List />} />
        <Route path={path.DETAILJ} element={<DetailJ />} />
        <Route path={path.DETAILB} element={<DetailB />} />
        <Route path={path.APPLY} element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
