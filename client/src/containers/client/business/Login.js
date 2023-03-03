import { Link } from "react-router-dom";
import { Nav, Button, Input } from "../../../components";
// import { path } from "../../../utils/constant";

function Login() {

  
  return (
    <div className="w-1360 h-screen flex mx-auto 0">
      <Nav type="null" />
      <div className="border w-6/12 p-32 mx-auto">
        <p className="mb-5">Chào mừng bạn đã quay trở lại</p>
        <Input label="Email" id="email" name="email" placeholder="Email" />
        <Input
          label="Mật khẩu"
          id="password"
          name="password"
          placeholder="Mật khẩu"
        />
        <Button text="Đăng Nhập" className="w-full h-10 my-3" />
        <p className="float-right">
          Bạn chưa có tài khoản? <Link>Đăng ký!</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
