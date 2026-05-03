/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА 05 — ВЫВОДЫ
   Neo-Brutalist editorial
   TODO: заполните реальным содержимым
   ───────────────────────────────────────────────────────────── */

interface AiTool {
  num:          string;
  name:         string;
  role:         string;
  accentBg:     string;
  accentText:   string;
  contribution: string;
}

const AI_TOOLS: AiTool[] = [
  {
    num: "01",
    name: "Nano Banana 2",
    role: "Генерация изображений",
    accentBg: "bg-bio-lime",
    accentText: "text-bio-black",
    contribution:
      "Создание гиперреалистичных 3D-рендеров наноботов в кровотоке для главной страницы и галереи. Позволил визуализировать субмикронные объекты, недоступные обычной фотосъёмке.",
  },
  {
    num: "02",
    name: "PixVerse",
    role: "Видеоанимация (loop)",
    accentBg: "bg-bio-black",
    accentText: "text-bio-lime",
    contribution:
      "Генерация бесшовной петлевой анимации движения наноботов в плазме крови. Инструмент создаёт физически правдоподобное поведение частиц в биологической среде.",
  },
  {
    num: "03",
    name: "Higgsfield AI",
    role: "Кинематографическое видео",
    accentBg: "bg-bio-red",
    accentText: "text-bio-white",
    contribution:
      "Создание многопланового видео-трейлера. Сцены путешествия нанобота по артерии и обнаружения клетки-мишени с кинематографической постановкой.",
  },
  {
    num: "04",
    name: "Suno AI",
    role: "Генерация музыки",
    accentBg: "bg-bio-lime",
    accentText: "text-bio-black",
    contribution:
      "Создание оригинального ambient-саундтрека — атмосфера стерильной футуристической медицины без использования лицензионных треков.",
  },
  {
    num: "05",
    name: "HeyGen",
    role: "AI-аватар",
    accentBg: "bg-bio-black",
    accentText: "text-bio-white",
    contribution:
      "Создание реалистичного видео-аватара ИИ-ассистента для Центра управления. Персонаж объясняет функции системы мониторинга.",
  },
];

const SKILLS = [
  { label: "HTML5 / CSS3 / Flexbox / Grid",                        icon: "🏗️" },
  { label: "Мультимедиа-элементы (audio, video, iframe)",          icon: "🎬" },
  { label: "Промпт-инжиниринг для ИИ-инструментов",               icon: "🤖" },
  { label: "Брутализм / Editorial UI дизайн",                      icon: "🖤" },
  { label: "[ Дополнительный навык — доработайте ]",               icon: "⚡" },
  { label: "[ Дополнительный навык — доработайте ]",               icon: "📊" },
];

export default function Conclusions() {
  // TODO: замените # на реальные ссылки
  const PRESENTATION_URL = "#"; // Google Slides / Canva
  const SOURCES_URL      = "#"; // Google Drive

  return (
    <div className="min-h-screen bg-bio-white pt-14">

      {/* ── Page Header ── */}
      <div className="border-b-2 border-bio-black bg-bio-lime">
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <span className="sec-label">05 · Заключение</span>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] text-bio-black leading-none mt-2">
            Выводы<br />по проекту
          </h1>
          <p className="text-bio-black/60 text-sm max-w-md leading-relaxed mt-4">
            Применение нейросетевых инструментов для научной визуализации
            в рамках дисциплины ИКТ · Нархоз 2026
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">

        {/* ══════════════════════════════════
            MAIN TEXT
        ══════════════════════════════════ */}
        <div className="border-b-2 border-bio-black grid md:grid-cols-[280px_1fr]">
          {/* Side label */}
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-bio-black bg-bio-light flex flex-col justify-between gap-6">
            <div>
              <span className="sec-label">О проекте</span>
              <p className="font-display text-4xl text-bio-black mt-3 leading-none">ИТОГИ<br />РАБОТЫ</p>
            </div>
            <p className="font-mono text-[10px] text-bio-gray tracking-widest leading-relaxed">
              Ким В.В. · ИКТ<br />Нархоз 2026<br />Неверова Е.Г.
            </p>
          </div>

          {/* Text */}
          <div className="p-8 space-y-5 text-sm text-bio-gray leading-relaxed">
            <p>
              В ходе выполнения экзаменационного проекта по дисциплине
              <span className="text-bio-black font-semibold"> Информационно-коммуникационные технологии </span>
              был разработан многостраничный веб-сайт, посвящённый теме
              «Нанотехнологии в медицине: микророботы-диагносты».
              {/* TODO: продолжите абзац */}
            </p>

            <p className="border-l-4 border-bio-lime pl-4 italic text-bio-mid">
              {/* TODO: абзац о применении ИИ-инструментов в лабах 5, 6, 7 */}
              [ Опишите как именно использовались нейросетевые инструменты
              в каждой из лабораторных работ (Лаба 5, 6, 7) ]
            </p>

            <p>
              {/* TODO: практическая значимость нанотехнологий */}
              [ Раскройте практическую значимость микророботов-диагностов
              для современной медицины и перспективы к 2030 году ]
            </p>

            <p className="border-l-4 border-bio-red pl-4 italic text-bio-mid">
              {/* TODO: личный вывод о полученных навыках */}
              [ Личный вывод: какие навыки ИКТ освоены в ходе проекта ]
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════
            AI TOOLS TABLE
        ══════════════════════════════════ */}
        <div className="border-b-2 border-bio-black">
          <div className="px-6 py-4 border-b-2 border-bio-black bg-bio-light flex items-center justify-between">
            <span className="sec-label">Использованные ИИ-инструменты</span>
          </div>

          <div className="divide-y-2 divide-bio-black">
            {AI_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="grid grid-cols-1 sm:grid-cols-[72px_180px_1fr] items-start hover:bg-bio-light transition-colors"
              >
                {/* Number */}
                <div className={`${tool.accentBg} ${tool.accentText} flex items-center justify-center font-display text-3xl p-5 h-full border-b-2 sm:border-b-0 sm:border-r-2 border-bio-black`}>
                  {tool.num}
                </div>

                {/* Name + role */}
                <div className="p-5 border-b-2 sm:border-b-0 sm:border-r-2 border-bio-black">
                  <p className="font-display text-xl text-bio-black">{tool.name}</p>
                  <span className="chip mt-2">{tool.role}</span>
                </div>

                {/* Description */}
                <div className="p-5">
                  <p className="text-sm text-bio-gray leading-relaxed">{tool.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            SKILLS GRID
        ══════════════════════════════════ */}
        <div className="border-b-2 border-bio-black">
          <div className="px-6 py-4 border-b-2 border-bio-black bg-bio-light">
            <span className="sec-label">Полученные навыки</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l-2 border-bio-black">
            {SKILLS.map((item, i) => (
              <div
                key={i}
                className="border-r-2 border-b-2 border-bio-black p-6 flex items-center gap-4 hover:bg-bio-light transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="text-sm text-bio-black leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            CTA BUTTONS
        ══════════════════════════════════ */}
        <div className="flex flex-col sm:flex-row divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-bio-black border-b-2 border-bio-black">
          {/* TODO: замените PRESENTATION_URL */}
          <a
            href={PRESENTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brut btn-lime flex-1 justify-center py-6 text-2xl rounded-none border-0 border-r-0"
          >
            <span>📊</span> Презентация
          </a>

          {/* TODO: замените SOURCES_URL */}
          <a
            href={SOURCES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brut btn-dark flex-1 justify-center py-6 text-2xl rounded-none border-0"
          >
            <span>📁</span> Исходники (Google Drive)
          </a>
        </div>

      </div>
    </div>
  );
}
