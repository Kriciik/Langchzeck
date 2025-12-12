export default function TopBar() {
  return (
    <>
      <div className="flex flex-col justify-center w-[90vw] max-w-220 h-30 bg-white mt-10 mb-10 gap-3 p-4">
        <h1 className="text-[1.6rem] font-black text-gray-800">Můj Profil</h1>
        <span className="text-gray-500 font-medium">
          Sleduj svoje pokroky a odznaky
        </span>
      </div>
    </>
  );
}
