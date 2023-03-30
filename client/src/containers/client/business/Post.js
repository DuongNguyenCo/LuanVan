import { Button, Input, Nav } from "../../../components";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
  // getLanguage,
  // getTypeJob,
  // getAddress,
  createJob,
  getTest,
} from "../../../store/apiRequests";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  faPlusSquare,
  faPenToSquare,
  faRectangleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

function Post() {
  const init = {
    name: "",
    idTypeJob: "",
    idLanguage: [],
    salary: 0,
    quantity: 0,
    des: "",
    request: "",
    location: [],
  };

  const initAddress = {
    street: "",
    ward: "",
    district: "",
    city: "",
  };

  const languages = useSelector((state) => state.language.list);
  const typejobs = useSelector((state) => state.typejob.list);
  const addresses = useSelector((state) => state.address.list);
  const idBusiness = useSelector((state) => state.business.id);

  const configLanguage = languages.map((language) => {
    const newLanguages = {
      id: language.id,
      value: language.name,
      label: language.name,
    };
    return newLanguages;
  });

  const configTypeJob = typejobs.map((typejob) => {
    const newLanguages = {
      id: typejob.id,
      value: typejob.name,
      label: typejob.name,
    };
    return newLanguages;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [obj, setObj] = useState(init);
  const [address, setAddress] = useState(initAddress);

  const [display, setDisplay] = useState("hidden");
  const [step, setStep] = useState(1);
  const [option, setOption] = useState([]);

  const [des, setDes] = useState(14500);
  const [req, setReq] = useState(14500);
  const [desB, setDesB] = useState(10000);
  const [benefit, setBenefit] = useState(10000);
  const [countLocation, setCountLocation] = useState([1]);
  const [count, setCount] = useState(2);

  const [listAddress, setListAddress] = useState([]);
  const [location, setLocation] = useState([]);
  const [edit, setEdit] = useState(false);
  const handleDeletelistAddress = (key) => {
    const newListAddress = [...listAddress];
    const newArr = [...location];
    const e = newListAddress[key];
    const e1 = newArr[e.index];
    const newE = { ...e1, isDisable: false };
    newArr[e1.index] = newE;
    const a1 = newListAddress.splice(0, key);
    const a2 = newListAddress.splice(key === 0 ? 1 : key);
    setLocation(newArr);
    setListAddress(a1.concat(a2));
    setObj({ ...obj, location: a1.concat(a2) });
  };

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
    !display ? setDisplay("hidden") : setDisplay("");
  };

  const handleCreateAddress = () => {
    edit ? setEdit(!edit) : setEdit(!edit);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  edit
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      obj.name !== "" &&
      obj.idLanguage.length < 0 &&
      obj.idTypeJob !== "" &&
      obj.salary !== 0 &&
      obj.quantity !== 0 &&
      obj.des !== "" &&
      obj.request !== "" &&
      obj.location.length < 0
    ) {
      createJob(obj, dispatch, navigate);
      setStep(step + 1);
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const handleSubmit3 = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleAddNewAddress = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getTest(dispatch, idBusiness);
    // eslint-disable-next-line
  }, [idBusiness]);

  useEffect(() => {
    const configAddress = addresses.map((address, index) => {
      const newAddress = {
        index: index,
        id: address.id,
        value:
          address.street +
          " Phường " +
          address.ward +
          " Quận " +
          address.district +
          " Thành Phố " +
          address.city,
        label:
          address.street +
          " Phường " +
          address.ward +
          " Quận " +
          address.district +
          " Thành Phố " +
          address.city,
        isDisable: false,
      };
      return newAddress;
    });
    setLocation(configAddress);
  }, [addresses]);
  return (
    <div className="w-1360 mx-auto">
      {edit && (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-slate-900/50 z-20 flex justify-center items-center">
          <div className="w-2/5 bg-white p-14 z-30">
            <div className="w-full h-8">
              <FontAwesomeIcon
                icon={faRectangleXmark}
                className="h-full float-right"
                onClick={handleCreateAddress}
              />
            </div>
            <p className="text-center">Tạo địa chỉ làm việc</p>
            <form onSubmit={handleAddNewAddress}>
              <Input
                label="Đường"
                className="w-full mb-4"
                placeholder="Eg: 180 Cao lỗ"
                id="street"
                name="street"
                initValue={address}
                setValue={setAddress}
              />
              <Input
                label="Phường"
                className="w-full mb-4"
                placeholder="Eg: 14"
                id="ward"
                name="ward"
                initValue={address}
                setValue={setAddress}
              />
              <Input
                label="Quận"
                className="w-full mb-4"
                placeholder="Eg: 8"
                id="district"
                name="district"
                initValue={address}
                setValue={setAddress}
              />
              <Input
                label="Thành phố"
                className="w-full mb-4"
                placeholder="Eg: Thành phố Hồ Chí Minh"
                id="city"
                name="city"
                initValue={address}
                setValue={setAddress}
              />
              <div className="w-full mt-8 flex justify-center">
                <Button text="Thêm" className="h-10 w-1/5" />
              </div>
            </form>
          </div>
        </div>
      )}
      <Nav type="business" />

      <div className="mt-70 w-full">
        <div className="w-full h-70 pt-3 ">
          <ul className="flex justify-center h-full ">
            <li className="w-3/12 text-center my-auto">
              <span
                className={
                  (step === 1 ? "bg-stepActive " : "bg-step ") +
                  "inline-block w-30 h-30 rounded-full leading-30 "
                }
              >
                1
              </span>
              <p>Chỉnh sửa việc làm </p>
            </li>
            <li className="w-3/12 text-center my-auto">
              <span
                className={
                  (step === 2 ? "bg-stepActive " : "bg-step ") +
                  "inline-block w-30 h-30 rounded-full leading-30 "
                }
              >
                2
              </span>
              <p>Thiết lập quy trình tuyển dụng </p>
            </li>
            <li className="w-3/12 text-center my-auto">
              <span
                className={
                  (step === 3 ? "bg-stepActive " : "bg-step ") +
                  "inline-block w-30 h-30 rounded-full leading-30 "
                }
              >
                3
              </span>
              <p>Đăng tuyển dụng</p>
            </li>
          </ul>
        </div>
        <div>
          <form onSubmit={handleSubmit} className={step === 1 ? "" : "hidden"}>
            <div className=" my-5 mx-40  pb-11">
              <div className="w-full flex flex-wrap">
                <p className="mb-3">Mô tả công việc</p>
                <div className="w-full flex justify-between mb-5">
                  <Input
                    label="Tên Công việc"
                    className="w-full mr-10"
                    placeholder="Eg: Lập Trình viên Back-End"
                    id="name"
                    name="name"
                    setValue={setObj}
                    initValue={obj}
                  />
                  <div className="w-full ml-10">
                    <label className="mb-2 inline-block">Cấp bậc</label>
                    <Select
                      options={configTypeJob}
                      onChange={(e) => {
                        setObj({ ...obj, idTypeJob: e.id });
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between mb-5">
                  <div className="w-full mr-10">
                    <label className="mb-2 inline-block">
                      Ngôn ngữ lập trình
                    </label>
                    <Select
                      closeMenuOnSelect={false}
                      isMulti
                      options={configLanguage}
                      isOptionDisabled={() => option.length >= 3}
                      onChange={(e) => {
                        const list = e.map((a) => {
                          const b = {
                            id: a.id,
                          };
                          return b;
                        });
                        setObj({ ...obj, idLanguage: list });
                        setOption(e);
                      }}
                    />
                  </div>
                  <Input
                    label="Số lượng ứng tuyển"
                    className="w-full ml-10"
                    placeholder="Số lượng nhân viên tuyển cho công việc"
                    id="quantity"
                    name="quantity"
                    setValue={setObj}
                    initValue={obj}
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="address" className="mb-2 inline-block">
                    Địa chỉ
                  </label>
                  <div className="flex flex-wrap ">
                    {countLocation &&
                      countLocation.map((count, key) => {
                        return (
                          <div
                            key={count}
                            className="w-full max-h-10 flex mb-5"
                          >
                            <div className="w-11/12 ">
                              <Select
                                options={location}
                                isOptionDisabled={(option) => option.isDisable}
                                onChange={(e) => {
                                  const newArr = [
                                    ...listAddress,
                                    { id: e.id, index: e.index },
                                  ];
                                  const newE = { ...e, isDisable: true };
                                  const newArr1 = [...location];
                                  newArr1[e.index] = newE;
                                  setListAddress(newArr);
                                  setLocation(newArr1);
                                  setObj({ ...obj, location: newArr });
                                }}
                              />
                            </div>
                            <div
                              className="w-1/12 flex h-6 my-auto"
                              onClick={handleCreateAddress}
                            >
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="w-full h-full"
                              />
                            </div>
                            <div
                              className="w-1/12 flex h-6 my-auto"
                              onClick={() => {
                                if (countLocation.length > 1) {
                                  handleDeleteLocation(count);
                                  handleDeletelistAddress(key);
                                }
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
                        onClick={() => {
                          handleAddLocation();
                        }}
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
                      setObj({
                        ...obj,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    maxLength="14500"
                    rows="5"
                    placeholder="Mô tả về công việc"
                    className="border w-full p-1 mt-2"
                    name="des"
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
                      setObj({
                        ...obj,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    maxLength="14500"
                    rows="5"
                    placeholder="Yêu cầu cho công việc"
                    className="border w-full p-1 mt-2"
                    name="request"
                  ></textarea>
                  <div className="float-right">
                    {req} of 14500 characters remaining
                  </div>
                </div>
                <div className="w-full mb-5">
                  <Input
                    label="Mức lương"
                    placeholder="Mức lương tối thiểu"
                    id="salary"
                    name="salary"
                    setValue={setObj}
                    initValue={obj}
                  />
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
          </form>
          <div onSubmit={handleSubmit2} className={step === 2 ? "" : "hidden"}>
            <div className=" my-5 mx-40  pb-11">haha step 2</div>
            <div className=" w-1360 flex justify-center fixed bottom-0">
              <Button text="Lưu" className="w-20 h-10 mx-auto" />
            </div>
          </div>

          <div onSubmit={handleSubmit3} className={step === 3 ? "" : "hidden"}>
            <div className=" my-5 mx-40  pb-11">div 3</div>
            <div className=" w-1360 flex fixed bottom-0">
              <Button text="Lưu" className="w-20 h-10 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
