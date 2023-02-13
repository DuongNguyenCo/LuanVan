import { Button, Nav } from "../../../components";
import hinh from "../../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { path } from "../../../utils/constant";
function Detailjob() {
  return (
    <div className="w-1360 mx-auto">
      <Nav />
      <div className="mt-20 h-auto grid grid-cols-3 gap-4">
        <div className="w-full col-span-2 ">
          <div className="flex flex-wrap px-10 ">
            <p className="w-full mb-3">Ten cong viec</p>
            <div className="flex w-full justify-between border-b py-5">
              <Link to={path.APPLY} className="w-11/12 mr-3">
                <Button className="w-full h-8" text="Ứng tuyển" />
              </Link>
              <Button
                className="w-1/12 h-8 text-center my-auto border-none"
                text="<3"
              />
            </div>
          </div>
          <div className="grid grid-rows-4 gap-2 px-10 mt-3">
            <div className="w-full">ds ngôn ngữ</div>
            <div className="w-full">Luong</div>
            <div className="w-full">địa chỉ</div>
            <div className="w-full">thời gian đăng</div>
          </div>
          <div className="border-b mx-10 mt-3"></div>
          <div className="flex px-10 mt-2">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              eros sapien. Praesent dolor urna, ullamcorper vel erat ut, commodo
              pharetra turpis. Integer et tempus mi. Sed gravida sollicitudin
              tellus, lobortis egestas lectus mattis ut. Integer luctus mauris
              sit amet ipsum eleifend, vel imperdiet sapien rhoncus. Aliquam at
              neque vitae velit pharetra luctus a in felis. Nullam sit amet
              mauris aliquam, faucibus tellus a, hendrerit diam. Vivamus iaculis
              lacinia velit, a euismod mauris molestie sed. Mauris nec porttitor
              neque, a dapibus est. Vivamus quis eros gravida, commodo lacus
              quis, imperdiet eros. Morbi ac metus enim. Pellentesque ex augue,
              laoreet et faucibus at, eleifend at diam. Etiam ultrices imperdiet
              ante, at laoreet urna fermentum vel. Sed eleifend porttitor neque,
              nec tincidunt sem tincidunt vel. Suspendisse ultrices ut nibh eu
              feugiat. Etiam at placerat mi. Nulla suscipit tristique posuere.
              Ut luctus mi non enim efficitur pulvinar. Fusce malesuada laoreet
              quam non porttitor.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              eros sapien. Praesent dolor urna, ullamcorper vel erat ut, commodo
              pharetra turpis. Integer et tempus mi. Sed gravida sollicitudin
              tellus, lobortis egestas lectus mattis ut. Integer luctus mauris
              sit amet ipsum eleifend, vel imperdiet sapien rhoncus. Aliquam at
              neque vitae velit pharetra luctus a in felis. Nullam sit amet
              mauris aliquam, faucibus tellus a, hendrerit diam. Vivamus iaculis
              lacinia velit, a euismod mauris molestie sed. Mauris nec porttitor
              neque, a dapibus est. Vivamus quis eros gravida, commodo lacus
              quis, imperdiet eros. Morbi ac metus enim. Pellentesque ex augue,
              laoreet et faucibus at, eleifend at diam. Etiam ultrices imperdiet
              ante, at laoreet urna fermentum vel. Sed eleifend porttitor neque,
              nec tincidunt sem tincidunt vel. Suspendisse ultrices ut nibh eu
              feugiat. Etiam at placerat mi. Nulla suscipit tristique posuere.
              Ut luctus mi non enim efficitur pulvinar. Fusce malesuada laoreet
              quam non porttitor.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              eros sapien. Praesent dolor urna, ullamcorper vel erat ut, commodo
              pharetra turpis. Integer et tempus mi. Sed gravida sollicitudin
              tellus, lobortis egestas lectus mattis ut. Integer luctus mauris
              sit amet ipsum eleifend, vel imperdiet sapien rhoncus. Aliquam at
              neque vitae velit pharetra luctus a in felis. Nullam sit amet
              mauris aliquam, faucibus tellus a, hendrerit diam. Vivamus iaculis
              lacinia velit, a euismod mauris molestie sed. Mauris nec porttitor
              neque, a dapibus est. Vivamus quis eros gravida, commodo lacus
              quis, imperdiet eros. Morbi ac metus enim. Pellentesque ex augue,
              laoreet et faucibus at, eleifend at diam. Etiam ultrices imperdiet
              ante, at laoreet urna fermentum vel. Sed eleifend porttitor neque,
              nec tincidunt sem tincidunt vel. Suspendisse ultrices ut nibh eu
              feugiat. Etiam at placerat mi. Nulla suscipit tristique posuere.
              Ut luctus mi non enim efficitur pulvinar. Fusce malesuada laoreet
              quam non porttitor.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              eros sapien. Praesent dolor urna, ullamcorper vel erat ut, commodo
              pharetra turpis. Integer et tempus mi. Sed gravida sollicitudin
              tellus, lobortis egestas lectus mattis ut. Integer luctus mauris
              sit amet ipsum eleifend, vel imperdiet sapien rhoncus. Aliquam at
              neque vitae velit pharetra luctus a in felis. Nullam sit amet
              mauris aliquam, faucibus tellus a, hendrerit diam. Vivamus iaculis
              lacinia velit, a euismod mauris molestie sed. Mauris nec porttitor
              neque, a dapibus est. Vivamus quis eros gravida, commodo lacus
              quis, imperdiet eros. Morbi ac metus enim. Pellentesque ex augue,
              laoreet et faucibus at, eleifend at diam. Etiam ultrices imperdiet
              ante, at laoreet urna fermentum vel. Sed eleifend porttitor neque,
              nec tincidunt sem tincidunt vel. Suspendisse ultrices ut nibh eu
              feugiat. Etiam at placerat mi. Nulla suscipit tristique posuere.
              Ut luctus mi non enim efficitur pulvinar. Fusce malesuada laoreet
              quam non porttitor.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              eros sapien. Praesent dolor urna, ullamcorper vel erat ut, commodo
              pharetra turpis. Integer et tempus mi. Sed gravida sollicitudin
              tellus, lobortis egestas lectus mattis ut. Integer luctus mauris
              sit amet ipsum eleifend, vel imperdiet sapien rhoncus. Aliquam at
              neque vitae velit pharetra luctus a in felis. Nullam sit amet
              mauris aliquam, faucibus tellus a, hendrerit diam. Vivamus iaculis
              lacinia velit, a euismod mauris molestie sed. Mauris nec porttitor
              neque, a dapibus est. Vivamus quis eros gravida, commodo lacus
              quis, imperdiet eros. Morbi ac metus enim. Pellentesque ex augue,
              laoreet et faucibus at, eleifend at diam. Etiam ultrices imperdiet
              ante, at laoreet urna fermentum vel. Sed eleifend porttitor neque,
              nec tincidunt sem tincidunt vel. Suspendisse ultrices ut nibh eu
              feugiat. Etiam at placerat mi. Nulla suscipit tristique posuere.
              Ut luctus mi non enim efficitur pulvinar. Fusce malesuada laoreet
              quam non porttitor.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              eros sapien. Praesent dolor urna, ullamcorper vel erat ut, commodo
              pharetra turpis. Integer et tempus mi. Sed gravida sollicitudin
              tellus, lobortis egestas lectus mattis ut. Integer luctus mauris
              sit amet ipsum eleifend, vel imperdiet sapien rhoncus. Aliquam at
              neque vitae velit pharetra luctus a in felis. Nullam sit amet
              mauris aliquam, faucibus tellus a, hendrerit diam. Vivamus iaculis
              lacinia velit, a euismod mauris molestie sed. Mauris nec porttitor
              neque, a dapibus est. Vivamus quis eros gravida, commodo lacus
              quis, imperdiet eros. Morbi ac metus enim. Pellentesque ex augue,
              laoreet et faucibus at, eleifend at diam. Etiam ultrices imperdiet
              ante, at laoreet urna fermentum vel. Sed eleifend porttitor neque,
              nec tincidunt sem tincidunt vel. Suspendisse ultrices ut nibh eu
              feugiat. Etiam at placerat mi. Nulla suscipit tristique posuere.
              Ut luctus mi non enim efficitur pulvinar. Fusce malesuada laoreet
              quam non porttitor.
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-wrap border p-4">
            <div className="w-full flex flex-col items-center">
              <div className="h-170 flex items-center">
                <img src={hinh} alt="logo" />
              </div>
              <div className="my-2">
                <p>tên công ty</p>
              </div>
            </div>
            <div className="w-full my-2 grid grid-cols-2">
              <div className="h-8">số lượng nhân sự</div>
              <div>khu vực</div>
              <div className="h-8">Link Trang web</div>
              <div>bản đồ</div>
            </div>
            <div className="w-full my-2 flex justify-center">
              <Link to={path.DETAILB}>
                <Button text="Về chúng tôi" className="p-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailjob;
