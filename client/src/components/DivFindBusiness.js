import { Link } from "react-router-dom";
import { path } from "../utils/constant";
import hinh from "../assets/image/logo.png";
function Divfindbusiness() {
  return (
    <Link to={path.DETAILB} className="w-full border p-4 ">
      <div className="w-full flex mb-2">
        <div className="w-2/12">
          <div className="w-full h-full flex items-center">
            <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
          </div>
        </div>
        <div className="w-9/12 ml-3">
          <p>tên Công ty</p>
          <p>địa chỉ</p>
        </div>
        <div className="w-1/12 text-center">0</div>
      </div>
      <div className="w-full">số lượng bài đăng</div>
    </Link>
  );
}

export default Divfindbusiness;
