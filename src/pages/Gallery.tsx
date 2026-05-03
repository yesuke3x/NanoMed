/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА — МУЛЬТИМЕДИА И ВИЗУАЛИЗАЦИЯ
   Замените [USERNAME] на свой GitHub username и теги релизов
   ───────────────────────────────────────────────────────────── */

// TODO: после загрузки файлов в GitHub Releases (тег v1.0) обновите URL.
const GH_USER = "USERNAME"; // ← замените
const GH_REPO = "NanoMed";
const REL = (file: string) =>
  `https://github.com/${GH_USER}/${GH_REPO}/releases/download/v1.0/${file}`;

export default function Gallery() {
  return (
    <div className="min-h-screen bg-nano-bg text-nano-white pt-24 pb-16">

      {/* Header */}
      <div className="border-b border-nano-cyan/20">
        <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="nano-label">Мультимедиа · Визуализация</span>
            <h1 className="display-xl mt-3">
              Медиа<span className="text-glow-cyan">галерея</span>
            </h1>
            <p className="text-nano-white/60 text-base mt-3 max-w-xl">
              AI-визуализация микроскопических процессов: от концепт-арта
              до кинематографического трейлера.
            </p>
          </div>
          <span className="nano-chip nano-chip-green"><span className="online-dot" /> 3 / 3 слот активны</span>
        </div>
      </div>

      {/* Three media blocks */}
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* === A) Static AI image === */}
        <article className="neon-card overflow-hidden flex flex-col">
          <div className="relative aspect-square overflow-hidden border-b border-nano-cyan/30">
            {/* TODO: замените src на ваш AI-рендер из Kandinsky 3.1 */}
            <img
              src="/concept.jpg"
              alt="Нанобот в кровотоке — концепт-арт"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=700&h=700&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nano-bg/80 via-transparent to-transparent" />
            <span className="absolute top-3 left-3 nano-chip">🖼 ФОТО</span>
          </div>

          <div className="p-5 space-y-3 flex-1">
            <h3 className="font-display text-xl text-nano-white tracking-wide">DNA &amp; Nanobots</h3>
            <p className="text-sm text-nano-white/60 leading-relaxed">
              Концептуальный рендер взаимодействия микроробота с двойной спиралью ДНК.
              Используется на главной как визуальный якорь.
            </p>
            <div className="ai-tag">
              🖼 Kandinsky 3.1 · Промпт: <em>microscopic 3D render, glowing nanobot near DNA helix,
              bioluminescent teal particles, dark medical atmosphere, ultra-realistic</em>
            </div>
          </div>
        </article>

        {/* === B) Animated hero ("revived photo") === */}
        <article className="neon-card overflow-hidden flex flex-col">
          <div className="relative aspect-square overflow-hidden border-b border-nano-cyan/30 scan-overlay">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=700&h=700&fit=crop"
            >
              {/* TODO: загрузите animation.mp4 в GitHub Releases v1.0 */}
              <source src={REL("animation.mp4")} type="video/mp4" />
              <source src="/videos/nanobots-loop.mp4" type="video/mp4" />
            </video>
            <span className="absolute top-3 left-3 nano-chip nano-chip-green">
              <span className="online-dot" /> LOOP
            </span>
          </div>

          <div className="p-5 space-y-3 flex-1">
            <h3 className="font-display text-xl text-nano-white tracking-wide">Nanobots in Plasma</h3>
            <p className="text-sm text-nano-white/60 leading-relaxed">
              «Ожившее фото» — петлевая анимация роя наноботов в плазме крови.
              Бесшовный loop без стыков для фоновой визуализации.
            </p>
            <div className="ai-tag">
              🎬 D-ID / Runway · Промпт: <em>microscopic loop of glowing nanobots moving through
              plasma, bioluminescent teal particles, seamless loop, cinematic macro photography</em>
            </div>
          </div>
        </article>

        {/* === C) GitHub Releases video (Lumen5) === */}
        <article className="neon-card overflow-hidden flex flex-col">
          <div className="relative aspect-square overflow-hidden border-b border-nano-cyan/30 bg-nano-card">
            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&h=700&fit=crop"
            >
              {/* TODO: загрузите promo-video.mp4 в GitHub Releases v1.0 и замените USERNAME выше */}
              <source src={REL("promo-video.mp4")} type="video/mp4" />
              <source src="/videos/trailer.mp4" type="video/mp4" />
              Видео не поддерживается вашим браузером.
            </video>
            <span className="absolute top-3 left-3 nano-chip nano-chip-purple">🎥 ВИДЕО</span>
          </div>

          <div className="p-5 space-y-3 flex-1">
            <h3 className="font-display text-xl text-nano-white tracking-wide">Mission: Diagnostics</h3>
            <p className="text-sm text-nano-white/60 leading-relaxed">
              Тематический трейлер о работе клиники NANO MED. Видео загружено
              в GitHub Releases (v1.0) для прямого стрима без CDN-зависимостей.
            </p>
            <div className="ai-tag">
              🎥 Lumen5 · Сценарий: <em>multi-shot trailer — nanobot through artery,
              cancer cell detection, data transmission visualisation, medical documentary, 4K</em>
            </div>
          </div>
        </article>
      </div>

      {/* GH Releases instructions */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="glass-card p-6 border-l-2 border-l-nano-green">
          <p className="nano-label">📦 Инструкция · GitHub Releases</p>
          <pre className="font-mono text-[11px] text-nano-white/65 mt-3 whitespace-pre-wrap leading-relaxed">
{`1. Откройте https://github.com/USERNAME/NanoMed/releases/new
2. Tag: v1.0  · Title: NanoMed Media v1.0
3. Прикрепите файлы: promo-video.mp4, animation.mp4, avatar-heygen.mp4, background-music.mp3
4. В src/pages/Gallery.tsx и MusicPlayer.tsx замените const GH_USER = "USERNAME" на ваш ник
5. Готово — видео стримится напрямую с GitHub`}
          </pre>
        </div>
      </div>
    </div>
  );
}
