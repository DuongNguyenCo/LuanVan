import { Input, Button } from "./index";

function Header() {
  console.log("Header");
  return (
    <header className="w-1360 h-80 flex border border-sky-500 mt-70">
      <div className="mx-auto w-10/12 my-auto">
        <div>
          <p className="text-3xl mb-14">
            Đang có 1000 công việc tốt đang chờ bạn
          </p>
          <div className="flex">
            <Input
              id="search"
              placeholder="Tìm kiếm công việc theo kỹ năng, công ty"
              name="search"
            />
            <Input id="location" placeholder="địa điểm" name="location" />
            <Button text="TÌM KIẾM" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
