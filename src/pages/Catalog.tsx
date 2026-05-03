/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА 02 — КАТАЛОГ СИСТЕМ (Лаба 5)
   CSS Grid, 4 карточки — Neo-Brutalist
   TODO: добавьте реальные изображения и расширенные описания
   ───────────────────────────────────────────────────────────── */

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  accentBg: string;
  accentText: string;
  badge?: string;
  shortDesc: string;
  specs: { label: string; value: string }[];
}

const PRODUCTS: Product[] = [
  {
    id: "nano-scan-alpha",
    name: "Nano-Scan Alpha",
    price: "450 000 ₸",
    category: "Диагностика",
    accentBg: "bg-bio-lime",
    accentText: "text-bio-black",
    shortDesc:
      "Базовая система неинвазивной диагностики. Определяет концентрацию биомаркеров воспаления, мониторинг в реальном времени.",
    specs: [
      { label: "Размер",        value: "40–60 нм"    },
      { label: "Автономность",  value: "72 часа"     },
      { label: "Точность",      value: "96.5%"       },
      { label: "Протокол",      value: "BioLink v2"  },
    ],
  },
  {
    id: "neuro-link-m1",
    name: "Neuro-Link M1",
    price: "890 000 ₸",
    category: "Нейродиагностика",
    accentBg: "bg-bio-black",
    accentText: "text-bio-white",
    badge: "Хит",
    shortDesc:
      "Специализирован для нейровизуализации. Проникает через гематоэнцефалический барьер, картирует нейронные связи.",
    specs: [
      { label: "Размер",     value: "20–30 нм"       },
      { label: "Барьер",     value: "ГЭБ-проницаем"  },
      { label: "Точность",   value: "98.1%"          },
      { label: "Протокол",   value: "NeuroSync 3.0"  },
    ],
  },
  {
    id: "cell-repair-pro",
    name: "Cell-Repair Pro",
    price: "1 200 000 ₸",
    category: "Терапия",
    accentBg: "bg-bio-red",
    accentText: "text-bio-white",
    badge: "Флагман",
    shortDesc:
      "Комплексная система диагностики и локальной терапии. Доставляет лекарственные вещества напрямую к поражённым клеткам.",
    specs: [
      { label: "Размер",          value: "80–100 нм"      },
      { label: "Нагрузка",        value: "до 200 молекул" },
      { label: "Точность",        value: "99.3%"          },
      { label: "Протокол",        value: "TheraBio v4"    },
    ],
  },
  {
    id: "onco-hunter",
    name: "Onco-Hunter",
    price: "950 000 ₸",
    category: "Онкодиагностика",
    accentBg: "bg-bio-lime",
    accentText: "text-bio-black",
    shortDesc:
      "Специализирован для раннего выявления онкологических маркеров. Распознаёт атипичные клетки на стадии мутации.",
    specs: [
      { label: "Размер",    value: "50–70 нм"   },
      { label: "Маркеры",   value: "47 типов"   },
      { label: "Точность",  value: "97.8%"      },
      { label: "Протокол",  value: "OncoBio v2" },
    ],
  },
];

export default function Catalog() {
  return (
    <div className="min-h-screen bg-bio-white pt-14">

      {/* ── Page Header ── */}
      <div className="border-b-2 border-bio-black bg-bio-black">
        <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="sec-label" style={{ color: "#B8FF00" }}>
              <span style={{ background: "#B8FF00" }} className="inline-block w-6 h-0.5" />
              Лаба 05 · CSS Grid
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-bio-white leading-none mt-2">
              Каталог<br />
              <span className="text-bio-lime">Систем</span>
            </h1>
          </div>
          <p className="text-bio-gray text-sm max-w-xs leading-relaxed">
            Линейка микророботизированных диагностических платформ 2026 года.
          </p>
        </div>

        {/* Filter strip */}
        <div className="border-t border-[rgba(255,255,255,0.1)] px-6 py-3 flex flex-wrap gap-2 max-w-screen-xl mx-auto">
          {["Все", "Диагностика", "Нейродиагностика", "Терапия", "Онкодиагностика"].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 font-mono text-[10px] tracking-widest uppercase border transition-all
                ${i === 0
                  ? "bg-bio-lime border-bio-lime text-bio-black"
                  : "bg-transparent border-[rgba(255,255,255,0.2)] text-bio-gray hover:border-bio-lime hover:text-bio-lime"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          CSS GRID — 4 Cards
      ══════════════════════════════════ */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-l-2 border-bio-black">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="border-r-2 border-b-2 border-bio-black group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_4px_0_0_#0C0C0C]"
            >
              {/* Image area */}
              <div className="relative h-44 overflow-hidden bg-bio-light border-b-2 border-bio-black">
                {/* TODO: <img src={`/images/${product.id}.jpg`} className="w-full h-full object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 flex items-center justify-center text-3xl border-2 border-bio-black ${product.accentBg}`}>
                    🤖
                  </div>
                </div>

                {/* Category */}
                <span className="absolute top-3 left-3 chip">{product.category}</span>

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 right-3 chip chip-red">{product.badge}</span>
                )}
              </div>

              {/* Body */}
              <div className="p-5 space-y-4 bg-bio-white">
                <h2 className="font-display text-2xl tracking-wide text-bio-black group-hover:text-bio-red transition-colors">
                  {product.name}
                </h2>

                <p className="text-xs text-bio-gray leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="border border-bio-mid p-2">
                      <p className="font-mono text-[9px] text-bio-gray uppercase tracking-widest">{spec.label}</p>
                      <p className="font-mono text-xs font-medium text-bio-black mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-3 border-t-2 border-bio-black">
                  <p className="font-display text-2xl text-bio-black">{product.price}</p>
                  {/* TODO: добавьте обработчик → открытие модального окна */}
                  <button className={`btn-brut py-2 px-4 text-sm ${product.accentBg} ${product.accentText}`}>
                    Детали
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TODO: таблица сравнения */}
        <div className="border-x-2 border-b-2 border-bio-black p-8 text-center bg-bio-light">
          <p className="font-mono text-xs text-bio-gray tracking-widest">
            [ Блок сравнения характеристик — доработайте ]
          </p>
        </div>
      </div>
    </div>
  );
}
