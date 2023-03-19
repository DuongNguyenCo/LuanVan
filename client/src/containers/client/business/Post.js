import { Button, Input, Nav } from "../../../components";
import Select from "react-select";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
function Post() {
  const b = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla1", label: "Vanilla1" },
    { value: "vanilla2", label: "Vanilla2" },
  ];
  const [display, setDisplay] = useState("hidden");
  const [data, setData] = useState([]);
  const [des, setDes] = useState(14500);
  const [req, setReq] = useState(14500);
  const [desB, setDesB] = useState(10000);
  const [benefit, setBenefit] = useState(10000);
  const [countLocation, setCountLocation] = useState([1]);
  const [count, setCount] = useState(2);

  const handleAddLocation = () => {
    setCount(count + 1);
    const newArr = [...countLocation, count];
    setCountLocation(newArr);
  };

  const handleDeleteLocation = (key) => {
    const remove = [...countLocation].filter((location) => location !== key);
    setCountLocation(remove);
  };

  const handleDisplayBusiness = () => {
    console.log(!display);
    !display ? setDisplay("hidden") : setDisplay("");
  };

  return (
    <div className="w-1360 mx-auto">
      <Nav type="business" />
      <div className="mt-70 w-full">
        <div className="w-full h-70 pt-3 ">
          <ul className="flex justify-center h-full ">
            <li className="w-3/12 text-center my-auto">
              <span className="inline-block bg-red-500 w-30 h-30 rounded-full leading-30">
                1
              </span>
              <p>Chỉnh sửa việc làm </p>
            </li>
            <li className="w-3/12 text-center my-auto">
              <span className="inline-block bg-red-500 w-30 h-30 rounded-full leading-30">
                2
              </span>
              <p>Thiết lập quy trình tuyển dụng </p>
            </li>
            <li className="w-3/12 text-center my-auto">
              <span className="inline-block bg-red-500 w-30 h-30 rounded-full leading-30">
                3
              </span>
              <p>Đăng tuyển dụng</p>
            </li>
          </ul>
        </div>
        <div className="my-5 mx-40  pb-11">
          <div className="w-full flex flex-wrap">
            <p className="mb-3">Mô tả công việc</p>
            <div className="w-full flex justify-between mb-5">
              <Input
                label="Tên Công việc"
                className="w-full mr-10"
                placeholder="Eg: Lập Trình viên Back-End"
              />
              <div className="w-full ml-10">
                <label className="mb-2 inline-block">Cấp bậc</label>
                <Select options={b} />
              </div>
            </div>
            <div className="w-full flex justify-between mb-5">
              <div className="w-full mr-10">
                <label className="mb-2 inline-block">Ngôn ngữ lập trình</label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  options={b}
                  isOptionDisabled={() => data.length >= 3}
                  onChange={(e) => setData(e)}
                />
              </div>
              <Input
                label="Số lượng ứng tuyển"
                className="w-full ml-10"
                placeholder="Số lượng nhân viên tuyển cho công việc"
              />
            </div>
            <div className="w-full ">
              <label className="mb-2 inline-block">Địa chỉ</label>
              <div className="flex flex-wrap ">
                {countLocation &&
                  countLocation.map((count) => {
                    return (
                      <div key={count} className="w-full max-h-10 flex mb-5">
                        <div className="w-11/12 ">
                          <Input
                            className=" w-full h-full "
                            placeholder="Địa chỉ"
                          />
                        </div>
                        <div
                          className="w-1/12 h-6 my-auto"
                          onClick={() => {
                            if (countLocation.length > 1)
                              handleDeleteLocation(count);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                {countLocation && countLocation.length < 3 && (
                  <div
                    className="w-full max-h-10 flex mb-5 border-dotted border-2 border-sky-500 rounded-md"
                    onClick={handleAddLocation}
                  >
                    <div className="h-full w-10 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="h-full leading-9">Thêm địa chỉ mới</div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full mb-5">
              <label>Mô Tả</label>
              <textarea
                onChange={(e) => {
                  setDes(14500 - e.target.value.length);
                }}
                maxLength="14500"
                rows="5"
                placeholder="Mô tả về công việc"
                className="border w-full p-1 mt-2"
              ></textarea>
              <div className="float-right">
                {des} of 14500 characters remaining
              </div>
            </div>
            <div className="w-full mb-5">
              <label className=" ">Yêu cầu</label>
              <textarea
                onChange={(e) => {
                  setReq(14500 - e.target.value.length);
                }}
                maxLength="14500"
                rows="5"
                placeholder="Yêu cầu cho công việc"
                className="border w-full p-1 mt-2"
              ></textarea>
              <div className="float-right">
                {req} of 14500 characters remaining
              </div>
            </div>
            <div className="w-full mb-5">
              <Input label="Mức lương" placeholder="Mức lương tối thiểu" />
            </div>
            <div className="w-full mb-5">
              <Input
                label="Địa chỉ mail nhận hồ sơ"
                placeholder="Eg : hr@dncjob.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <p className="mb-3" onClick={handleDisplayBusiness}>
              Thông tin công ty
            </p>
            <div className={"w-full flex flex-wrap " + display}>
              <div className="w-full mb-5">
                <Input label="Tên Công Ty" placeholder="Eg: DNCBusiness" />
              </div>
              <div className="w-full mb-5">
                <Input
                  label="Địa chỉ công ty"
                  placeholder="Eg: 180 Cao Lo, Phuong 4, Quan 8, TP. Ho Chi Minh"
                />
              </div>
              <div className="w-full mb-5">
                <label>Thông Tin Công Ty</label>
                <textarea
                  onChange={(e) => {
                    setDesB(10000 - e.target.value.length);
                  }}
                  maxLength="10000"
                  rows="5"
                  placeholder="Thông tin Công Ty"
                  className="border w-full p-1 mt-2"
                ></textarea>
                <div className="float-right">
                  {desB} of 10000 characters remaining
                </div>
              </div>
              <div className="w-full mb-5">
                <label>Phúc lợi</label>
                <textarea
                  onChange={(e) => {
                    setBenefit(10000 - e.target.value.length);
                  }}
                  maxLength="10000"
                  rows="5"
                  placeholder="Phúc lợi khi tham gia công ty"
                  className="border w-full p-1 mt-2"
                ></textarea>
                <div className="float-right">
                  {benefit} of 10000 characters remaining
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1360 flex fixed bottom-0">
          <Button text="Lưu" className="w-20 h-10 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Post;
