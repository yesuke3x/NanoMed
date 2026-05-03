export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-bio-black bg-bio-black">

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="ticker-item">БИОМЕД 2026</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">НАНОРОБОТЫ</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">ИКТ · НАРХОЗ</span>
              <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        {/* Logo block */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 flex items-center justify-center bg-bio-lime text-bio-black font-display text-sm border-2 border-bio-lime">
            BB
          </span>
          <div>
            <p className="font-display text-xl text-bio-white tracking-widest">BioBot.</p>
            <p className="font-mono text-[10px] text-bio-gray tracking-widest">НАНОТЕХНОЛОГИИ В МЕДИЦИНЕ</p>
          </div>
        </div>

        {/* Info center */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-bio-gray font-mono text-xs tracking-widest">
          <div>
            <span className="text-bio-lime block mb-1">СТУДЕНТ</span>
            <span className="text-bio-white">Ким В.В.</span>
          </div>
          <div>
            <span className="text-bio-lime block mb-1">ДИСЦИПЛИНА</span>
            <span className="text-bio-white">ИКТ</span>
          </div>
          <div>
            <span className="text-bio-lime block mb-1">УНИВЕРСИТЕТ</span>
            <span className="text-bio-white">Нархоз, 2026</span>
          </div>
          <div>
            <span className="text-bio-lime block mb-1">ПРЕПОДАВАТЕЛЬ</span>
            <span className="text-bio-white">Неверова Е.Г.</span>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-[rgba(255,255,255,0.08)] px-6 py-3 max-w-screen-xl mx-auto flex items-center justify-between">
        <p className="font-mono text-[10px] text-bio-gray tracking-widest">
          © 2026 · Проект по ИКТ
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-bio-lime animate-pulse" />
          <span className="font-mono text-[10px] text-bio-gray tracking-widest">СИСТЕМА АКТИВНА</span>
        </div>
      </div>
    </footer>
  );
}
