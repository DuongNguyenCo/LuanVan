import { Input, Button } from "./index";

function Header() {
  return (
    <header className="w-full h-80 flex border border-sky-500 mt-70">
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
              className="w-6/12 mr-3"
            />
            <Input
              id="location"
              placeholder="địa điểm"
              name="location"
              className="w-6/12 mr-3"
            />
            <Button text="TÌM KIẾM" className="w-2/12" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
