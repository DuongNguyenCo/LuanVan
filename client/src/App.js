import { Routes, Route } from "react-router-dom";
import {
  Detail,
  Find,
  Home,
  List,
  Login,
  Register,
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
        <Route path={path.DETAIL} element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
