import { Link } from "react-router-dom";
import { path } from "../utils/constant";
import img from "../assets/image/logo.png";

function Nav() {
  console.log("nav");
  return (
    <nav className="h-70 w-1360 flex border border-sky-500 fixed top-0">
      <Link to={path.HOME}>
        <img className="h-full" src={img} alt="logo cong ty" />
      </Link>
      <div className="flex justify-between w-full">
        <div className="flex w-6/12">
          <div className="leading-70 px-2">TÌM VIỆC LÀM</div>
          <div className="leading-70 px-2">DANH SÁCH CÔNG TY</div>
        </div>
        <div className="flex justify-end w-6/12">
          <div className="leading-70 px-2">DÀNH CHO NHÀ TUYỂN DỤNG</div>
          <Link to={path.LOGIN} className="leading-70 px-2 ">
            ĐĂNG NHẬP
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
