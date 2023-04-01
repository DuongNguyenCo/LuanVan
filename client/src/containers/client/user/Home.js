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
    if (data.length > 0 && data.length === 5) setPage(page + 1);
  };
  const handleDeincrease = () => {
    if (page >= 2) setPage(page - 1);
  };

  useEffect(() => {
    getBusiness(setData, page);
  }, [page]);

  return (
    <>
      <Nav />
      <div className="w-full bg-chinh">
        <div className="w-1360 mx-auto">
          <Header />
        </div>
      </div>
      <div className="w-full bg-phu">
        <div className="w-1360 mx-auto">
          <div className="flex flex-wrap w-1360">
            <div className="flex flex-wrap items-center justify-between w-1360 mx-2 mt-5 mb-2 ">
              <p className="text-h1 font-bold">Nhà Tuyển Dụng Hàng Đầu</p>
              <div className="text-span ">
                <p className="uppercase text-link cursor-pointer">Xem Tất cả</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="my-auto ml-5 h-full" onClick={handleDeincrease}>
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
              <div className="my-auto mr-5 h-full" onClick={handleIncrease}>
                <FontAwesomeIcon icon={faChevronRight} className="w-5 h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1360 ">
            <div className="flex flex-wrap items-center justify-between w-1360 mx-2 mt-5 mb-2 ">
              <p className="text-h1 font-bold">Công việc mới nhất</p>
              <div className="text-span ">
                <p className="uppercase text-link cursor-pointer">Xem Tất cả</p>
              </div>
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
      </div>
    </>
  );
}

export default Home;
