import { Link } from "react-router-dom";
import { Nav, Input, Button } from "../../../components";
import hinh from "../../../assets/image/logo.png";
function Listbusiness() {
  console.log("Listbusiness");
  return (
    <div className="w-1360 mx-auto">
      <Nav />
      <div className="w-8/12 mx-auto mt-24 mb-12 flex justify-around">
        <Input placeholder="Nhập tên công ty" className="w-9/12 " />
        <Button text="Tìm kiếm" className="w-2/12" />
      </div>
      <div className=" grid grid-cols-3 gap-4">
        <div className="w-full border p-4 ">
          <div className="w-full flex mb-2">
            <Link className="w-2/12">
              <div className="w-full h-full flex items-center">
                <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
              </div>
            </Link>
            <div className="w-9/12 ml-3">
              <p>tên Công ty</p>
              <p>địa chỉ</p>
            </div>
            <div className="w-1/12 text-center">0</div>
          </div>
          <div className="w-full">số lượng bài đăng</div>
        </div>
        <div className="w-full border p-4 ">
          <div className="w-full flex mb-2">
            <Link className="w-2/12">
              <div className="w-full h-full flex items-center">
                <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
              </div>
            </Link>
            <div className="w-9/12 ml-3">
              <p>tên Công ty</p>
              <p>địa chỉ</p>
            </div>
            <div className="w-1/12 text-center">0</div>
          </div>
          <div className="w-full">số lượng bài đăng</div>
        </div>
        <div className="w-full border p-4 ">
          <div className="w-full flex mb-2">
            <Link className="w-2/12">
              <div className="w-full h-full flex items-center">
                <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
              </div>
            </Link>
            <div className="w-9/12 ml-3">
              <p>tên Công ty</p>
              <p>địa chỉ</p>
            </div>
            <div className="w-1/12 text-center">0</div>
          </div>
          <div className="w-full">số lượng bài đăng</div>
        </div>
        <div className="w-full border p-4 ">
          <div className="w-full flex mb-2">
            <Link className="w-2/12">
              <div className="w-full h-full flex items-center">
                <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
              </div>
            </Link>
            <div className="w-9/12 ml-3">
              <p>tên Công ty</p>
              <p>địa chỉ</p>
            </div>
            <div className="w-1/12 text-center">0</div>
          </div>
          <div className="w-full">số lượng bài đăng</div>
        </div>
        <div className="w-full border p-4 ">
          <div className="w-full flex mb-2">
            <Link className="w-2/12">
              <div className="w-full h-full flex items-center">
                <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
              </div>
            </Link>
            <div className="w-9/12 ml-3">
              <p>tên Công ty</p>
              <p>địa chỉ</p>
            </div>
            <div className="w-1/12 text-center">0</div>
          </div>
          <div className="w-full">số lượng bài đăng</div>
        </div>
        <div className="w-full border p-4 ">
          <div className="w-full flex mb-2">
            <Link className="w-2/12">
              <div className="w-full h-full flex items-center">
                <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
              </div>
            </Link>
            <div className="w-9/12 ml-3">
              <p>tên Công ty</p>
              <p>địa chỉ</p>
            </div>
            <div className="w-1/12 text-center">0</div>
          </div>
          <div className="w-full">số lượng bài đăng</div>
        </div>
      </div>
    </div>
  );
}

export default Listbusiness;
