import React from 'react';
import { Link, useLocation } from "react-router";

function DefaultHeader() {
  const { pathname } = useLocation();
  const isAuthRoute = pathname.startsWith("/iniciar-sesion") || pathname.startsWith("/registro") || pathname.startsWith("/registrarse");
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f3f4] dark:border-[#2d3439] bg-slate-50/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-3 md:px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Ir a inicio"
          >
            <div className="size-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">directions_bus</span>
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight">VeneBus</h2>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {!isAuthRoute && (
              <>
                <nav className="flex items-center gap-8">
                  <Link to="/consultar-viaje" className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Viajes</Link>
                  <Link to="/promociones" className="text-[#111618] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors cursor-pointer">Promos</Link>
                  <Link to="/ayuda" className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Ayuda</Link>
                </nav>
                <div className="flex items-center gap-3">
                  <Link to="/iniciar-sesion" className="text-sm font-bold text-gray-700 dark:text-gray-200 px-4 py-2.5 hover:text-primary transition-colors">Iniciar Sesión</Link>
                  <Link to="/registrarse" className="bg-cyan-500 text-white px-3 md:px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-cyan-500/90 transition-all shadow-lg shadow-primary/20">Registrarse</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
      {/* Menú móvil fijo abajo */}
      {!isAuthRoute && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-700 flex justify-around items-center h-16 lg:hidden">
          <Link
            to="/"
            className={`flex flex-col items-center text-xs font-medium ${
              pathname === "/" ? "text-primary font-bold" : "text-gray-500"
            } hover:text-primary`}
          >
            <span className="material-symbols-outlined text-2xl">home</span>
            Inicio
          </Link>
          <Link
            to="/consultar-viaje"
            className={`flex flex-col items-center text-xs font-medium ${
              pathname.startsWith("/consultar-viaje") ? "text-primary font-bold" : "text-gray-500"
            } hover:text-primary`}
          >
            <span className="material-symbols-outlined text-2xl">search</span>
            Viajes
          </Link>
          <Link
            to="/promociones"
            className={`flex flex-col items-center text-xs font-medium ${
              pathname.startsWith("/promociones") ? "text-primary font-bold" : "text-gray-500"
            } hover:text-primary`}
          >
            <span className="material-symbols-outlined text-2xl">local_offer</span>
            Promos
          </Link>
          <Link
            to="/ayuda"
            className={`flex flex-col items-center text-xs font-medium ${
              pathname.startsWith("/ayuda") ? "text-primary font-bold" : "text-gray-500"
            } hover:text-primary`}
          >
            <span className="material-symbols-outlined text-2xl">help</span>
            Ayuda
          </Link>
        </nav>
      )}
    </>
  );
}

export default DefaultHeader
