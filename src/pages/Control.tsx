/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА 04 — ЦЕНТР УПРАВЛЕНИЯ (Лаба 7)
   Neo-Brutalist flexbox split
   TODO: замените src заглушки на реальные URL
   ───────────────────────────────────────────────────────────── */

export default function Control() {
  // TODO: вставьте реальный URL embed из Google Sheets
  const GOOGLE_SHEETS_URL = "";
  // TODO: вставьте реальный URL видео HeyGen-аватара
  const AVATAR_VIDEO_URL  = "";

  const tableHeaders = ["ID пациента", "Нанобот", "Статус", "Биомаркер", "Обновлено"];

  return (
    <div className="min-h-screen bg-bio-white pt-14">

      {/* ── Page Header ── */}
      <div className="border-b-2 border-bio-black bg-bio-black">
        <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="sec-label" style={{ color: "#B8FF00" }}>
              <span className="inline-block w-6 h-0.5" style={{ background: "#B8FF00" }} />
              Лаба 07 · Flexbox
            </span>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-bio-white leading-none mt-2">
              Центр<br />
              <span className="text-bio-lime">Управления</span>
            </h1>
          </div>
          <p className="text-bio-gray text-sm max-w-xs leading-relaxed">
            Мониторинг состояния пациентов в реальном времени.
            ИИ-ассистент HeyGen + интеграция Google Sheets.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          FLEXBOX SPLIT
      ══════════════════════════════════ */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row border-b-2 border-bio-black">

        {/* LEFT — AI Avatar (40%) */}
        <div className="lg:w-[40%] border-b-2 lg:border-b-0 lg:border-r-2 border-bio-black flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b-2 border-bio-black bg-bio-light">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bio-lime animate-pulse" />
              <span className="font-mono text-[10px] text-bio-gray tracking-widest uppercase">AI Ассистент / Онлайн</span>
            </div>
            <span className="chip chip-lime">HeyGen</span>
          </div>

          {/* Video */}
          <div className="relative bg-bio-black border-b-2 border-bio-black">
            {AVATAR_VIDEO_URL ? (
              <video
                controls
                className="w-full aspect-video object-cover"
                poster="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=338&fit=crop"
              >
                <source src={AVATAR_VIDEO_URL} type="video/mp4" />
              </video>
            ) : (
              /* Заглушка */
              <div className="w-full aspect-video flex flex-col items-center justify-center bg-bio-dark">
                <div className="w-20 h-20 border-2 border-bio-lime flex items-center justify-center text-4xl mb-4">
                  🤖
                </div>
                <p className="font-mono text-[10px] text-bio-gray text-center px-6 tracking-widest">
                  {/* TODO: добавьте AVATAR_VIDEO_URL из HeyGen */}
                  [ Вставьте URL HeyGen-видео<br />в переменную AVATAR_VIDEO_URL ]
                </p>
              </div>
            )}
          </div>

          {/* AI Tag */}
          <div className="px-5 pt-4 pb-2">
            <div className="ai-tag">
              Model: HeyGen | Prompt: Professional medical AI assistant avatar, white lab coat,
              neutral background, saying: "Welcome to the future of diagnostics. I am your
              BioBot assistant, monitoring 247 patients in real time."
            </div>
          </div>

          {/* Info + stats */}
          <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-bio-white">
            <div>
              <h3 className="font-display text-3xl text-bio-black">BioBot Assistant</h3>
              {/* TODO: добавьте реальный текст приветствия */}
              <p className="text-sm text-bio-gray mt-2 italic">
                [ Вставьте текст который произносит аватар / краткое описание функций ]
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-0 border-2 border-bio-black">
              {[
                { label: "Пациентов", value: "247",   bg: "bg-bio-lime",  text: "text-bio-black" },
                { label: "Роботов",   value: "1 842", bg: "bg-bio-black", text: "text-bio-lime"  },
              ].map((stat, i) => (
                <div key={stat.label} className={`${stat.bg} ${stat.text} p-4 ${i === 0 ? "border-r-2 border-bio-black" : ""}`}>
                  <p className="font-mono text-[9px] tracking-widest uppercase opacity-70">{stat.label}</p>
                  <p className="font-display text-3xl mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Google Sheets (60%) */}
        <div className="lg:w-[60%] flex flex-col min-h-[560px]">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b-2 border-bio-black bg-bio-light">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bio-red animate-pulse" />
              <span className="font-mono text-[10px] text-bio-gray tracking-widest uppercase">
                Мониторинг пациентов — Google Sheets
              </span>
            </div>
            {/* TODO: замените # на реальную ссылку Google Sheets */}
            <a
              href={GOOGLE_SHEETS_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-bio-gray hover:text-bio-black transition-colors tracking-widest uppercase border-b border-bio-mid hover:border-bio-black"
            >
              Открыть ↗
            </a>
          </div>

          {/* Iframe or mock table */}
          <div className="flex-1 relative overflow-auto">
            {GOOGLE_SHEETS_URL ? (
              <iframe
                src={GOOGLE_SHEETS_URL}
                title="Мониторинг пациентов"
                className="w-full h-full min-h-[480px] border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <div className="w-full h-full flex flex-col">
                {/* Table header */}
                <div className="grid grid-cols-5 border-b-2 border-bio-black bg-bio-black">
                  {tableHeaders.map((h) => (
                    <div key={h} className="px-4 py-3 font-mono text-[9px] text-bio-lime tracking-widest uppercase border-r border-[rgba(255,255,255,0.08)] last:border-r-0">
                      {h}
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-5 border-b border-bio-mid transition-colors hover:bg-bio-light ${i % 2 === 0 ? "" : "bg-bio-light/50"}`}
                  >
                    <div className="px-4 py-3 font-mono text-xs text-bio-black border-r border-bio-mid">
                      PT-{String(1001 + i).padStart(4, "0")}
                    </div>
                    <div className="px-4 py-3 font-mono text-xs text-bio-black border-r border-bio-mid">
                      NS-α{i + 1}
                    </div>
                    <div className="px-4 py-3 border-r border-bio-mid">
                      <span className={`chip text-[9px] ${i === 2 ? "chip-red" : "chip-lime"}`}>
                        {i === 2 ? "Тревога" : "Норма"}
                      </span>
                    </div>
                    <div className="px-4 py-3 font-mono text-xs text-bio-gray border-r border-bio-mid">
                      {(0.8 + Math.random() * 0.4).toFixed(2)} ng/mL
                    </div>
                    <div className="px-4 py-3 font-mono text-xs text-bio-gray">
                      {new Date(Date.now() - i * 3600000).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                ))}

                {/* Placeholder hint */}
                <div className="flex-1 flex items-center justify-center p-6 bg-bio-light">
                  <p className="font-mono text-[10px] text-bio-gray text-center tracking-widest">
                    {/* TODO: вставьте Google Sheets embed URL в GOOGLE_SHEETS_URL */}
                    [ Вставьте URL Google Sheets в переменную GOOGLE_SHEETS_URL ]
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TODO: recharts графики */}
      <div className="max-w-screen-xl mx-auto border-x-2 border-b-2 border-bio-black p-8 text-center bg-bio-light">
        <p className="font-mono text-xs text-bio-gray tracking-widest">
          [ Блок с графиками динамики биомаркеров — доработайте с recharts ]
        </p>
      </div>

    </div>
  );
}
