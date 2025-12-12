export default function ProfileMenu() {
  return (
    <>
      <main className="p-4 w-[90vw] max-w-220 h-100 rounded-xl mb-10">
        <div className="grid grid-cols-4 grid-rows-1 gap-4 ">
          {/* FIXME: refaktorovat na componentu */}
          <div className="flex flex-col w-full h-40 bg-emerald-400 p-4 rounded-4xl shadow-xl">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-black">2,450</div>
            <div className="text-sm font-semibold opacity-90">Celkové XP</div>
          </div>
          <div className="flex flex-col w-full h-40 bg-emerald-400 p-4 rounded-4xl shadow-xl">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-black">2,450</div>
            <div className="text-sm font-semibold opacity-90">Celkové XP</div>
          </div>
          <div className="flex flex-col w-full h-40 bg-emerald-400 p-4 rounded-4xl shadow-xl">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-black">2,450</div>
            <div className="text-sm font-semibold opacity-90">Celkové XP</div>
          </div>
          <div className="flex flex-col w-full h-40 bg-emerald-400 p-4 rounded-4xl shadow-xl">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-black">2,450</div>
            <div className="text-sm font-semibold opacity-90">Celkové XP</div>
          </div>
        </div>
        <div>
          <h2>Poslední dosažený odznaky</h2>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h2></h2>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  );
}
