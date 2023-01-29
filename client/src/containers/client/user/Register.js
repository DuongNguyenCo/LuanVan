import { Link } from "react-router-dom";
import { Button, Input, Nav } from "../../../components";
import { path } from "../../../utils/constant";

function Register() {
  console.log("Register");
  return (
    <div className="w-1360 h-screen flex  mx-auto">
      <Nav type="null" />
      <div className="border w-6/12 p-32">
        <p className="mb-5">Chào mừng đến với DNCJOB</p>
        <Button className="w-full h-10 " text="Đăng nhập với google" />
        <div className="align-center flex items-center mt-3 mb-1">
          <div className="h-1px w-full bg-slate-400"></div>
          <div className="mx-2 ">Hoặc</div>
          <div className="h-px w-full bg-slate-400"></div>
        </div>
        <Input label="Email" id="email" name="email" placeholder="Email" />
        <Input
          label="Mật khẩu"
          id="password"
          name="password"
          placeholder="Mật khẩu"
        />
        <Input
          label="Xác nhận mật khẩu"
          id="rePassword"
          name="rePassword"
          placeholder="Xác nhận mật khẩu"
        />
        <Button text="Đăng Ký" className="w-full h-10 my-3" />
        <p className="float-right">
          bạn đã có tài khoản? <Link to={path.LOGIN}>Đăng nhập!</Link>
        </p>
      </div>
      <div className="border w-6/12 py-40">
        <p>
          Sign in to get instant access to thousands of reviews and salary
          information
        </p>
        <p>View salary to help you negotiate your offer or pay rise</p>
        <p>Find out about benefits, interview, company culture via reviews</p>
        <p>Easy apply with only 1 click</p>
        <p>Manage your own profile & privacy</p>
      </div>
    </div>
  );
}

export default Register;
