import { useLocation, useNavigate } from "react-router";
import { ResultadosHeader } from "@globals/HeaderResult";

function DefaultHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuthRoute = pathname.startsWith("/iniciar-sesion") || pathname.startsWith("/registro") || pathname.startsWith("/registrarse");
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f3f4] dark:border-[#2d3439] bg-slate-50/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-3 md:px-6 h-20 flex items-center justify-between">
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

        <div className="flex items-center gap-6">
          {!isAuthRoute && (
            <>
              <nav className="hidden lg:flex items-center gap-8">
                <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/consultar-viaje')}>Viajes</div>
                <div className="text-[#111618] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/promociones')}>Promos</div>
                <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/ayuda')}>Ayuda</div>
              </nav>
              <div className="flex items-center gap-3">
                <button onClick={() => navigate('/iniciar-sesion')} className="text-sm font-bold text-gray-700 dark:text-gray-200 px-4 py-2.5 hover:text-primary transition-colors">Iniciar Sesión</button>
                <button onClick={() => navigate('/registrarse')} className="bg-cyan-500 text-white px-3 md:px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-cyan-500/90 transition-all shadow-lg shadow-primary/20">Registrarse</button>
              </div>
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
  const isWizard = pathname.startsWith("/pasajeros") || pathname.startsWith("/pagar");
  const isResultados = pathname.startsWith("/resultados") || pathname.startsWith("/viaje");
  const isPending = pathname.startsWith("/por-confirmar");
  if (isWizard) return <WizardHeader />;
  if (isResultados) return <ResultadosHeader />;
  if (isPending) return <DefaultHeader />;
  return <DefaultHeader />;
}
