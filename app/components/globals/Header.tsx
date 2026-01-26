import { useLocation, useNavigate } from "react-router";
import { ResultadosHeader } from "@globals/HeaderResult";
import DefaultHeader from "@globals/DefaultHeader";
import { Link } from "react-router";

function WizardHeader() {
  const navigate = useNavigate();
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f3f4] dark:border-[#2d3439] bg-slate-50/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Volver"
            >
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm font-medium">
              <span className="text-primary">Resumen</span>
              <span className="material-symbols-outlined text-xs text-slate-300">chevron_right</span>
              <span className="text-slate-400">Pasajeros</span>
              <span className="material-symbols-outlined text-xs text-slate-300">chevron_right</span>
              <span className="text-slate-400">Pago</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">ID Viaje: #VEN-2904</span>
          </div>
        </div>
      </header>
      {/* Menú móvil fijo abajo */}
      {/* <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-700 flex justify-around items-center h-16 lg:hidden">
        <Link to="/" className="flex flex-col items-center text-xs font-medium text-gray-500 hover:text-primary">
          <span className="material-symbols-outlined text-2xl">home</span>
          Inicio
        </Link>
        <Link to="/consultar-viaje" className="flex flex-col items-center text-xs font-medium text-gray-500 hover:text-primary">
          <span className="material-symbols-outlined text-2xl">search</span>
          Viajes
        </Link>
        <Link to="/promociones" className="flex flex-col items-center text-xs font-medium text-gray-500 hover:text-primary">
          <span className="material-symbols-outlined text-2xl">local_offer</span>
          Promos
        </Link>
        <Link to="/ayuda" className="flex flex-col items-center text-xs font-medium text-gray-500 hover:text-primary">
          <span className="material-symbols-outlined text-2xl">help</span>
          Ayuda
        </Link>
      </nav> */}
    </>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const isWizard = pathname.startsWith("/pasajeros") || pathname.startsWith("/pagar");
  const isResultados = pathname.startsWith("/resultados") || pathname.startsWith("/viaje");
  const isPending = pathname.startsWith("/por-confirmar");
  if (isWizard) return <WizardHeader />;
  if (isResultados) return <ResultadosHeader />;
  if (isPending) return <DefaultHeader />;
  return <DefaultHeader />;
}
