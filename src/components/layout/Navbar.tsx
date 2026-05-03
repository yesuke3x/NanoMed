import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Главная",         path: "/",            num: "01" },
  { label: "Каталог",         path: "/catalog",     num: "02" },
  { label: "Галерея",         path: "/gallery",     num: "03" },
  { label: "Управление",      path: "/control",     num: "04" },
  { label: "Выводы",          path: "/conclusions", num: "05" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-bio-white border-b-2 border-bio-black" : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-14">

        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span
            className="w-7 h-7 flex items-center justify-center bg-bio-black text-bio-lime font-display text-xs font-bold border-2 border-bio-black group-hover:bg-bio-lime group-hover:text-bio-black transition-colors"
          >
            BB
          </span>
          <span className="font-display text-xl tracking-wider text-bio-black uppercase">
            BioBot<span className="text-bio-red">.</span>
          </span>
        </NavLink>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative flex items-end gap-1.5 px-5 py-4 font-display text-base tracking-widest uppercase border-b-2 transition-all duration-150
                  ${isActive
                    ? "text-bio-black border-bio-lime bg-bio-lime"
                    : "text-bio-gray border-transparent hover:text-bio-black hover:border-bio-black"
                  }`
                }
              >
                <span className="font-mono text-[9px] mb-0.5 opacity-50">{item.num}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 border-2 border-bio-black bg-transparent hover:bg-bio-black group transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span className={`block w-5 h-0.5 bg-bio-black group-hover:bg-bio-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-bio-black group-hover:bg-bio-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-bio-black group-hover:bg-bio-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-bio-white border-b-2 border-bio-black">
          <ul className="flex flex-col divide-y-2 divide-bio-mid">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-6 py-4 font-display text-2xl tracking-widest uppercase transition-colors
                    ${isActive ? "bg-bio-lime text-bio-black" : "text-bio-black hover:bg-bio-light"}`
                  }
                >
                  <span className="font-mono text-xs text-bio-gray">{item.num}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
