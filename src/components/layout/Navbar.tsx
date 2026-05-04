import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Главная",    path: "/",            num: "01" },
  { label: "Услуги",     path: "/catalog",     num: "02" },
  { label: "Медиа",      path: "/gallery",     num: "03" },
  { label: "Управление", path: "/control",     num: "04" },
  { label: "Выводы",     path: "/conclusions", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      style={{ position: "fixed", top: "52px", left: 0, right: 0, zIndex: 2147483647 }}
      className={`transition-all duration-300 ${
        scrolled
          ? "bg-nano-bg/95 backdrop-blur-xl border-b border-nano-cyan/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          : "bg-nano-bg/90 backdrop-blur-md border-b border-nano-cyan/15 shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <span className="relative w-9 h-9 grid place-items-center border border-nano-cyan/60 rounded-md bg-nano-card group-hover:shadow-glow-cyan transition-all">
            <span className="font-display text-nano-cyan font-bold text-xs tracking-widest">NM</span>
            <span className="absolute inset-0 rounded-md border border-nano-cyan/0 group-hover:border-nano-cyan/80 group-hover:animate-pulse-glow" />
          </span>
          <div className="leading-tight">
            <p className="font-display font-bold text-nano-white text-sm tracking-[0.35em]">
              NANO<span className="text-nano-cyan"> MED</span>
            </p>
            <p className="font-mono text-[9px] text-nano-white/50 tracking-widest">
              Вариант 8 · Микророботы
            </p>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative flex items-end gap-1.5 px-4 py-2 font-display text-[11px] tracking-[0.18em] uppercase transition-all duration-200 group
                   ${isActive
                     ? "text-nano-cyan"
                     : "text-nano-white/55 hover:text-nano-cyan"
                   }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="font-mono text-[8px] mb-0.5 opacity-60">{item.num}</span>
                    <span>{item.label}</span>
                    <span
                      className={`absolute left-2 right-2 -bottom-0.5 h-px transition-all duration-300
                        ${isActive
                          ? "bg-nano-cyan shadow-[0_0_8px_rgba(0,245,255,0.8)]"
                          : "bg-nano-cyan scale-x-0 group-hover:scale-x-100 origin-left"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ONLINE indicator */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-nano-cyan/20">
          <span className="online-dot" />
          <span className="font-mono text-[10px] text-nano-green tracking-widest uppercase">Online</span>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-10 h-10 grid place-items-center border border-nano-cyan/40 rounded bg-nano-card/50 hover:border-nano-cyan transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-px bg-nano-cyan transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-nano-cyan transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-nano-cyan transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-nano-bg/95 backdrop-blur-xl border-b border-nano-cyan/30">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="border-t border-nano-cyan/10">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-6 py-4 font-display text-base tracking-widest uppercase transition-colors
                     ${isActive ? "bg-nano-cyan/10 text-nano-cyan" : "text-nano-white/70 hover:bg-nano-cyan/5 hover:text-nano-cyan"}`
                  }
                >
                  <span className="font-mono text-xs text-nano-cyan/60">{item.num}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="px-6 py-3 flex items-center gap-2 border-t border-nano-cyan/10">
              <span className="online-dot" />
              <span className="font-mono text-[10px] text-nano-green tracking-widest uppercase">System Online</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
