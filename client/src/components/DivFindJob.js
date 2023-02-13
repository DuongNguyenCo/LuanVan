import { Link } from "react-router-dom";
import { path } from "../utils/constant";
import hinh from "../assets/image/logo.png";
function Divfindjob() {
  return (
    <div className="w-full">
      <Link to={path.DETAILJ}>
        <div className="w-full border p-4 ">
          <div className="w-full flex mb-2">
            <div className="w-2/12">
              <div className="w-full h-full flex items-center">
                <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
              </div>
            </div>
            <div className="w-9/12 ml-3">
              <p>Tên công việc</p>
              <p>tên công ty</p>
            </div>
            <div className="w-1/12 text-center">0</div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">location</div>
            <div className="w-full">salary</div>
            <div></div>
          </div>
          <div className="flex">cập nhật 3 giờ trước</div>
        </div>
      </Link>
    </div>
  );
}

export default Divfindjob;
