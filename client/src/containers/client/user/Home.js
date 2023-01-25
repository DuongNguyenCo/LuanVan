import { Nav, Header, Divbusiness, Divjob } from "../../../components";

function Home() {
  //test
  console.log("Home1");
  return (
    <div className="w-1360 mx-auto">
      <Nav />
      <Header />
      <div className="flex flex-wrap w-1360 border border-sky-500">
        <div className="flex w-1360 mx-2 mt-3 mb-2">
          <p className="w-11/12 ">Nhà Tuyển Dụng Hàng Đầu</p>
          <p className="w-1/12 ">Xem Tất cả</p>
        </div>
        <Divbusiness />
        <Divbusiness />
        <Divbusiness />
        <Divbusiness />
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
