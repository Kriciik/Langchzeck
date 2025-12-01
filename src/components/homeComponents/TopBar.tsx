import { Coins, Flame } from "lucide-react";
export default function TopBar() {
  return (
    <>
      <div className="flex items-center justify-end w-[90vw] max-w-220 h-30 bg-white mb-10 rounded-2xl shadow-xl">
        <div className="flex items-center justify-center bg-white w-60 h-20 mr-20 gap-10">
          <div className="flex items-center justify-center w-70 h-12 rounded-4xl bg-orange-50 text-orange-700 font-bold border border-orange-100">
            <Flame size={30} className="fill-orange-500 text-orange-500" />
            <span className="text-[1.0rem]">5 Dní</span>
          </div>

          <div className="flex  items-center justify-center w-70 h-12 rounded-4xl bg-cyan-50 text-cyan-700 font-bold border border-cyan-100 ">
            <Coins size={30} className="fill-cyan-400 text-cyan-400" />
            <span className="text-[1.0rem]">300</span>
          </div>

          <span></span>
        </div>
      </div>
    </>
  );
}
