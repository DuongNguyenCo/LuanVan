import samsung from "../assets/image/samsung.png";

function DivHome() {
  console.log("divHome");
  return (
    <div className="w-3/12 p-4">
      <div className="hover:border w-full flex flex-wrap justify-center">
        <div className="w-170 h-170 mt-5 mb-3 flex items-center">
          <img
            src={samsung}
            alt="hinh"
            className="w-auto h-fit max-w-170 max-h-170"
          />
        </div>
        <p className="w-full text-center mb-2">Tên Công Ty</p>
        <p className="w-full text-center mb-2">Địa chỉ - công việc</p>
      </div>
    </div>
  );
}

export default DivHome;
