/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА — ЦЕНТР УПРАВЛЕНИЯ
   • HeyGen аватар (видео из GitHub Releases v1.0)
   • Zapier + Google Sheets — рендерится локально из NanoMed.xlsx
   • Tidio чат-бот — скрипт в index.html (НЕ iframe)
   Drive-исходники:
   https://drive.google.com/drive/u/0/folders/1j9GMKmWkecr0pyWsMW8_ahJlK4_p7xSj
   ───────────────────────────────────────────────────────────── */

const REL = (file: string) =>
  `https://github.com/yesuke3x/NanoMed/releases/download/v1.0/${file}`;

const DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/1j9GMKmWkecr0pyWsMW8_ahJlK4_p7xSj";

const ZAPIER_IFRAME_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOF5SkduQh1NNa0w5xvKDR47eIAZo0QtH9nipCRsczq9Vu1ab6IiQZHg-Fqe4i2KbKJpz0rPeBMB8d/pubhtml?widget=true&headers=false";

const SYSTEM_PROMPT = `Ты — медицинский ИИ-ассистент клиники NANO MED.
Специализируешься на нанотехнологиях в медицине.
Отвечай профессионально, но дружелюбно.
Язык: русский. Всегда предлагай записаться на приём.`;

/* Извлечено из public/media/NanoMed.xlsx — реальный output Zapier-агента */
const ZAPIER_ROWS: { title: string; topic: string; date: string; src: string }[] = [
  { title: "Treasury Market on Watch for Shift in Yellen-Era Debt Playbook", topic: "nanomedicine", date: "2026-05-03", src: "Bloomberg" },
  { title: "China's Pharma Dominance Is Just Beginning",                       topic: "biopharma",   date: "2026-04-19", src: "Bloomberg" },
  { title: "Pharma Patent Searches Need Upgrade to Match Modern Innovations", topic: "patents",     date: "2026-04-12", src: "BloombergLaw" },
  { title: "Four Biotechs Hit US IPO Market as Sector Prospects Brighten",    topic: "biotech",     date: "2026-02-04", src: "Bloomberg" },
  { title: "Obesity, M&A, Biotech Revival: A 2026 Guide to Health Stocks",    topic: "biotech",     date: "2026-01-08", src: "Bloomberg" },
  { title: "HanchorBio Expands Biotech Strategy Using Bloomberg Data",        topic: "biotech",     date: "2026-03-21", src: "PRNewswire" },
  { title: "Charting Disruption in Biotechnology",                            topic: "research",    date: "2026-02-15", src: "GlobalX" },
  { title: "Biotech Sector Shows Signs of Recovery Amid Innovation Boom",     topic: "biotech",     date: "2026-02-04", src: "Bloomberg" },
  { title: "Global Shift Toward Advanced Biologics and Precision Medicine",   topic: "precision",   date: "2026-02-15", src: "GlobalX" },
  { title: "Hantavirus Outbreak on Cruise Ship Leaves Three Dead, WHO Says",  topic: "health",      date: "2026-05-03", src: "Bloomberg" },
];

export default function Control() {
  return (
    <div className="min-h-screen bg-nano-bg text-nano-white pt-24 pb-16">

      {/* Header */}
      <div className="border-b border-nano-cyan/20 bg-gradient-to-r from-nano-bg via-nano-bgAlt to-nano-bg">
        <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="nano-label">Центр управления · Live Feed</span>
            <h1 className="display-xl mt-3">
              Мониторинг <span className="text-glow-cyan">данных</span>
            </h1>
            <p className="text-nano-white/60 text-base mt-3 max-w-xl">
              ИИ-ассистент HeyGen, Zapier-агент и Tidio-чат-бот в одной операционной панели.
            </p>
          </div>
          <div className="glass-card px-5 py-4 flex items-center gap-3">
            <span className="online-dot" />
            <div>
              <p className="font-mono text-[10px] text-nano-white/55 tracking-widest">СИСТЕМА</p>
              <p className="font-mono text-sm text-nano-green">● Данные обновляются</p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════ HEYGEN AVATAR ════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 grid lg:grid-cols-[1.2fr_1fr] gap-6 items-stretch">
        <div className="neon-card p-0 overflow-hidden flex flex-col">
          <div className="px-5 py-3 flex items-center justify-between border-b border-nano-cyan/25 bg-nano-bgAlt">
            <span className="nano-chip nano-chip-green"><span className="online-dot" /> AI Аватар · Live</span>
            <span className="font-mono text-[10px] text-nano-white/55 tracking-widest">HeyGen · v2</span>
          </div>
          <div className="relative bg-nano-bg aspect-video">
            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              poster="/media/character.png"
            >
              <source src={REL("heygen-avatar.mp4")} type="video/mp4" />
              <source src="/media/heygen-avatar.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full border border-nano-cyan/40 animate-spin-slow grid place-items-center">
              <span className="w-1.5 h-1.5 bg-nano-cyan rounded-full shadow-glow-cyan-strong" />
            </div>
          </div>
          <div className="p-5 ai-tag">
            🤖 <strong className="text-nano-cyan">HeyGen</strong> · Сценарий озвучки:&nbsp;
            <em>«Будущее уже наступило, и оно гораздо меньше, чем мы могли себе представить.
            Наноботы — это не просто фантастика, это ключ к лечению болезней на клеточном
            уровне и расширению возможностей человеческого разума. С помощью технологий
            Neuralink и наноинженерии мы открываем новую главу в эволюции. Мы не просто
            наблюдаем за прогрессом — мы его строим.»</em>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col gap-4">
          <span className="nano-label">Brief</span>
          <h3 className="font-display text-2xl text-nano-white tracking-wide">BioBot Assistant</h3>
          <p className="text-sm text-nano-white/65 leading-relaxed">
            Виртуальный консультант клиники. Отвечает на типовые вопросы пациентов,
            сопровождает к нужной услуге и записывает на приём через интеграцию с CRM.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="border border-nano-cyan/30 p-3 bg-nano-bg/40">
              <p className="font-mono text-[9px] text-nano-white/55 uppercase tracking-widest">Пациентов</p>
              <p className="stat-number text-2xl mt-1">247</p>
            </div>
            <div className="border border-nano-cyan/30 p-3 bg-nano-bg/40">
              <p className="font-mono text-[9px] text-nano-white/55 uppercase tracking-widest">Наноботов</p>
              <p className="stat-number text-2xl mt-1">1 842</p>
            </div>
          </div>
          <a
            href={DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 font-mono text-[10px] text-nano-green hover:text-nano-cyan tracking-widest uppercase border border-nano-green/40 hover:border-nano-cyan transition-colors w-fit"
          >
            📁 video animation of character.mp4 · Drive →
          </a>
        </div>
      </section>

      {/* ════════════ ZAPIER · LIVE TABLE ════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
          <div>
            <span className="nano-label">⚡ Zapier · Google Sheets</span>
            <h2 className="display-lg mt-2">Мониторинг в реальном времени</h2>
          </div>
          <p className="text-sm text-nano-white/65 max-w-md">
            Zapier триггерится каждые 4 часа, парсит RSS нанотех-новостей
            и пишет уникальные статьи в Google Sheets. Данные ниже —
            реальный экспорт из&nbsp;
            <code className="text-nano-green">NanoMed.xlsx</code>.
          </p>
        </div>

        <div className="iframe-frame">
          {/* Browser-style chrome */}
          <div className="bg-nano-bgAlt border-b border-nano-cyan/40 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="online-dot" />
              <span className="font-mono text-[10px] text-nano-cyan tracking-widest uppercase">
                docs.google.com/spreadsheets · NanoMed.xlsx
              </span>
            </div>
            <span className="font-mono text-[10px] text-nano-white/55">⊕ ⊖ ⊠</span>
          </div>

          {ZAPIER_IFRAME_URL ? (
            <iframe
              title="Zapier · Google Sheets · NanoMed RSS feed"
              src={ZAPIER_IFRAME_URL}
              className="w-full bg-white"
              style={{ height: "560px", border: "0" }}
              loading="lazy"
            />
          ) : (
            <div className="bg-nano-card relative overflow-hidden">
              <div className="absolute inset-0 nano-grid-bg opacity-20 pointer-events-none" />
              <div className="relative z-10 grid grid-cols-[60px_1fr_120px_110px_110px] border-b border-nano-cyan/40 bg-nano-bgAlt">
                {["#", "Заголовок", "Тема", "Дата", "Источник"].map((h) => (
                  <div key={h} className="px-4 py-3 font-mono text-[10px] text-nano-cyan tracking-widest uppercase">
                    {h}
                  </div>
                ))}
              </div>
              <div className="relative z-10">
                {ZAPIER_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[60px_1fr_120px_110px_110px] border-b border-nano-cyan/10 hover:bg-nano-cyan/5 transition-colors ${
                      i % 2 === 0 ? "bg-nano-bg/30" : "bg-transparent"
                    }`}
                  >
                    <div className="px-4 py-3 font-mono text-xs text-nano-white/50">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="px-4 py-3 text-sm text-nano-white/90 leading-snug">{row.title}</div>
                    <div className="px-4 py-3">
                      <span className={`nano-chip ${
                        row.topic === "nanomedicine" || row.topic === "precision"
                          ? "nano-chip-green"
                          : row.topic === "biotech" || row.topic === "research"
                          ? ""
                          : "nano-chip-purple"
                      }`}>
                        {row.topic}
                      </span>
                    </div>
                    <div className="px-4 py-3 font-mono text-xs text-nano-white/55">{row.date}</div>
                    <div className="px-4 py-3 font-mono text-xs text-nano-cyan">{row.src}</div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 px-4 py-3 border-t border-nano-cyan/25 bg-nano-bgAlt flex items-center justify-between">
                <span className="font-mono text-[10px] text-nano-white/55 tracking-widest">
                  Обновлено: 2026-05-04 · 03:00 UTC · {ZAPIER_ROWS.length} записей
                </span>
                <a
                  href={DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-nano-green hover:text-nano-cyan tracking-widest underline-offset-4 hover:underline"
                >
                  📁 NanoMed.xlsx · Drive →
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="glass-card p-4 mt-4 ai-tag">
          ⚡ <strong className="text-nano-cyan">Zapier</strong> · Промпт-инструкция агента:&nbsp;
          <em>Trigger every 4 hours using Schedule. Run a custom JavaScript code to fetch and parse
          an RSS feed containing nanomedicine news and research papers. Finally, look up a row in
          Google Sheets by the article link, and if it doesn't exist, create a new row with the
          paper's title, link, abstract (description), date, and tags.</em>
        </div>
      </section>

      {/* ════════════ TIDIO CHATBOT ════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr_1.2fr] gap-6 items-stretch">

        {/* Bot personality card */}
        <div className="glass-card p-6 space-y-5">
          <span className="nano-label">🤖 ИИ-ассистент NanoMed · Tidio</span>
          <h3 className="font-display text-2xl text-nano-white tracking-wide">Личность бота</h3>
          <p className="text-sm text-nano-white/65 leading-relaxed">
            Бот специализируется на вопросах нанотехнологий в медицине.
            Помогает пациентам понять процедуры, записаться на консультацию
            и получить информацию о лечении.
          </p>

          <div>
            <p className="font-mono text-[10px] text-nano-cyan tracking-widest uppercase mb-2">
              System Prompt
            </p>
            <pre className="font-mono text-[11px] text-nano-green bg-nano-bg/60 border border-nano-cyan/25 p-4 whitespace-pre-wrap leading-relaxed">
{SYSTEM_PROMPT}
            </pre>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="nano-chip">русский</span>
            <span className="nano-chip nano-chip-green">медицинский</span>
            <span className="nano-chip nano-chip-purple">nano-tech</span>
          </div>
        </div>

        {/* Tidio explainer card */}
        <div className="neon-card p-7 flex flex-col gap-5 relative overflow-hidden">
          <div className="absolute inset-0 nano-grid-bg opacity-30 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="nano-chip nano-chip-green"><span className="online-dot" /> Tidio · LIVE</span>
            <span className="font-mono text-[10px] text-nano-white/55 tracking-widest">script-injection</span>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-5xl leading-none drop-shadow-[0_0_12px_rgba(255,42,157,0.6)]">💬</span>
              <div>
                <h3 className="font-display text-2xl text-nano-cyan tracking-wide">
                  Виджет уже на странице
                </h3>
                <p className="text-sm text-nano-white/70 mt-1 leading-relaxed">
                  Чат-бот <strong className="text-nano-green">Tidio</strong> подключён
                  напрямую через <code className="text-nano-cyan">&lt;script&gt;</code> в
                  <code className="text-nano-cyan ml-1">index.html</code> — НЕ через iframe.
                  Виджет отрисовывается поверх всего сайта в правом нижнем углу
                  и доступен на любой странице.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-nano-blue pl-4 py-1 bg-nano-bgAlt/40">
              <p className="font-mono text-[11px] text-nano-white/65 leading-relaxed break-all">
                &lt;script src=<span className="text-nano-green">"//code.tidio.co/rwazjtdbwch9jfercnghlv0lqrgskpjt.js"</span> async&gt;&lt;/script&gt;
              </p>
            </div>

            <ul className="text-sm text-nano-white/65 space-y-2">
              <li className="flex gap-2"><span className="text-nano-cyan">▸</span> Загружается асинхронно — не блокирует рендер</li>
              <li className="flex gap-2"><span className="text-nano-cyan">▸</span> Иконка чата — фиксированная, правый нижний угол</li>
              <li className="flex gap-2"><span className="text-nano-cyan">▸</span> Скрипт вставлен ровно один раз — в <code className="text-nano-green">index.html</code></li>
              <li className="flex gap-2"><span className="text-nano-cyan">▸</span> Кнопка музыки 🔊 вынесена в левый нижний угол, чтобы не пересекаться с чат-баблом</li>
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="nano-chip">async script</span>
              <span className="nano-chip nano-chip-purple">no iframe</span>
              <span className="nano-chip nano-chip-green">global scope</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
