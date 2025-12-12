import { Link } from "react-router-dom";

export default function SideNavigationBar() {
  return (
    <>
      <aside className="flex flex-col w-70 h-[90vh] bg-white mr-15 shadow-2xl rounded-2xl sticky mt-10 top-10 justify-between">
        <div className="flex flex-col items-center ">
          <Link to="/profile" className="">
            <img
              src="src\assets\images\460091916_512884394705936_76768425584382169_n.jpg"
              alt="profile-image"
              className="rounded-full max-w-30  "
            />
          </Link>

          <h2 className=" w-[30%] h-7 bg-amber-300 rounded-xl flex items-center justify-center  mt-2">
            Lvl 10
          </h2>
          <h1 className="text-[1.3rem] font-bold mt-2">Pája</h1>
          <h3 className="text-[0.9rem] opacity-55 ">Učeň češtiny</h3>
        </div>
        <nav className="flex flex-col gap-2 w-full items-center">
          {/* TODO: refaktorovat Link na svoji vlastní componentu*/}
          <Link
            to="/"
            className="w-full h-14 bg-teal-100 flex items-center justify-center font-bold"
          >
            <span>Domů</span>
          </Link>
          <Link
            to="/lessons"
            className="w-full h-14 bg-white hover:bg-teal-50 hover:font-bold transition-all duration-150 ease-in-out flex items-center justify-center "
          >
            <span>Lekce</span>
          </Link>
          <Link
            to="/shop"
            className="w-full h-14 bg-white hover:bg-teal-50 hover:font-bold transition-all duration-150 ease-in-out flex items-center justify-center "
          >
            <span>Obchod</span>
          </Link>
          <Link
            to="/profile"
            className="w-full h-14 bg-white hover:bg-teal-50 hover:font-bold transition-all duration-150 ease-in-out flex items-center justify-center "
          >
            <span>Profil</span>
          </Link>
        </nav>
        <div className="flex flex-col w-full h-40 bg-linear-145 from-cyan-200 to-cyan-400  justify-center gap-3 p-5 rounded-b-2xl ">
          <span className="text-[1rem]">Zbývá XP</span>
          <span className="text-[1.3rem]">20/50 XP</span>
          <div className="w-full h-4 bg-white rounded-2xl fill-">
            <div
              className={`h-full bg-amber-300 transition-all duration-500 ease-out rounded-2xl`}
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </aside>
    </>
  );
}
