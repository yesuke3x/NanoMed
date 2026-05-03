interface Service {
  id: string;
  icon: string;
  name: string;
  category: string;
  desc: string;
  price: string;
  duration: string;
  accent: "cyan" | "green" | "purple";
}

const SERVICES: Service[] = [
  {
    id: "nano-onco",
    icon: "❤️",
    name: "Нано-диагностика онкологии",
    category: "Онкология",
    desc: "Раннее обнаружение опухолевых маркеров с помощью наноботов размером 50–70 нм. Сканирование в реальном времени.",
    price: "150 000 KZT",
    duration: "45 мин",
    accent: "cyan",
  },
  {
    id: "mri-nav",
    icon: "🔬",
    name: "МРТ-навигация наноботов",
    category: "Диагностика",
    desc: "Магнитно-резонансная навигация роя микророботов. Точность позиционирования до 99.3%.",
    price: "200 000 KZT",
    duration: "90 мин",
    accent: "cyan",
  },
  {
    id: "blood-ai",
    icon: "💉",
    name: "Анализ крови AI-мониторинг",
    category: "Лаборатория",
    desc: "Развёрнутый анализ крови с расшифровкой ИИ-агентом. Результаты приходят в Google Sheets онлайн.",
    price: "35 000 KZT",
    duration: "15 мин",
    accent: "green",
  },
  {
    id: "drug-delivery",
    icon: "🧬",
    name: "Таргетная доставка препаратов",
    category: "Терапия",
    desc: "Доставка лекарственных молекул точно к поражённой клетке через нано-капсулы. До 200 молекул на робота.",
    price: "280 000 KZT",
    duration: "120 мин",
    accent: "purple",
  },
  {
    id: "neuro-map",
    icon: "🧠",
    name: "Нейрологическое картирование",
    category: "Нейродиагностика",
    desc: "Картирование нейронных связей наноботами Neuro-Link M1, проникающими через гематоэнцефалический барьер.",
    price: "180 000 KZT",
    duration: "60 мин",
    accent: "purple",
  },
  {
    id: "regen",
    icon: "⚡",
    name: "Регенерация тканей",
    category: "Регенеративная медицина",
    desc: "Восстановление повреждённых тканей через стимуляцию роста клеток нано-сигналами. Курс из 3 процедур.",
    price: "320 000 KZT",
    duration: "180 мин",
    accent: "green",
  },
];

const CATS = ["Все", "Онкология", "Диагностика", "Лаборатория", "Терапия", "Нейродиагностика", "Регенеративная медицина"];

export default function Catalog() {
  return (
    <div className="min-h-screen bg-nano-bg text-nano-white pt-24 pb-16">

      {/* Header */}
      <div className="border-b border-nano-cyan/20 bg-gradient-to-r from-nano-bg via-nano-bgAlt to-nano-bg">
        <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="nano-label">Услуги · Каталог · Прайс</span>
            <h1 className="display-xl mt-3">
              Наши <span className="text-glow-cyan">услуги</span>
            </h1>
            <p className="text-nano-white/60 text-base mt-3 max-w-xl">
              Современная диагностика на наноуровне. Шесть ключевых процедур,
              доступных в клинике NANO MED.
            </p>
          </div>
          <div className="glass-card px-5 py-4 min-w-[220px]">
            <p className="font-mono text-[10px] text-nano-white/55 tracking-widest mb-1">ЗАПИСЬ</p>
            <p className="font-mono text-nano-cyan text-sm">+7 747 621 21 76</p>
            <p className="font-mono text-[10px] text-nano-green mt-1">7/7 · 09:00 — 20:00</p>
          </div>
        </div>

        {/* Filter strip */}
        <div className="border-t border-nano-cyan/15 px-6 py-3 flex flex-wrap gap-2 max-w-screen-xl mx-auto">
          {CATS.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase border rounded-full transition-all
                ${i === 0
                  ? "bg-nano-cyan/15 border-nano-cyan text-nano-cyan shadow-glow-cyan"
                  : "bg-transparent border-nano-cyan/25 text-nano-white/55 hover:border-nano-cyan hover:text-nano-cyan"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <article
            key={s.id}
            className="neon-card p-6 flex flex-col gap-4 animate-slide-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 grid place-items-center rounded-xl bg-nano-bgAlt border border-nano-cyan/30 text-2xl shadow-glow-cyan">
                {s.icon}
              </div>
              <span className={`nano-chip ${s.accent === "green" ? "nano-chip-green" : s.accent === "purple" ? "nano-chip-purple" : ""}`}>
                {s.category}
              </span>
            </div>

            <h2 className="font-display text-xl text-nano-white tracking-wide leading-snug">
              {s.name}
            </h2>

            <p className="text-sm text-nano-white/60 leading-relaxed flex-1">
              {s.desc}
            </p>

            <div className="h-px bg-gradient-to-r from-nano-cyan/60 via-nano-cyan/15 to-transparent" />

            <div className="flex items-center justify-between">
              <p className="font-mono font-semibold text-lg text-nano-cyan tracking-wide">{s.price}</p>
              <span className="nano-chip">{s.duration}</span>
            </div>

            <button className="btn-neon btn-neon-outline w-full text-xs mt-1">
              Записаться →
            </button>
          </article>
        ))}
      </div>

      {/* Compare CTA */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="nano-label">Не нашли нужную услугу?</p>
            <h3 className="font-display text-2xl text-nano-white mt-2">Свяжитесь с консультантом</h3>
            <p className="text-sm text-nano-white/55 mt-1">
              Подберём индивидуальный протокол диагностики.
            </p>
          </div>
          <a href="tel:+77476212176" className="btn-neon btn-neon-primary">
            ☎ Позвонить
          </a>
        </div>
      </div>
    </div>
  );
}
