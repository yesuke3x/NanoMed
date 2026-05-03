interface AiTool {
  num: string;
  name: string;
  role: string;
  contribution: string;
  accent: "cyan" | "green" | "purple";
}

const AI_TOOLS: AiTool[] = [
  { num: "01", name: "Kandinsky 3.1",   role: "Генерация изображений",     accent: "cyan",   contribution: "Гипер-реалистичные 3D-рендеры наноботов в кровотоке для главной и галереи." },
  { num: "02", name: "D-ID / Runway",    role: "Видео-анимация",           accent: "green",  contribution: "«Ожившие» концепт-арты — петлевые анимации движения роя в плазме." },
  { num: "03", name: "Lumen5",           role: "Кинематографическое видео", accent: "purple", contribution: "Многоплановый трейлер клиники с озвучкой и субтитрами." },
  { num: "04", name: "Suno AI",          role: "Музыка",                    accent: "cyan",   contribution: "Оригинальный ambient-саундтрек, без лицензионных треков." },
  { num: "05", name: "HeyGen",           role: "Нейроаватар",               accent: "green",  contribution: "Виртуальный консультант BioBot для центра управления." },
  { num: "06", name: "Zapier + Sheets",  role: "ИИ-агент",                  accent: "purple", contribution: "Автоматический мониторинг новостей нанотех с обновлением Google Sheets." },
];

const REFLECTION = [
  {
    title: "✓ Эффективные инструменты",
    accent: "green" as const,
    body: "Kandinsky показал лучший результат для научной визуализации — точные пропорции и медицинская стилистика. Suno AI с одного промпта дал готовый ambient-трек. HeyGen генерирует аватар за 3 минуты вместо часов на съёмку.",
  },
  {
    title: "✕ Сложности и ограничения",
    accent: "cyan" as const,
    body: "Видео-генераторы (Runway, D-ID) часто искажают анатомию. Чат-боты на бесплатных тарифах ограничены 100 сообщениями. Zapier требует тщательной настройки фильтров — иначе таблица засоряется. Промпты приходилось переписывать 5–10 раз.",
  },
  {
    title: "◈ Личные выводы",
    accent: "purple" as const,
    body: "Главный навык проекта — промпт-инжиниринг. Освоил React + Tailwind на практике, понял как интегрировать iframe и работать с GitHub Releases как с CDN. Нейросети ускоряют, но не заменяют дизайнерское мышление.",
  },
];

const SKILLS = [
  { i: "🏗", t: "React + Vite + Tailwind CSS" },
  { i: "🎬", t: "Мультимедиа: <audio>, <video>, <iframe>" },
  { i: "🤖", t: "Промпт-инжиниринг для AI-инструментов" },
  { i: "⚡", t: "Zapier · Google Sheets · автоматизация" },
  { i: "💬", t: "Интеграция чат-ботов через iframe" },
  { i: "📦", t: "GitHub Releases как CDN для медиа" },
];

export default function Conclusions() {
  // TODO: вставьте ссылки
  const PRESENTATION_URL = "#";
  const SOURCES_URL      = "#";

  return (
    <div className="min-h-screen bg-nano-bg text-nano-white pt-24 pb-16">

      {/* Header */}
      <div className="border-b border-nano-cyan/20">
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <span className="nano-label">📊 Аналитика и выводы · Финальный блок</span>
          <h1 className="display-xl mt-3">
            Выводы по <span className="text-glow-cyan">проекту</span>
          </h1>
          <p className="text-nano-white/60 max-w-2xl mt-3">
            Применение нейросетевых инструментов для научной визуализации в рамках
            дисциплины ИКТ · Нархоз 2026 · Вариант 8 — Нанотехнологии в медицине.
          </p>
        </div>
      </div>

      {/* 3 reflection cards */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {REFLECTION.map((r, i) => (
          <article
            key={r.title}
            className="glass-card p-6 space-y-4 animate-slide-up"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span className={`nano-chip ${r.accent === "green" ? "nano-chip-green" : r.accent === "purple" ? "nano-chip-purple" : ""}`}>
              {`блок 0${i + 1}`}
            </span>
            <h3 className={`font-display text-xl tracking-wide ${
              r.accent === "green" ? "text-nano-green"
              : r.accent === "purple" ? "text-[#C580FF]"
              : "text-nano-cyan"
            }`}>
              {r.title}
            </h3>
            <p className="text-sm text-nano-white/65 leading-relaxed">
              {r.body}
            </p>
          </article>
        ))}
      </section>

      {/* Long-form text */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="glass-card p-8 grid md:grid-cols-[240px_1fr] gap-8">
          <div className="space-y-4">
            <span className="nano-label">О проекте</span>
            <p className="font-display text-3xl text-nano-cyan tracking-wide leading-none">
              ИТОГИ<br/>РАБОТЫ
            </p>
            <p className="font-mono text-[10px] text-nano-white/55 tracking-widest leading-relaxed">
              {/* TODO: ФИО */}
              Ким В. В. · ИКТ<br/>
              Нархоз 2026<br/>
              ст. преп. Неверова Е. Г.
            </p>
          </div>

          <div className="space-y-5 text-sm text-nano-white/65 leading-relaxed">
            <p>
              В ходе экзаменационного проекта по дисциплине
              <span className="text-nano-cyan"> Информационно-коммуникационные технологии </span>
              разработан многостраничный SPA-сайт «NANO MED», посвящённый теме
              «Нанотехнологии в медицине: микророботы-диагносты».
            </p>
            <p className="border-l-2 border-nano-cyan pl-4 italic text-nano-white/55">
              Использовано 6+ нейросетевых инструментов: Kandinsky для статичных
              изображений, D-ID/Runway для видео-анимаций, Lumen5 для трейлера,
              Suno AI для саундтрека, HeyGen для нейро-аватара и Zapier для агентского
              мониторинга данных в Google Sheets.
            </p>
            <p>
              К 2030 году микро-роботы-диагносты должны стать стандартом ранней
              диагностики онкологии и неврологических заболеваний, заменив часть
              инвазивных процедур.
            </p>
            <p className="border-l-2 border-nano-green pl-4 italic text-nano-white/55">
              Главный личный итог — переход от шаблонного использования AI к осознанному
              промпт-инжинирингу с критической оценкой результатов.
            </p>
          </div>
        </div>
      </section>

      {/* AI tools table */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <span className="nano-label mb-4 inline-block">Использованные ИИ-инструменты</span>
        <div className="neon-card overflow-hidden">
          {AI_TOOLS.map((tool, i) => (
            <div
              key={tool.name}
              className={`grid grid-cols-1 sm:grid-cols-[64px_200px_1fr] items-stretch hover:bg-nano-cyan/5 transition-colors ${
                i > 0 ? "border-t border-nano-cyan/15" : ""
              }`}
            >
              <div className={`grid place-items-center font-display font-bold text-2xl py-4 sm:py-0 border-b sm:border-b-0 sm:border-r border-nano-cyan/15 ${
                tool.accent === "green" ? "text-nano-green" : tool.accent === "purple" ? "text-[#C580FF]" : "text-nano-cyan"
              }`}>
                {tool.num}
              </div>
              <div className="p-4 border-b sm:border-b-0 sm:border-r border-nano-cyan/15">
                <p className="font-display text-lg text-nano-white tracking-wide">{tool.name}</p>
                <span className="nano-chip mt-2">{tool.role}</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-nano-white/60 leading-relaxed">{tool.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <span className="nano-label mb-4 inline-block">Полученные навыки</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SKILLS.map((s) => (
            <div key={s.t} className="neon-card p-5 flex items-center gap-4">
              <span className="text-2xl">{s.i}</span>
              <p className="text-sm text-nano-white/80 leading-snug">{s.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA buttons */}
      <section className="max-w-screen-xl mx-auto px-6 py-8 grid sm:grid-cols-2 gap-4">
        <a href={PRESENTATION_URL} target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-primary py-5">
          📊 Презентация (Google Slides)
        </a>
        <a href={SOURCES_URL} target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-outline py-5">
          📁 Исходники (Google Drive)
        </a>
      </section>
    </div>
  );
}
