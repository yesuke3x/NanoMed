/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА — ЦЕНТР УПРАВЛЕНИЯ
   • HeyGen аватар (видео из GitHub Releases)
   • Zapier + Google Sheets — iframe
   • Чат-бот — iframe
   ───────────────────────────────────────────────────────────── */

const GH_USER = "USERNAME"; // ← TODO: ваш GitHub username
const AVATAR_VIDEO_URL = `https://github.com/${GH_USER}/NanoMed/releases/download/v1.0/avatar-heygen.mp4`;

// TODO: вставьте реальный embed URL из Zapier (Tables → Embed)
const ZAPIER_EMBED_URL = "";

// TODO: вставьте embed URL чат-бота (например, Chatbase, Tidio, Botpress)
const CHATBOT_EMBED_URL = "";

const SYSTEM_PROMPT = `Ты — медицинский ИИ-ассистент клиники NANO MED.
Специализируешься на нанотехнологиях в медицине.
Отвечай профессионально, но дружелюбно.
Язык: русский. Всегда предлагай записаться на приём.`;

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
              ИИ-ассистент HeyGen, Zapier-агент и чат-бот в одной операционной панели.
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
              poster="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&h=506&fit=crop"
            >
              {/* TODO: загрузите avatar-heygen.mp4 в GitHub Releases v1.0 */}
              <source src={AVATAR_VIDEO_URL} type="video/mp4" />
            </video>
            {/* DNA decorative orbit */}
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full border border-nano-cyan/40 animate-spin-slow grid place-items-center">
              <span className="w-1.5 h-1.5 bg-nano-cyan rounded-full shadow-glow-cyan-strong" />
            </div>
          </div>
          <div className="p-5 ai-tag">
            🤖 HeyGen · Промпт озвучки: <em>«Здравствуйте! Я — нейроаватар клиники NANO MED.
            В реальном времени мониторю 247 пациентов и 1 842 нанобота. Чем могу помочь?»</em>
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
            <div className="border border-nano-cyan/30 rounded p-3 bg-nano-bg/40">
              <p className="font-mono text-[9px] text-nano-white/55 uppercase tracking-widest">Пациентов</p>
              <p className="stat-number text-2xl mt-1">247</p>
            </div>
            <div className="border border-nano-cyan/30 rounded p-3 bg-nano-bg/40">
              <p className="font-mono text-[9px] text-nano-white/55 uppercase tracking-widest">Наноботов</p>
              <p className="stat-number text-2xl mt-1">1 842</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ ZAPIER + GOOGLE SHEETS ════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
          <div>
            <span className="nano-label">⚡ Zapier · Google Sheets</span>
            <h2 className="display-lg mt-2">Мониторинг в реальном времени</h2>
          </div>
          <p className="text-sm text-nano-white/55 max-w-md">
            ИИ-агент Zapier мониторит новости нанотехнологий и автоматически
            обновляет таблицу данных каждые 30 минут.
          </p>
        </div>

        <div className="iframe-frame">
          {ZAPIER_EMBED_URL ? (
            <iframe
              src={ZAPIER_EMBED_URL}
              width="100%"
              height={600}
              frameBorder={0}
              loading="lazy"
              title="Zapier · AI-агент мониторинга"
              style={{ background: "transparent", display: "block" }}
            />
          ) : (
            <div className="aspect-[16/9] md:h-[480px] grid place-items-center text-center px-6 bg-nano-card relative overflow-hidden">
              <div className="absolute inset-0 nano-grid-bg opacity-40" />
              <div className="relative z-10 space-y-4">
                <span className="text-5xl block">⚡</span>
                <p className="font-display text-2xl text-nano-cyan tracking-wide">Zapier + Google Sheets</p>
                <p className="font-mono text-xs text-nano-white/55 max-w-md">
                  Вставьте embed URL в переменную <code className="text-nano-green">ZAPIER_EMBED_URL</code>
                  &nbsp;в файле <code className="text-nano-green">src/pages/Control.tsx</code>
                </p>
                <p className="font-mono text-[10px] text-nano-white/40">
                  {/* TODO: Replace with actual Zapier iframe src */}
                  &lt;!-- TODO: Replace with actual Zapier iframe src --&gt;
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="glass-card p-4 mt-4 ai-tag">
          ⚡ Zapier · Промпт-инструкция агента: <em>«Каждые 30 минут проверяй RSS-ленту
          arxiv.org/medical-nanotech, фильтруй по ключевым словам "nanorobot diagnosis",
          добавляй новые публикации в Google Sheets с колонками: дата, заголовок, авторы, ссылка»</em>
        </div>
      </section>

      {/* ════════════ CHATBOT ════════════ */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr_1.2fr] gap-6 items-stretch">

        {/* Bot personality card */}
        <div className="glass-card p-6 space-y-5">
          <span className="nano-label">🤖 ИИ-ассистент NanoMed</span>
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
            <pre className="font-mono text-[11px] text-nano-green bg-nano-bg/60 border border-nano-cyan/25 rounded p-4 whitespace-pre-wrap leading-relaxed">
{SYSTEM_PROMPT}
            </pre>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="nano-chip">русский</span>
            <span className="nano-chip nano-chip-green">медицинский</span>
            <span className="nano-chip nano-chip-purple">nano-tech</span>
          </div>
        </div>

        {/* Chatbot iframe */}
        <div className="iframe-frame flex flex-col">
          <div className="px-4 py-3 flex items-center justify-between border-b border-nano-cyan/25 bg-nano-bgAlt">
            <span className="nano-chip nano-chip-green"><span className="online-dot" /> Бот онлайн</span>
            <span className="font-mono text-[10px] text-nano-white/55">/chat/v1</span>
          </div>

          {CHATBOT_EMBED_URL ? (
            <iframe
              src={CHATBOT_EMBED_URL}
              width="100%"
              height={500}
              frameBorder={0}
              title="NanoMed AI Чат-бот"
              style={{ background: "transparent", display: "block", flex: 1 }}
            />
          ) : (
            <div className="flex-1 min-h-[420px] grid place-items-center text-center px-6 bg-nano-card relative overflow-hidden">
              <div className="absolute inset-0 nano-grid-bg opacity-40" />
              <div className="relative z-10 space-y-4 max-w-sm">
                <span className="text-5xl block">💬</span>
                <p className="font-display text-xl text-nano-cyan">Чат-бот placeholder</p>
                <p className="font-mono text-xs text-nano-white/55">
                  Вставьте embed URL в <code className="text-nano-green">CHATBOT_EMBED_URL</code>
                </p>
                <p className="font-mono text-[10px] text-nano-white/40">
                  {/* TODO: Replace with actual chatbot iframe src */}
                  &lt;!-- TODO: Replace with actual chatbot iframe src --&gt;
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
