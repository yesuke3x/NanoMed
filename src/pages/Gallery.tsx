/* ─────────────────────────────────────────────────────────────
   СТРАНИЦА 03 — МЕДИА-ГАЛЕРЕЯ (Лаба 6)
   Neo-Brutalist — 3 медиа-блока
   TODO: замените src-заглушки на реальные файлы
   ───────────────────────────────────────────────────────────── */

export default function Gallery() {
  return (
    <div className="min-h-screen bg-bio-white pt-14">

      {/* ── Page Header ── */}
      <div className="border-b-2 border-bio-black bg-bio-light">
        <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="sec-label">Лаба 06 · Мультимедиа</span>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-bio-black leading-none mt-2">
              Медиа<br /><span className="bg-bio-lime px-2">Галерея</span>
            </h1>
          </div>
          <p className="text-bio-gray text-sm max-w-xs leading-relaxed">
            Визуализация микроскопических процессов — от концептуального арта до трейлеров.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          3 MEDIA BLOCKS
      ══════════════════════════════════ */}
      <div className="max-w-screen-xl mx-auto border-b-2 border-bio-black">
        <div className="grid grid-cols-1 md:grid-cols-3 border-l-2 border-t-2 border-bio-black">

          {/* ── БЛОК 1 — Фото ── */}
          <div className="border-r-2 border-b-2 md:border-b-0 border-bio-black group overflow-hidden">

            {/* Image */}
            <div className="relative overflow-hidden border-b-2 border-bio-black">
              {/* TODO: concept.jpg — замените на AI-рендер из Nano Banana 2 */}
              <img
                src="/concept.jpg"
                alt="Концепт-арт — ДНК и нанороботы"
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&h=600&fit=crop";
                }}
              />
              {/* Label overlay */}
              <div className="absolute top-0 left-0 bg-bio-lime px-3 py-1.5 border-b-2 border-r-2 border-bio-black">
                <span className="font-mono text-[9px] tracking-widest uppercase text-bio-black">ФОТО</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 space-y-3 bg-bio-white">
              <h3 className="font-display text-2xl tracking-wide text-bio-black">DNA & Nanobots</h3>
              {/* TODO: добавьте описание */}
              <p className="text-xs text-bio-gray italic">[ Опишите что изображено на концепт-арте ]</p>
              <div className="ai-tag">
                Model: Nano Banana 2 | Prompt: Abstract medical background, blurred DNA helix strands
                and nanobots in teal and purple hues, microscopic science art, dark atmospheric
                background, ultra high resolution, 4:3 composition
              </div>
            </div>
          </div>

          {/* ── БЛОК 2 — Loop Animation ── */}
          <div className="border-r-2 border-b-2 md:border-b-0 border-bio-black group overflow-hidden">

            {/* Video */}
            <div className="relative overflow-hidden border-b-2 border-bio-black">
              {/* TODO: добавьте /videos/nanobots-loop.mp4 из PixVerse */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-square object-cover"
                poster="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=600&fit=crop"
              >
                <source src="/videos/nanobots-loop.mp4"  type="video/mp4"  />
                <source src="/videos/nanobots-loop.webm" type="video/webm" />
              </video>

              {/* Label overlay */}
              <div className="absolute top-0 left-0 bg-bio-black px-3 py-1.5 border-b-2 border-r-2 border-bio-black flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bio-lime animate-pulse" />
                <span className="font-mono text-[9px] tracking-widest uppercase text-bio-lime">LOOP</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 space-y-3 bg-bio-light">
              <h3 className="font-display text-2xl tracking-wide text-bio-black">Nanobots in Plasma</h3>
              {/* TODO: добавьте описание */}
              <p className="text-xs text-bio-gray italic">[ Опишите анимацию и технологию генерации ]</p>
              <div className="ai-tag">
                Model: PixVerse | Prompt: Microscopic loop of glowing nanobots moving through plasma,
                bioluminescent teal particles, seamless loop, dark background,
                cinematic macro photography style
              </div>
            </div>
          </div>

          {/* ── БЛОК 3 — Трейлер ── */}
          <div className="border-b-2 md:border-b-0 border-bio-black group overflow-hidden">

            {/* Video */}
            <div className="relative overflow-hidden border-b-2 border-bio-black">
              {/* TODO: добавьте /videos/trailer.mp4 из Higgsfield AI */}
              <video
                controls
                className="w-full aspect-square object-cover"
                poster="https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=600&fit=crop"
              >
                <source src="/videos/trailer.mp4"  type="video/mp4"  />
                <source src="/videos/trailer.webm" type="video/webm" />
              </video>

              {/* Label overlay */}
              <div className="absolute top-0 left-0 bg-bio-red px-3 py-1.5 border-b-2 border-r-2 border-bio-black">
                <span className="font-mono text-[9px] tracking-widest uppercase text-bio-white">ТРЕЙЛЕР</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 space-y-3 bg-bio-white">
              <h3 className="font-display text-2xl tracking-wide text-bio-black">Mission: Diagnostics</h3>
              {/* TODO: добавьте описание трейлера */}
              <p className="text-xs text-bio-gray italic">[ Опишите трейлер и нарративную структуру ]</p>
              <div className="ai-tag">
                Model: Higgsfield AI | Prompt: Multi-shot cinematic — nanobots traveling through artery,
                close-up of robot detecting cancer cell, data transmission visualization,
                dramatic lighting, medical documentary style, 4K
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: расширьте галерею */}
      <div className="max-w-screen-xl mx-auto border-x-2 border-b-2 border-bio-black p-8 text-center bg-bio-light">
        <p className="font-mono text-xs text-bio-gray tracking-widest">
          [ Дополнительные медиа-блоки — доработайте галерею ]
        </p>
      </div>

    </div>
  );
}
