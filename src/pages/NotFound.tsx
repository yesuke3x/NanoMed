import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bio-white flex items-center justify-center px-6 pt-14">
      <div className="max-w-lg w-full border-2 border-bio-black">

        {/* Top strip */}
        <div className="bg-bio-red px-6 py-3 border-b-2 border-bio-black flex items-center gap-3">
          <span className="font-mono text-[10px] text-bio-white tracking-widest uppercase">Ошибка навигации</span>
        </div>

        {/* Content */}
        <div className="p-10 space-y-6 bg-bio-white">
          <p className="font-display text-[9rem] leading-none text-bio-black">404</p>
          <div className="border-l-4 border-bio-lime pl-5">
            <h1 className="font-display text-3xl text-bio-black">Страница не найдена</h1>
            <p className="text-sm text-bio-gray mt-2 font-mono">
              Нанобот не смог проложить маршрут к запрошенному адресу.
            </p>
          </div>
          <Link to="/" className="btn-brut btn-lime inline-flex">
            ← На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
