import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─── Анимированный счётчик чисел ───────────────────────────── */
function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{val.toLocaleString("ru-RU")}{suffix}</span>;
}

const STATS = [
  { v: 4,    suffix: "+",   l: "Врача-специалиста" },
  { v: 6,    suffix: "",    l: "Услуг и процедур"  },
  { v: 7,    suffix: "/7",  l: "Дней в неделю"     },
  { v: 10,   suffix: "+",   l: "Лет на рынке"      },
];

export default function Home() {
  return (
    <div className="bg-nano-bg text-nano-white">

      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

        {/* Animated grid */}
        <div
          className="absolute inset-0 nano-grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,255,0.18),transparent_60%)]" />

        {/* Floating ring */}
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div className="relative w-[520px] h-[520px] animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-nano-cyan/30" />
            <div className="absolute inset-8 rounded-full border border-nano-cyan/15" />
            <div className="absolute inset-20 rounded-full border-l border-nano-cyan/40" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-nano-cyan shadow-glow-cyan-strong" />
            <div className="absolute bottom-8 right-12 w-3 h-3 rounded-full bg-nano-green shadow-glow-green" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[12, 28, 55, 70, 82].map((left, i) => (
            <span
              key={i}
              className="absolute block w-1 h-1 rounded-full bg-nano-cyan animate-float"
              style={{
                left: `${left}%`,
                top: `${20 + ((i * 13) % 60)}%`,
                animationDelay: `${i * 0.7}s`,
                boxShadow: "0 0 8px rgba(0,245,255,0.8)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">

          {/* Left: Text */}
          <div className="space-y-7 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-card rounded-full">
              <span className="online-dot" />
              <span className="font-mono text-[11px] text-nano-cyan tracking-widest uppercase">
                Нанотехнологии · Медицина 2077
              </span>
            </div>

            <h1 className="display-xl">
              Микро<span className="text-glow-cyan">роботы</span>-<br />
              диагносты:<br />
              <span className="text-nano-cyan">медицина наноуровня</span>
            </h1>

            <p className="text-lg text-nano-white/65 max-w-xl leading-relaxed">
              Революция в диагностике. Нано-роботы размером 100 нм исследуют организм
              изнутри, обнаруживают опухоли на ранней стадии и доставляют препараты
              точно в поражённую зону.
            </p>

            {/* Author cards */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="glass-card px-4 py-2.5">
                <p className="font-mono text-[9px] text-nano-cyan tracking-widest uppercase mb-0.5">Студент</p>
                {/* TODO: ФИО — заполните своими данными */}
                <p className="font-mono text-sm text-nano-green">Ким В. В.</p>
              </div>
              <div className="glass-card px-4 py-2.5">
                <p className="font-mono text-[9px] text-nano-cyan tracking-widest uppercase mb-0.5">Преподаватель</p>
                <p className="font-mono text-sm text-nano-green">ст. преп. Неверова Е. Г.</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/control" className="btn-neon btn-neon-primary">
                Записаться на диагностику <span aria-hidden>→</span>
              </Link>
              <Link to="/catalog" className="btn-neon btn-neon-outline">
                Посмотреть услуги
              </Link>
            </div>
          </div>

          {/* Right: Holographic console mock */}
          <div className="relative animate-fade-in">
            <div className="glass-card p-6 space-y-4 scan-overlay">
              <div className="flex items-center justify-between">
                <span className="nano-chip nano-chip-green"><span className="online-dot" /> live</span>
                <span className="font-mono text-[10px] text-nano-white/45">// SYS:0xA7-CORE</span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-nano-white/45 mb-1">// nanobot.status</p>
                <p className="font-display text-3xl text-nano-cyan">SCANNING…</p>
                <p className="font-mono text-[11px] text-nano-green mt-1">→ 1 842 единиц активны</p>
              </div>

              <div className="space-y-2">
                {[
                  { l: "Кровоток", v: 96 },
                  { l: "Лимфа",    v: 71 },
                  { l: "ЦНС",      v: 58 },
                ].map((row) => (
                  <div key={row.l}>
                    <div className="flex justify-between font-mono text-[10px] text-nano-white/55">
                      <span>{row.l}</span>
                      <span className="text-nano-cyan">{row.v}%</span>
                    </div>
                    <div className="h-1 bg-nano-bg/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-nano-cyan shadow-[0_0_8px_rgba(0,245,255,0.7)]"
                        style={{ width: `${row.v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="border border-nano-cyan/25 rounded p-2">
                  <p className="font-mono text-[9px] text-nano-white/45 uppercase">Точность</p>
                  <p className="font-display text-nano-cyan text-xl">99.3<span className="text-xs">%</span></p>
                </div>
                <div className="border border-nano-cyan/25 rounded p-2">
                  <p className="font-mono text-[9px] text-nano-white/45 uppercase">Размер</p>
                  <p className="font-display text-nano-cyan text-xl">100<span className="text-xs"> нм</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ STATS ════════════ */}
      <section className="relative border-y border-nano-cyan/20 bg-gradient-to-r from-nano-bgAlt via-nano-card to-nano-bgAlt">
        <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.l} className="glass-card p-6 text-center group">
              <div className="w-12 h-12 mx-auto mb-3 grid place-items-center rounded-full border border-nano-cyan/40 group-hover:shadow-glow-cyan transition-all">
                <span className="text-nano-cyan text-xl">◈</span>
              </div>
              <p className="stat-number">
                <CountUp to={s.v} suffix={s.suffix} />
              </p>
              <p className="font-mono text-[10px] text-nano-white/55 tracking-widest uppercase mt-2">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ AUDIO BLOCK ════════════ */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 py-16 grid md:grid-cols-[280px_1fr] gap-6 items-stretch">
          <div className="glass-card p-6 flex flex-col justify-center gap-3">
            <span className="nano-chip">◈ Audio · Suno AI</span>
            <p className="font-display text-3xl text-nano-cyan">AMBIENT<br/>OST</p>
            <p className="font-mono text-[10px] text-nano-white/55 tracking-widest">Фоновая музыка / NanoMed</p>
          </div>

          <div className="glass-card p-6 flex flex-col justify-center gap-3">
            <audio controls className="w-full" style={{ accentColor: "#00F5FF" }}>
              {/* TODO: загрузите .mp3 в GitHub Releases v1.0 и замените src */}
              <source src="/audio/soundtrack.mp3" type="audio/mpeg" />
              Ваш браузер не поддерживает HTML5 audio.
            </audio>
            <div className="ai-tag">
              🎵 Suno AI · Промпт: <em>ambient cyberpunk medical, slow BPM 80, synthesizer pads,
              futuristic hospital atmosphere, no lyrics, key: D minor</em>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="nano-label">Принцип работы</span>
              <h2 className="display-lg mt-3">Как это работает?</h2>
            </div>
            <p className="text-nano-white/55 text-sm max-w-md">
              Три фазы протокола: введение, навигация и сбор биомаркеров с передачей
              в облачную систему мониторинга.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Инъекция", body: "Микророботы вводятся внутривенно. Биосовместимая оболочка из кремния обеспечивает безопасное прохождение через сосудистую систему.", color: "cyan" },
              { num: "02", title: "Навигация", body: "Позиционирование контролируется внешним магнитным полем и биохимическими маркерами. Точность достижения цели — 99.3%.", color: "blue" },
              { num: "03", title: "Диагностика", body: "Сенсоры считывают биомаркеры воспаления и онкомаркеры, передают данные в Google Sheets через ИИ-агент.", color: "green" },
            ].map((s, i) => (
              <article key={s.num} className="neon-card p-7 space-y-4 animate-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="flex items-center justify-between">
                  <span className={`nano-chip ${s.color === "green" ? "nano-chip-green" : s.color === "blue" ? "" : ""}`}>
                    Шаг {s.num}
                  </span>
                  <span className="font-display font-bold text-3xl text-nano-cyan/30">{s.num}</span>
                </div>
                <h3 className="font-display text-2xl text-nano-white tracking-wide">{s.title}</h3>
                <p className="text-sm text-nano-white/60 leading-relaxed">{s.body}</p>
                <div className="h-px bg-gradient-to-r from-nano-cyan via-nano-cyan/30 to-transparent" />
                <p className="font-mono text-[10px] text-nano-cyan/70 tracking-widest">→ протокол активен</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
