import { Nav, Input, Button, DivFindB } from "../../../components";
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
        <DivFindB />
        <DivFindB />
        <DivFindB />
        <DivFindB />
        <DivFindB />
      </div>
    </div>
  );
}

export default Listbusiness;
