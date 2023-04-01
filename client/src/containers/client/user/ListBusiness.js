import { Nav, Input, Button, DivFindB } from "../../../components";
function Listbusiness() {
  return (
    <>
      <Nav />
      <div className="w-full">
        <div className="w-1360 mx-auto pt-70">
          <div className="w-8/12 mx-auto flex py-5 px-2 justify-around">
            <Input placeholder="Nhập tên công ty" className="w-9/12 " />
            <Button text="Tìm kiếm" className="w-2/12" />
          </div>
          <div className=" grid grid-cols-3 gap-4">
            <DivFindB />
            <DivFindB />
            <DivFindB />
            <DivFindB />
            <DivFindB />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listbusiness;
