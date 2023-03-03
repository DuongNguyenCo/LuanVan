import { Link } from "react-router-dom";
import hinh from "../assets/image/logo.png";
import { path } from "../utils/constant";

function DivHomejob() {
  return (
    <Link to={path.DETAILJ} className="w-4/12 p-4">
      <div className="hover:border w-full flex flex-wrap justify-center p-2">
        <div className="w-full flex mb-2">
          <div className="w-2/12">
            <div className="w-full h-full flex items-center">
              <img
                src={hinh}
                alt="hinh"
                className="w-auto h-fit max-w-50 max-h-50 mx-auto"
              />
            </div>
          </div>
          <div className="w-9/12 ml-3">
            <p>Tên công việc</p>
            <p>tên công ty</p>
          </div>
          <div className="w-1/12">0</div>
        </div>
        <div className="w-full flex ">
          <p className="w-20 mr-5 border text-center">javasrcipt</p>
          <p className="w-20 mr-5 border text-center">java</p>
        </div>
      </div>
    </Link>
  );
}

export default DivHomejob;
