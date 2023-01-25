import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./containers/client/user";
import { path } from "./utils/constant";
function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
