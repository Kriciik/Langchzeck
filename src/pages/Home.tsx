import GameCardGrid from "../components/homeComponents/GameCardGrid";
import SideNavigationBar from "../components/homeComponents/SideNavigationBar";
import TopBar from "../components/homeComponents/TopBar";
export default function Home() {
  return (
    <>
      <div className="flex justify-center ">
        <SideNavigationBar />
        <main>
          <TopBar />
          <GameCardGrid />
          <GameCardGrid />
          <GameCardGrid />
          <GameCardGrid />
        </main>
      </div>
    </>
  );
}
