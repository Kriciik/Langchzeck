import GameCard from "./GameCard";
export default function GameCardGrid() {
  return (
    <>
      <div className=" w-200 h-80  m-auto gap-6">
        <h1 className="text-[2rem] font-bold text-teal-700">
          Vyjmenovaná slova
        </h1>
        <div className="grid grid-cols-3">
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </div>
    </>
  );
}
