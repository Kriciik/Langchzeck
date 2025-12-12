import SideNavigationBar from "../components/ui/SideNavigationBar";
import TopBar from "../components/profileComponents/TopBar";
import ProfileMenu from "../components/profileComponents/ProfileMenu";
export default function Profile() {
  return (
    <>
      <div className="flex justify-center ">
        <SideNavigationBar />
        <main>
          <TopBar />
          <ProfileMenu />
        </main>
      </div>
    </>
  );
}
