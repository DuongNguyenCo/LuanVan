import { Link } from "react-router-dom";
import { Button, Input, Nav } from "../../../components";
import hinh from "../../../assets/image/logo.png";
import { path } from "../../../utils/constant";

function Findjob() {
  console.log("Findjob");
  return (
    <div className="w-1360 mx-auto">
      <Nav />
      <div className="flex mt-70 py-5 px-2">
        <Input
          id="search"
          placeholder="Tìm kiếm công việc theo kỹ năng, công ty, tên công việc"
          name="search"
          className="w-8/12 mr-3"
        />
        <Input
          id="location"
          placeholder="địa điểm"
          name="location"
          className="w-4/12 mr-3"
        />
        <Button text="TÌM KIẾM" className="w-2/12" />
      </div>
      <div className="flex">
        <div className="w-3/12 pr-10">
          <div>
            <p>Cấp bậc</p>
            <select className="w-full  h-10 border">
              <option>cap1</option>
              <option>cap2</option>
              <option>cap3</option>
              <option>cap4</option>
              <option>cap5</option>
            </select>
          </div>
          <div>
            <p>Lương</p>
            <select className="w-full h-10 border">
              <option>10000</option>
              <option>20000</option>
              <option>30000</option>
              <option>40000</option>
              <option>50000</option>
            </select>
          </div>
          <div>
            <p>Ngôn ngữ lập trình</p>
            <select className="w-full h-10 border">
              <option>Java</option>
              <option>Javascript</option>
              <option>Python</option>
              <option>Ruby</option>
              <option>C++</option>
            </select>
          </div>
          <div className="flex flex-wrap">
            <p>Cập nhập lần cuối</p>
            <div className="ml-5 w-full">
              <input type="radio" name="time" /> 24 giờ trước
            </div>
            <div className="ml-5 w-full">
              <input type="radio" name="time" /> Tuần trước
            </div>
            <div className="ml-5 w-full">
              <input type="radio" name="time" /> Tháng trước
            </div>
            <div className="ml-5 w-full">
              <input type="radio" name="time" /> Bất cứ lúc nào
            </div>
          </div>
        </div>
        <div className="w-9/12 grid grid-cols-2 gap-4">
          <Link to={path.DETAIL}>
            <div className="w-full border p-4 ">
              <div className="w-full flex mb-2">
                <Link className="w-2/12">
                  <div className="w-full h-full flex items-center">
                    <img
                      src={hinh}
                      alt="hinh"
                      className="w-auto h-fit mx-auto"
                    />
                  </div>
                </Link>
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
          <div className="w-full border p-4 ">
            <div className="w-full flex mb-2">
              <Link className="w-2/12">
                <div className="w-full h-full flex items-center">
                  <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
                </div>
              </Link>
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
          <div className="w-full border p-4 ">
            <div className="w-full flex mb-2">
              <Link className="w-2/12">
                <div className="w-full h-full flex items-center">
                  <img src={hinh} alt="hinh" className="w-auto h-fit mx-auto" />
                </div>
              </Link>
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
        </div>
      </div>
    </div>
  );
}

export default Findjob;
