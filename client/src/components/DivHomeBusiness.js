import { Link } from "react-router-dom";
import samsung from "../assets/image/samsung.png";
import { path } from "../utils/constant";

function DivHome(prop) {
  return (
    <Link to={path.DETAILB} className="w-3/12 p-4">
      <div className="hover:border w-full flex flex-wrap justify-center ">
        <div className="w-170 h-170 mt-5 mb-3 flex items-center">
          <img
            src={samsung}
            alt="hinh"
            className="w-auto h-fit max-w-170 max-h-170"
          />
        </div>
        <p className="w-full text-center mb-2">{prop.name}</p>
        <p className="w-full text-center mb-2">{prop.city} - công việc</p>
      </div>
    </Link>
  );
}

export default DivHome;
