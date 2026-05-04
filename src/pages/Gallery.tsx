/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА — МУЛЬТИМЕДИА И ВИЗУАЛИЗАЦИЯ
   Концепт: Илон Маск как визионер нанотехнологий и Neuralink.
   Все промпты — из Suno.docx (Bing/PixVerse/Lumen5/HeyGen).
   GitHub Releases: yesuke3x/NanoMed v1.0
   Drive-исходники:
   https://drive.google.com/drive/u/0/folders/1j9GMKmWkecr0pyWsMW8_ahJlK4_p7xSj
   ───────────────────────────────────────────────────────────── */

const REL = (file: string) =>
  `https://github.com/yesuke3x/NanoMed/releases/download/v1.0/${file}`;

const DRIVE_URL =
  "https://drive.google.com/drive/u/0/folders/1j9GMKmWkecr0pyWsMW8_ahJlK4_p7xSj";

const DriveLink = ({ file }: { file: string }) => (
  <a
    href={DRIVE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 font-mono text-[10px] text-nano-green hover:text-nano-cyan tracking-widest uppercase border border-nano-green/40 hover:border-nano-cyan transition-colors w-fit"
  >
    📁 {file} · Drive →
  </a>
);

export default function Gallery() {
  return (
    <div className="min-h-screen bg-nano-bg text-nano-white pt-24 pb-16">

      {/* Header */}
      <div className="border-b border-nano-cyan/20">
        <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="nano-label">Мультимедиа · Визуализация</span>
            <h1 className="display-xl mt-3">
              Образ <span className="text-glow-cyan">визионера</span>
            </h1>
            <p className="text-nano-white/65 text-base mt-3 max-w-2xl leading-relaxed">
              Главный персонаж медиа-блока — <strong className="text-nano-cyan">Илон Маск</strong>:
              создатель Neuralink, идеолог слияния нано-технологий с человеческим телом
              и популяризатор медицины будущего. Через четыре AI-инструмента (Bing,
              PixVerse, Lumen5, HeyGen) собран его портрет как «лица» проекта NANO MED.
            </p>
          </div>
          <span className="nano-chip nano-chip-green"><span className="online-dot" /> 4 / 4 слот активны</span>
        </div>
      </div>

      {/* Two primary media blocks (loop-блок убран) */}
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ════ A) Static portrait — Bing Image Creator ════ */}
        <article className="neon-card overflow-hidden flex flex-col">
          <div className="relative aspect-square overflow-hidden border-b border-nano-cyan/30">
            <img
              src={REL("character.png")}
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.endsWith("/media/character.png")) img.src = "/media/character.png";
              }}
              alt="Илон Маск — визионер Neuralink"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nano-bg/85 via-transparent to-transparent" />
            <span className="absolute top-3 left-3 nano-chip">🖼 ПОРТРЕТ</span>
          </div>

          <div className="p-5 space-y-3 flex-1 flex flex-col">
            <h3 className="font-display text-xl text-nano-white tracking-wide">Elon Musk · Visionary</h3>
            <p className="text-sm text-nano-white/65 leading-relaxed">
              Кинематографический портрет Маска в R&amp;D-лаборатории Neuralink:
              голограммы Starship + brain-chip, рой синих нано-частиц вокруг
              рук, окно с площадкой SpaceX на заднем плане.
            </p>
            <div className="ai-tag">
              🖼 <strong className="text-nano-cyan">Bing Image Creator</strong> (DALL·E) · Промпт:&nbsp;
              <em>A high-resolution, full-body cinematic photograph of Elon Musk standing confidently
              in an advanced, high-tech control center and R&amp;D lab at night. Custom-designed tactical
              suit with integrated glowing blue light patterns and a subtle "NEURALINK" logo. His left
              hand holds a complex floating blue holographic projection of a Starship rocket merged
              with a Neuralink brain chip, surrounded by data streams. His right hand amidst a swirling
              cloud of millions of tiny glowing blue particles forming dynamic streams around a
              Brain-Computer Interface visualization. Behind him — panoramic view of a night-time
              rocket launch complex with a Starship on its pad. Holographic displays float with text:
              "NEURALINK", "BRAIN-COMPUTER INTERFACE", "NANO-TECH LAB", "STARLINK". (8k, cinematic
              lighting, photorealistic, hyper-detailed).</em>
            </div>
            <DriveLink file="elon musk character.png" />
          </div>
        </article>

        {/* ════ C) Cinematic promo — PixVerse V6 ════ */}
        <article className="neon-card overflow-hidden flex flex-col">
          <div className="relative aspect-square overflow-hidden border-b border-nano-cyan/30 bg-nano-card">
            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              poster={REL("character.png")}
            >
              <source src={REL("promo-cinematic.mp4")} type="video/mp4" />
              <source src="/media/promo-cinematic.mp4" type="video/mp4" />
            </video>
            <span className="absolute top-3 left-3 nano-chip nano-chip-purple">🎥 PROMO 540P</span>
          </div>

          <div className="p-5 space-y-3 flex-1 flex flex-col">
            <h3 className="font-display text-xl text-nano-white tracking-wide">PixVerse V6 · Cinematic</h3>
            <p className="text-sm text-nano-white/65 leading-relaxed">
              Полный кинематографический промо-ролик: расширенная сцена с Маском
              в роли «лица» технологии. Формат 540p, режиссёрский монтаж в PixVerse V6.
            </p>
            <div className="ai-tag">
              🎥 <strong className="text-nano-cyan">PixVerse V6</strong> · Image-to-Video, 540P
              · продолжение того же промпта (нано-роботы / голограммы / Starship-launch).
            </div>
            <DriveLink file="PixVerse_V6_Image_Text_540P_Кинематографичная_.mp4" />
          </div>
        </article>
      </div>

      {/* ════ D) Educational long-form video — Lumen5 ════ */}
      <div className="max-w-screen-xl mx-auto px-6 pb-12">
        <div className="neon-card overflow-hidden">
          <div className="px-5 py-3 flex items-center justify-between border-b border-nano-cyan/25 bg-nano-bgAlt">
            <span className="nano-label">📚 Lumen5 · Образовательное видео</span>
            <span className="font-mono text-[10px] text-nano-white/55 tracking-widest">/edu/v1</span>
          </div>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-0">
            <div className="relative bg-nano-bg aspect-video lg:aspect-auto">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                poster={REL("character.png")}
              >
                <source src={REL("edu-nanotech.mp4")} type="video/mp4" />
                <source src="/media/edu-nanotech.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="font-display text-2xl text-nano-cyan tracking-wide">Nanotech in Medicine</h3>
              <p className="text-sm text-nano-white/65 leading-relaxed">
                Полный обзор: как нано-роботы работают в человеческом организме —
                от введения через инъекцию до диагностики на клеточном уровне
                и не-инвазивного лечения. Длительность ~1.5 мин.
              </p>
              <div className="ai-tag">
                🎓 <strong className="text-nano-cyan">Lumen5</strong> · Сценарий:&nbsp;
                <em>Create a 1.5-minute educational video script about "Nanotechnology in medicine:
                micro-robots as diagnosticians". Scene 1: Introduction to nanomedicine and the
                invisible revolution. Scene 2: How micro-robots navigate the human blood stream.
                Scene 3: Diagnosing diseases at a cellular level before symptoms appear.
                Scene 4: The future of non-invasive treatment and a healthier humanity.
                Tone: professional, inspiring, scientific.</em>
              </div>
              <DriveLink file="образовательное видео про нано технологии.mp4" />
            </div>
          </div>
        </div>
      </div>

      {/* Hosting note */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="glass-card p-6 border-l-2 border-l-nano-green">
          <p className="nano-label">📦 Хостинг медиа · GitHub Releases</p>
          <pre className="font-mono text-[11px] text-nano-white/65 mt-3 whitespace-pre-wrap leading-relaxed">
{`Все файлы стримятся с GitHub Releases v1.0:
  → https://github.com/yesuke3x/NanoMed/releases/tag/v1.0

Fallback — локальная папка public/media/ (для dev).
Архив-источник:
${DRIVE_URL}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
