import { Footer, Nav } from "../../../components";
function Home() {
  return (
    <>
      <Nav type="business" />
      <div className="w-full bg-phu">
        <div className="w-1360 mx-auto">
          <div className="w-full h-screen pt-70">Trang dashboard</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
