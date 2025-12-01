import GameCard from "./GameCard";
import ScrollContainer from "react-indiana-drag-scroll";

export default function GameCardGrid() {
  return (
    <>
      <div className=" w-[90vw] max-w-220 h-100 bg-cyan-50 p-4 rounded-xl mb-10">
        <h1 className="text-[2rem] font-bold text-teal-700 mt-5 mb-10">
          Vyjmenovaná slova
        </h1>
        <ScrollContainer
          className="
          flex gap-5 pb-6 pt-3 px-2 cursor-grab active:cursor-grabbing scrollbar-hide"
        >
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </ScrollContainer>
      </div>
    </>
  );
}
