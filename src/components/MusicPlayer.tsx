import { useEffect, useRef, useState } from "react";

/* GitHub Releases v1.0 — yesuke3x/NanoMed
   Архив-источник:
   https://drive.google.com/drive/u/0/folders/1j9GMKmWkecr0pyWsMW8_ahJlK4_p7xSj */
const MUSIC_URL =
  "https://github.com/yesuke3x/NanoMed/releases/download/v1.0/soundtrack.mp3";
const FALLBACK_URL = "/media/soundtrack.mp3";

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
        <source src={FALLBACK_URL} type="audio/mpeg" />
      </audio>

      {/* Bottom-LEFT — выровнено по высоте с Tidio чат-баблом (он bottom:9px right:9px, ~60x60). */}
      <button
        onClick={toggle}
        aria-label={playing ? "Выключить музыку" : "Включить музыку"}
        className="fixed z-[1000] grid place-items-center text-nano-cyan transition-transform duration-300 hover:scale-110"
        style={{
          bottom: "20px",
          left: "20px",
          width: "64px",
          height: "64px",
          clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
          background: "rgba(31, 8, 64, 0.85)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 42, 157, 0.6)",
          boxShadow: "0 0 20px rgba(255, 42, 157, 0.45), 0 0 40px rgba(176, 38, 255, 0.18)",
        }}
      >
        <span className="text-2xl leading-none">{playing ? "🔊" : "🔇"}</span>
      </button>
    </>
  );
}
