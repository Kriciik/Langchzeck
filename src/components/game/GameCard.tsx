import { GraduationCap, Check, Star, Coins } from "lucide-react";

export default function GameCard() {
  return (
    <>
      <div
        className="flex flex-col w-60 h-60 bg-cyan-200 rounded-3xl border-5 border-sky-300 p-4 
        transition-all duration-350 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-sky-500"
      >
        <div className="flex justify-between w-full h-max ">
          <GraduationCap
            size={60}
            className="bg-linear-140 from-teal-500 to-cyan-400 rounded-2xl p-1"
          />
          <div className="flex flex-col">
            <Check
              size={27}
              className="self-end bg-green-300 text-green-700 rounded-4xl p-0.5"
            />
            <div className="flex gap-0.5 pt-2">
              <Star size={20} className=" fill-yellow-400 text-yellow-400" />
              <Star size={20} className=" fill-yellow-400 text-yellow-400" />
              <Star size={20} className=" fill-gray-300 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="opacity-40 ">Hra se slovy</h3>
          <h1 className=" font-medium ">Šibenice: Slova po B</h1>
          <button className="  w-full h-13 bg-linear-10 from-cyan-500 to-cyan-300  rounded-2xl mt-2 mb-2  bg-size-[200%_auto] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-right ">
            Hrát
          </button>
          <div className="flex justify-center text-cyan-700">
            <Coins className="fill-amber-400 text-amber-400" />+ 15 XP
          </div>
        </div>
      </div>
    </>
  );
}
