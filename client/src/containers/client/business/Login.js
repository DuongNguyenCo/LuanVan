import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Button, Input } from "../../../components";
import { path } from "../../../utils/constant";
// import { path } from "../../../utils/constant";
import { loginBusiness } from "../../../store/apiRequests";
import { useDispatch } from "react-redux";

function Login() {
  const init = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [obj, setObj] = useState(init);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginBusiness(obj, dispatch, navigate);
  };
  return (
    <div className="w-1360 h-screen flex mx-auto">
      <Nav type="null" />
      <div className="border w-6/12 p-32 mx-auto">
        <p className="mb-5">Chào mừng bạn đã quay trở lại</p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            setValue={setObj}
            initValue={obj}
          />
          <Input
            label="Mật khẩu"
            type="password"
            id="password"
            name="password"
            placeholder="Mật khẩu"
            setValue={setObj}
            initValue={obj}
          />
          <Button text="Đăng Nhập" className="w-full h-10 my-3" />
        </form>
        <p className="float-right">
          Bạn chưa có tài khoản? <Link to={path.BREGISTER}>Đăng ký!</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
