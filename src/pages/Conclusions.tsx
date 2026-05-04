interface AiTool {
  num: string;
  name: string;
  role: string;
  contribution: string;
  files: string[];          // конкретные файлы / артефакты на Drive
  accent: "cyan" | "green" | "purple";
}

const DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/1j9GMKmWkecr0pyWsMW8_ahJlK4_p7xSj";

const AI_TOOLS: AiTool[] = [
  {
    num: "01",
    name: "Bing Image Creator",
    role: "Генерация изображений",
    accent: "cyan",
    contribution: "Гипер-реалистичный портрет Илона Маска как «лица» проекта — Neuralink-лаборатория, голограммы Starship и brain-chip, рой нано-частиц.",
    files: ["elon musk character.png", "nano robot.jpg"],
  },
  {
    num: "02",
    name: "PixVerse",
    role: "Видео-анимация (loop)",
    accent: "green",
    contribution: "«Ожившее фото» из статичного PNG — Маск с пульсирующими голограммами и закручивающимися наноботами вокруг плеч.",
    files: ["video animation of character.mp4"],
  },
  {
    num: "03",
    name: "PixVerse V6",
    role: "Кинематографическое видео",
    accent: "purple",
    contribution: "Промо-ролик 540p Image-to-Video — продолжение той же сцены с Маском в режиме режиссёрского монтажа.",
    files: ["PixVerse_V6_Image_Text_540P_Кинематографичная_.mp4"],
  },
  {
    num: "04",
    name: "Suno",
    role: "Музыка / OST",
    accent: "cyan",
    contribution: "Calm futuristic ambient — медицинский sci-fi, медленный темп, soft synths + heartbeat-pulse, без вокала.",
    files: ["Фоновая музыка(Suno AI).mp3"],
  },
  {
    num: "05",
    name: "HeyGen",
    role: "Нейроаватар",
    accent: "green",
    contribution: "Виртуальный консультант BioBot для центра управления — озвучка о Neuralink + наноинженерии.",
    files: ["video animation of character.mp4"],
  },
  {
    num: "06",
    name: "Lumen5",
    role: "Образовательное видео",
    accent: "purple",
    contribution: "1.5-минутное видео-объяснение нано-медицины (4 сцены: введение → навигация → диагностика → будущее).",
    files: ["образовательное видео про нано технологии.mp4"],
  },
  {
    num: "07",
    name: "Zapier + Sheets",
    role: "ИИ-агент",
    accent: "cyan",
    contribution: "Каждые 4 часа парсит RSS нанотех-новостей и пишет уникальные статьи в Google Sheets с дедупликацией по ссылке.",
    files: ["NanoMed.xlsx"],
  },
  {
    num: "08",
    name: "Tidio",
    role: "Чат-бот",
    accent: "green",
    contribution: "Live-виджет на каждой странице через async-скрипт. Системный промпт — медицинский ассистент NANO MED.",
    files: [],
  },
];

const REFLECTION = [
  {
    title: "✓ Эффективные инструменты",
    accent: "green" as const,
    body: "Bing Image Creator выдал кинематографичный портрет с одного длинного промпта. Suno одним заходом сделал 1.5-мин ambient-трек. Tidio подключился буквально одной строкой — async script.",
  },
  {
    title: "✕ Сложности и ограничения",
    accent: "cyan" as const,
    body: "PixVerse искажал лицо при сильной анимации — пришлось снижать амплитуду движения. Zapier требует продумать дедупликацию строк, иначе таблица засоряется. HeyGen на бесплатном тарифе ограничен по длительности.",
  },
  {
    title: "◈ Личные выводы",
    accent: "purple" as const,
    body: "Главный навык проекта — промпт-инжиниринг. Освоил React + Tailwind, понял как стримить медиа через GitHub Releases и подключать AI-сервисы (script + iframe). Нейросети ускоряют работу, но не заменяют дизайнерское мышление.",
  },
];

const SKILLS = [
  { i: "🏗", t: "Работа с OnSpace AI" },
  { i: "🎬", t: "Мультимедиа: <audio>, <video>, <iframe>" },
  { i: "🤖", t: "Промпт-инжиниринг для AI-инструментов" },
  { i: "⚡", t: "Zapier · Google Sheets · автоматизация" },
  { i: "💬", t: "Интеграция Tidio чат-бота через script-injection" },
  { i: "📦", t: "GitHub Releases как CDN для медиа (yesuke3x/NanoMed v1.0)" },
];

export default function Conclusions() {
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
              : r.accent === "purple" ? "text-[#D17BFF]"
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
              Использовано 8 нейросетевых инструментов: Bing Image Creator (DALL·E),
              PixVerse, PixVerse V6, Suno, HeyGen, Lumen5, Zapier и Tidio.
              Концепция — Илон Маск как визионер слияния нано-технологий и Neuralink.
            </p>
            <p>
              К 2030 году микро-роботы-диагносты должны стать стандартом ранней
              диагностики онкологии и неврологических заболеваний, заменив часть
              инвазивных процедур.
            </p>
            <p className="border-l-2 border-nano-green pl-4 italic text-nano-white/55">
              Главный личный итог — переход от шаблонного использования AI к
              осознанному промпт-инжинирингу с критической оценкой результатов.
            </p>
          </div>
        </div>
      </section>

      {/* AI tools — table with per-tool Drive links */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <span className="nano-label mb-4 inline-block">Использованные ИИ-инструменты</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AI_TOOLS.map((tool) => (
            <article
              key={tool.name}
              className="neon-card p-5 flex flex-col gap-3"
            >
              <div className="flex items-start gap-4">
                <span className={`font-display font-bold text-3xl shrink-0 ${
                  tool.accent === "green" ? "text-nano-green"
                  : tool.accent === "purple" ? "text-[#D17BFF]"
                  : "text-nano-cyan"
                }`}>
                  {tool.num}
                </span>
                <div className="flex-1">
                  <p className="font-display text-lg text-nano-white tracking-wide">{tool.name}</p>
                  <span className="nano-chip mt-1">{tool.role}</span>
                </div>
              </div>

              <p className="text-sm text-nano-white/65 leading-relaxed">
                {tool.contribution}
              </p>

              {/* Per-tool Drive sources block */}
              {tool.files.length > 0 && (
                <div className="bg-nano-bg/50 border-l-2 border-nano-green p-3 mt-1">
                  <p className="font-mono text-[9px] text-nano-green tracking-widest uppercase mb-2">
                    📁 Исходники · Google Drive
                  </p>
                  <ul className="space-y-1.5">
                    {tool.files.map((f) => (
                      <li key={f}>
                        <a
                          href={DRIVE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-nano-cyan hover:text-nano-green transition-colors break-all underline-offset-2 hover:underline"
                        >
                          → {f}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tool.files.length === 0 && (
                <p className="font-mono text-[10px] text-nano-white/40 italic">
                  ▸ Без файла-исходника (live-сервис)
                </p>
              )}
            </article>
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

      {/* Single CTA — full Drive folder */}
      <section className="max-w-screen-xl mx-auto px-6 py-8">
        <a
          href={DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon btn-neon-primary w-full py-6 text-base"
        >
          📁 Открыть полную папку исходников на Google Drive →
        </a>
      </section>
    </div>
  );
}
