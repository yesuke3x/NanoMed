import { useEffect, useRef, useState } from "react";

/* TODO: загрузите фоновую музыку Suno AI в GitHub Releases (тег v1.0)
   и замените URL ниже на:
   https://github.com/[USERNAME]/NanoMed/releases/download/v1.0/background-music.mp3 */
const MUSIC_URL = "/audio/soundtrack.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.35;
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src={MUSIC_URL} type="audio/mpeg" />
      </audio>

      <button
        onClick={toggle}
        aria-label={playing ? "Выключить музыку" : "Включить музыку"}
        className="fixed bottom-6 right-6 z-[1000] w-12 h-12 rounded-full glass-card grid place-items-center text-nano-cyan shadow-glow-cyan hover:scale-110 transition-transform duration-300"
        style={{ borderColor: "rgba(0,245,255,0.6)" }}
      >
        <span className="text-lg leading-none">{playing ? "🔊" : "🔇"}</span>
        {playing && (
          <span className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none" />
        )}
      </button>
    </>
  );
}
