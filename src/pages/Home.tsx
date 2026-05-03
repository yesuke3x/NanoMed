/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА 01 — ГЛАВНАЯ
   Neo-Brutalist / Editorial дизайн
   TODO: замените src на реальные файлы (hero.jpg, soundtrack.mp3)
   ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-bio-white">

      {/* ════════════════════════════════════
          HERO — полноэкранный
      ════════════════════════════════════ */}
      <section className="pt-14 border-b-2 border-bio-black">
        <div className="max-w-screen-xl mx-auto">

          {/* Top label strip */}
          <div className="flex items-center justify-between px-6 py-3 border-b-2 border-bio-black bg-bio-light">
            <span className="sec-label">ИКТ · Нархоз 2026</span>
            <span className="chip chip-lime">Экзаменационный проект</span>
          </div>

          {/* Main hero grid */}
          <div className="grid lg:grid-cols-[1fr_420px]">

            {/* LEFT — image */}
            <div className="relative border-r-2 border-bio-black overflow-hidden min-h-[440px] lg:min-h-[520px]">
              {/* TODO: hero.jpg — ваш AI-рендер из Nano Banana 2 */}
              <img
                src="/hero.jpg"
                alt="Нанобот AI-визуализация"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&h=600&fit=crop";
                }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-bio-black/30" />

              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-bio-lime px-6 py-3 border-t-2 border-bio-black">
                <div className="ai-tag" style={{ marginTop: 0, background: "transparent", borderColor: "#0C0C0C" }}>
                  Model: Nano Banana 2 | Prompt: Hyper-realistic microscopic 3D render of a glowing
                  nanobot navigating human bloodstream, bioluminescent particles, dark medical background
                </div>
              </div>
            </div>

            {/* RIGHT — text */}
            <div className="flex flex-col justify-between p-8 lg:p-10 bg-bio-white min-h-[440px]">
              <div className="space-y-6">
                {/* Issue number */}
                <p className="font-mono text-xs text-bio-gray tracking-widest border-b border-bio-mid pb-3">
                  VOL. 01 — 2026
                </p>

                {/* Heading */}
                <h1 className="display-lg text-bio-black">
                  Нанотех<span className="text-bio-red">:</span><br />
                  Будущее<br />
                  <span className="bg-bio-lime px-1">Внутри нас</span>
                </h1>

                {/* Lead */}
                <p className="text-sm text-bio-gray leading-relaxed">
                  Микророботы-диагносты — автономные системы 2026&nbsp;года
                  для выявления патологий на клеточном уровне в реальном времени.
                </p>

                {/* TODO: добавьте 2–3 предложения о проекте */}
                <p className="text-sm text-bio-mid italic border-l-4 border-bio-mid pl-4">
                  [ Введение в проект — доработайте этот блок ]
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-0 border-t-2 border-bio-black mt-8">
                {[
                  { v: "< 50нм",  l: "размер" },
                  { v: "99.3%",   l: "точность" },
                  { v: "2026",    l: "год" },
                ].map((s, i) => (
                  <div
                    key={s.l}
                    className={`p-4 ${i < 2 ? "border-r-2 border-bio-black" : ""}`}
                  >
                    <p className="font-display text-3xl text-bio-black">{s.v}</p>
                    <p className="font-mono text-[10px] text-bio-gray tracking-widest uppercase mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="flex flex-col sm:flex-row border-t-2 border-bio-black divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-bio-black">
            <a href="/catalog" className="btn-brut btn-lime flex-1 justify-center py-5 text-center border-0 rounded-none font-display text-xl tracking-widest">
              Изучить каталог →
            </a>
            <a href="/gallery" className="btn-brut btn-dark flex-1 justify-center py-5 text-center border-0 rounded-none font-display text-xl tracking-widest">
              Медиа-галерея
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          TICKER
      ════════════════════════════════════ */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="ticker-item">ДИАГНОСТИКА НА КЛЕТОЧНОМ УРОВНЕ</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">НАНО-РОБОТЫ 2026</span>
              <span className="ticker-dot">✦</span>
              <span className="ticker-item">БИОМАРКЕРЫ В РЕАЛЬНОМ ВРЕМЕНИ</span>
              <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          AUDIO
      ════════════════════════════════════ */}
      <section className="border-b-2 border-bio-black">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-[280px_1fr]">
          {/* Label */}
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-bio-black bg-bio-black flex flex-col justify-center gap-4">
            <span className="chip" style={{ borderColor: "#B8FF00", color: "#B8FF00", background: "transparent" }}>
              AUDIO
            </span>
            <p className="font-display text-4xl text-bio-lime leading-none">AMBIENT<br />TRACK</p>
            <p className="font-mono text-[10px] text-bio-gray tracking-widest">Suno AI · NanoMed OST</p>
          </div>

          {/* Player */}
          <div className="p-8 flex flex-col justify-center gap-4 bg-bio-light">
            {/* TODO: замените src на ваш mp3 из Suno AI */}
            <audio
              controls
              className="w-full"
              style={{ accentColor: "#B8FF00" }}
            >
              <source src="/audio/soundtrack.mp3" type="audio/mpeg" />
              <source src="/audio/soundtrack.ogg" type="audio/ogg" />
              Ваш браузер не поддерживает HTML5 audio.
            </audio>

            <div className="ai-tag">
              Model: Suno AI | Prompt: Minimalist ambient electronic, sterile medical atmosphere,
              deep pulsing bass, high-frequency synthetic tones, futuristic sci-fi soundscape,
              no lyrics, 90 BPM, key: D minor
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          HOW IT WORKS — 3 шага
          TODO: заполните реальным текстом
      ════════════════════════════════════ */}
      <section className="border-b-2 border-bio-black">
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="px-6 py-5 border-b-2 border-bio-black flex items-center justify-between">
            <span className="sec-label">Принцип работы</span>
            <p className="font-display text-3xl text-bio-black">КАК ЭТО РАБОТАЕТ?</p>
          </div>

          {/* 3 steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-bio-black">
            {[
              {
                step: "01",
                title: "Введение",
                bg: "bg-bio-white",
                accent: "bg-bio-lime",
                // TODO: замените placeholder на реальное описание
                body: "[ Опишите способ введения микроробота в организм — инъекция, ингаляция и т.д. ]",
              },
              {
                step: "02",
                title: "Навигация",
                bg: "bg-bio-black",
                accent: "bg-bio-red",
                body: "[ Опишите механизм навигации — магнитное поле, биохимические маркеры и т.д. ]",
              },
              {
                step: "03",
                title: "Диагностика",
                bg: "bg-bio-lime",
                accent: "bg-bio-black",
                body: "[ Опишите процесс сбора данных и передачи результатов — сенсоры, протоколы ]",
              },
            ].map((card) => (
              <div key={card.step} className={`${card.bg} p-8 space-y-5`}>
                <div className="flex items-center justify-between">
                  <span className={`${card.accent} px-3 py-1 font-display text-sm ${card.bg === "bg-bio-black" ? "text-bio-black" : "text-bio-black"}`}>
                    {card.step}
                  </span>
                </div>
                <h3 className={`font-display text-4xl tracking-wider ${card.bg === "bg-bio-black" ? "text-bio-white" : "text-bio-black"}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed italic ${card.bg === "bg-bio-black" ? "text-bio-gray" : "text-bio-gray"}`}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
