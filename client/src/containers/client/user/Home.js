import { useEffect, useState } from "react";
import { Nav, Header, Divbusiness, Divjob } from "../../../components";
import { getBusiness } from "../../../store/apiRequests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleIncrease = () => {
    if (data.length > 0 && data.length === 4) setPage(page + 1);
  };
  const handleDeincrease = () => {
    if (page >= 2) setPage(page - 1);
  };

  useEffect(() => {
    const get = () => {
      getBusiness(setData, page);
    };
    get();
  }, [page]);

  return (
    <div className="w-1360 mx-auto">
      <Nav />
      <Header />
      <div className="flex flex-wrap w-1360 border border-sky-500">
        <div className="flex w-1360 mx-2 mt-3 mb-2">
          <p className="w-11/12 ">Nhà Tuyển Dụng Hàng Đầu</p>
          <p className="w-1/12 ">Xem Tất cả</p>
        </div>
        <div className="flex w-full">
          <div className="my-auto ml-2 h-full" onClick={handleDeincrease}>
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-full" />
          </div>
          <div className="w-full flex">
            {data &&
              data.map((data) => {
                return (
                  <Divbusiness
                    key={data.id}
                    name={data.name}
                    city={data.city}
                  />
                );
              })}
          </div>
          <div className="my-auto mr-2 h-full" onClick={handleIncrease}>
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-1360 border border-sky-500">
        <div className="flex w-1360 mx-2 mt-3 mb-2">
          <p className="w-11/12 ">Công việc mới nhất</p>
          <p className="w-1/12 ">Xem Tất cả</p>
        </div>
        <Divjob />
        <Divjob />
        <Divjob />
        <Divjob />
        <Divjob />
        <Divjob />
        <Divjob />
      </div>
    </div>
  );
}

export default Home;
