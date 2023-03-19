import { Link } from "react-router-dom";
import { path } from "../utils/constant";
import img from "../assets/image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { loading } from "../store/checkSilce";

function Nav(prop) {
  const { isLogin, last_name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loading());
    dispatch(logoutUser());
  };
  return (
    <nav className="h-70 w-1360 flex border border-sky-500 fixed top-0 bg-red-500 z-10">
      <Link to={path.HOME}>
        <img className="h-full" src={img} alt="logo cong ty" />
      </Link>
      {prop.type === "null" ? null : prop.type === "business" ? (
        <div className="flex justify-between w-full">
          <div className="flex w-6/12">
            <Link to={path.BUSINESS}>
              <div className="leading-70 px-2">Dashboard</div>
            </Link>
            <Link to={path.BJOB}>
              <div className="leading-70 px-2">Việc làm</div>
            </Link>
            <Link to={path.BCANDIDATE}>
              <div className="leading-70 px-2">Ứng viên</div>
            </Link>
            <Link to={path.BRECEIPT}>
              <div className="leading-70 px-2">Đơn hàng</div>
            </Link>
          </div>

          <div className="flex justify-end w-6/12">
            <Link to={path.BPOST}>
              <div className="leading-70 px-2">Đăng tin tuyển dụng</div>
            </Link>
            <Link>
              <div className="leading-70 px-2">Tìm ứng viên</div>
            </Link>
            <Link>
              <div className="leading-70 px-2">info</div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between w-full">
          <div className="flex w-6/12">
            <Link to={path.FINDJOB}>
              <div className="leading-70 px-2">TÌM VIỆC LÀM</div>
            </Link>
            <Link to={path.LISTBUSINESS}>
              <div className="leading-70 px-2">DANH SÁCH CÔNG TY</div>
            </Link>
          </div>
          <div className="flex justify-end w-6/12">
            <Link to={path.BLOGIN}>
              <div className="leading-70 px-2">DÀNH CHO NHÀ TUYỂN DỤNG</div>
            </Link>
            {isLogin ? (
              <div className="leading-70 px-2 relative group cursor-pointer">
                Chào {last_name} !
                <div className="absolute px-2 w-full hidden group-hover:block">
                  <p className="h-10 leading-10 cursor-pointer">Thông tin</p>
                  <p className="h-10 leading-10 cursor-pointer">Hoạt động</p>
                  <p className="h-10 leading-10 cursor-pointer">Quản lý CV</p>
                  <p
                    className="h-10 leading-10 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </p>
                </div>
              </div>
            ) : (
              <Link to={path.LOGIN} className="leading-70 px-2 ">
                ĐĂNG NHẬP
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
