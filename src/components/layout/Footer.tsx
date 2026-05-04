export default function Footer() {
  return (
    <footer className="w-full border-t border-nano-cyan/30 bg-nano-bgAlt/70 backdrop-blur-md mt-12">

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="ticker-item">NANO MED · 2077 PROTOCOL</span>
              <span className="ticker-dot">◇</span>
              <span className="ticker-item">МИКРОРОБОТЫ-ДИАГНОСТЫ</span>
              <span className="ticker-dot">◇</span>
              <span className="ticker-item">ИКТ · НАРХОЗ · ВАРИАНТ 8</span>
              <span className="ticker-dot">◇</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid md:grid-cols-[1fr_2fr] gap-8">

        {/* Brand block */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 grid place-items-center border border-nano-cyan/60 rounded-md bg-nano-card font-display font-bold text-nano-cyan text-sm shadow-glow-cyan">
              NM
            </span>
            <div>
              <p className="font-display font-bold text-nano-white text-lg tracking-[0.3em]">
                NANO<span className="text-nano-cyan"> MED</span>
              </p>
              <p className="font-mono text-[10px] text-nano-white/50 tracking-widest uppercase">
                Медицина будущего · 2077
              </p>
            </div>
          </div>
          <p className="text-sm text-nano-white/55 leading-relaxed max-w-sm">
            Микророботы-диагносты размером 100 нм — революция в ранней диагностике
            и таргетной доставке препаратов на клеточном уровне.
          </p>
          <p className="font-mono text-xs text-nano-cyan/80 tracking-wider">
            ☎ +7 (747) 422 04 46
          </p>
          <p className="font-mono text-xs text-nano-cyan/80 tracking-wider">
            ✉ <a href="mailto:viktoriya.kim@narxoz.kz" className="hover:text-nano-green underline-offset-2 hover:underline">viktoriya.kim@narxoz.kz</a>
          </p>
          <a
            href="https://drive.google.com/drive/u/0/folders/1j9GMKmWkecr0pyWsMW8_ahJlK4_p7xSj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-nano-green hover:text-nano-cyan tracking-widest underline-offset-4 hover:underline"
          >
            📁 Исходники проекта (Google Drive) →
          </a>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <p className="text-nano-cyan tracking-widest mb-2 text-[10px]">СТУДЕНТ</p>
            {/* TODO: ФИО — заполните */}
            <p className="text-nano-white/85">Ким Виктория Вячеславовна</p>
          </div>
          <div>
            <p className="text-nano-cyan tracking-widest mb-2 text-[10px]">ПРЕПОДАВАТЕЛЬ</p>
            <p className="text-nano-white/85">Неверова Е. Г.</p>
            <p className="text-nano-white/45 text-[10px] mt-0.5">ст. преп.</p>
          </div>
          <div>
            <p className="text-nano-cyan tracking-widest mb-2 text-[10px]">ДИСЦИПЛИНА</p>
            <p className="text-nano-white/85">ИКТ · 2026</p>
          </div>
          <div>
            <p className="text-nano-cyan tracking-widest mb-2 text-[10px]">ВАРИАНТ</p>
            <p className="text-nano-white/85">№ 8 — Нанотех</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-nano-cyan/15">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-nano-white/45 tracking-widest">
            © 2026 NANO MED · ИКТ Нархоз · Вариант 8
          </p>
          <div className="flex items-center gap-2">
            <span className="online-dot" />
            <span className="font-mono text-[10px] text-nano-green tracking-widest uppercase">Системы активны · 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
