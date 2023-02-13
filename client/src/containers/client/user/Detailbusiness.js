import { Button, DivFindJ, Nav } from "../../../components";
import hinh from "../../../assets/image/logo.png";
function Detailbusiness() {
  return (
    <div className="w-1360 mx-auto">
      <Nav />
      <div className="w-1024 mt-70 mx-auto">
        <div className=" h-200 border flex p-2">
          <div className="w-3/12 mr-2 flex items-center">
            <img src={hinh} alt="logo" />
          </div>
          <div className="w-9/12  pl-4">
            <div className="my-2 ">Tên Công ty</div>
            <div className="grid grid-cols-2 gap-2">
              <div>Số lượng nhân sự</div>
              <div>Khu vực</div>
              <div>Link trang web</div>
              <div>bản đồ</div>
            </div>
          </div>
          <div className="w-3/12 flex flex-col justify-center">
            <Button text="Viết đánh giá" className="mb-2 h-8" />
            <Button text="Theo dõi" className="h-8" />
          </div>
        </div>
        <div className="mt-2 flex">
          <div className="w-28 text-center p-2 mr-2 hover:border-b-2 hover:border-indigo-500">
            Tuyển dụng
          </div>
          <div className="w-28 text-center p-2 hover:border-b-2 hover:border-indigo-500">
            Review
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-3">
          <div className="col-span-2 p-4">
            <div className="w-full mb-2">Tên công ty + tuyển dụng</div>
            <div className="w-full grid gap-2">
              <DivFindJ />
              <DivFindJ />
            </div>
          </div>
          <div className=""> review</div>
        </div>
      </div>
    </div>
  );
}

export default Detailbusiness;
