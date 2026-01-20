import { useLocation, useNavigate } from "react-router";
import { ResultadosHeader } from "@globals/HeaderResult";

function DefaultHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuthRoute = pathname.startsWith("/iniciar-sesion") || pathname.startsWith("/registro") || pathname.startsWith("/registrarse");
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f3f4] dark:border-[#2d3439] bg-slate-50/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Ir a inicio"
        >
          <div className="size-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">directions_bus</span>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">VeneBus</h2>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          <div className="text-[#111618] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/consultar-viaje')}>Viajes</div>
          <div className="text-[#111618] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/promociones')}>Promos</div>
          <div className="text-[#111618] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/ayuda')}>Ayuda</div>
        </nav>
        <div className="flex gap-3">
          {!isAuthRoute && (
            <>
              <button onClick={() => navigate('/iniciar-sesion')} className="flex items-center justify-center rounded-xl h-11 px-5 bg-cyan-500/10 text-primary text-sm font-bold hover:bg-cyan-500/20 transition-all">
                <span>Iniciar Sesión</span>
              </button>
              <button onClick={() => navigate('/registrarse')} className="flex items-center justify-center rounded-xl h-11 px-5 bg-cyan-500 text-white text-sm font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all">
                <span>Registrarse</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}



function WizardHeader() {
  const navigate = useNavigate();
  return (
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
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const isWizard = pathname.startsWith("/pasajeros") || pathname.startsWith("/pagar") || pathname.startsWith("/exito");
  const isResultados = pathname.startsWith("/resultados") || pathname.startsWith("/viaje");
  if (isWizard) return <WizardHeader />;
  if (isResultados) return <ResultadosHeader />;
  return <DefaultHeader />;
}
