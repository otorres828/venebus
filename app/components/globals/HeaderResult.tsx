import { useSearchParams } from "react-router";
import { useState } from "react";
import Busqueda from "@components/Busqueda";
import { Link, useLocation } from "react-router";

export function ResultadosHeader() {

    const [searchParams] = useSearchParams();
    const origen = searchParams.get("origen") ?? "Caracas";
    const destino = searchParams.get("destino") ?? "Maracaibo";
    const fecha = searchParams.get("fecha") ?? "";
    const [editing, setEditing] = useState(false);

    const formattedFecha = (() => {
        if (!fecha) return "Fecha";
        const parts = fecha.split("-");
        if (parts.length !== 3) return "Fecha";
        const [y, m, d] = parts.map((p) => Number(p));
        if (!y || !m || !d) return "Fecha";
        const dt = new Date(y, m - 1, d);
        if (isNaN(dt.getTime())) return "Fecha";
        const month = dt.toLocaleDateString("es-VE", { month: "long" });
        const day = dt.toLocaleDateString("es-VE", { day: "numeric" });
        const monthCap = month.charAt(0).toUpperCase() + month.slice(1);
        return `${day} ${monthCap}`;
    })();

    const { pathname } = useLocation();

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-[1200px] mx-auto px-3 md:px-6 h-20 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-10">
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
                        <div className="hidden md:flex items-center gap-4 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold">{origen}</span>
                                <span className="material-symbols-outlined text-xs text-primary">arrow_forward</span>
                                <span className="text-sm font-semibold">{destino}</span>
                            </div>
                            <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                            <div className="text-xs text-gray-500 font-medium">{formattedFecha}</div>
                            <button
                                type="button"
                                onClick={() => setEditing((v) => !v)}
                                className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Editar búsqueda"
                            >
                                <span className="material-symbols-outlined text-sm">edit</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-6">
                        <nav className="flex items-center gap-8">
                            <Link to="/consultar-viaje" className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Viajes</Link>
                            <Link to="/promociones" className="text-[#111618] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors cursor-pointer">Promos</Link>
                            <Link to="/ayuda" className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Ayuda</Link>
                        </nav>
                        <div className="flex items-center gap-3">
                            <Link to="/iniciar-sesion" className="text-sm font-bold text-gray-700 dark:text-gray-200 px-4 py-2.5 hover:text-primary transition-colors">Iniciar Sesión</Link>
                            <Link to="/registrarse" className="bg-cyan-500 text-white px-3 md:px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-cyan-500/90 transition-all shadow-lg shadow-primary/20">Registrarse</Link>
                        </div>
                    </div>
                </div>
                {editing && (
                    <div className="max-w-[1200px] mx-auto px-6 pb-4">
                        <Busqueda initialOrigen={origen} initialDestino={destino} initialFecha={fecha} onSubmitted={() => setEditing(false)} />
                    </div>
                )}
            </header>
            {/* Menú móvil fijo abajo */}
            <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-700 flex justify-around items-center h-16 lg:hidden">
                <Link
                    to="/"
                    className={`flex flex-col items-center text-xs font-medium ${
                        pathname === "/" ? "text-primary font-bold" : "text-gray-500"
                    } hover:text-primary`}
                    aria-label="Ir a inicio"
                >
                    <span className="material-symbols-outlined text-2xl">home</span>
                    Inicio
                </Link>
                <Link
                    to="/consultar-viaje"
                    className={`flex flex-col items-center text-xs font-medium ${
                        pathname.startsWith("/consultar-viaje") ? "text-primary font-bold" : "text-gray-500"
                    } hover:text-primary`}
                    aria-label="Ir a viajes"
                >
                    <span className="material-symbols-outlined text-2xl">search</span>
                    Viajes
                </Link>
                <Link
                    to="/promociones"
                    className={`flex flex-col items-center text-xs font-medium ${
                        pathname.startsWith("/promociones") ? "text-primary font-bold" : "text-gray-500"
                    } hover:text-primary`}
                    aria-label="Ir a promos"
                >
                    <span className="material-symbols-outlined text-2xl">local_offer</span>
                    Promos
                </Link>
                <Link
                    to="/ayuda"
                    className={`flex flex-col items-center text-xs font-medium ${
                        pathname.startsWith("/ayuda") ? "text-primary font-bold" : "text-gray-500"
                    } hover:text-primary`}
                    aria-label="Ir a ayuda"
                >
                    <span className="material-symbols-outlined text-2xl">help</span>
                    Ayuda
                </Link>
                <Link
                    to="/iniciar-sesion"
                    className={`flex flex-col items-center text-xs font-medium ${
                        pathname.startsWith("/iniciar-sesion") ? "text-primary font-bold" : "text-gray-500"
                    } hover:text-primary`}
                    aria-label="Ir a perfil"
                >
                    <span className="material-symbols-outlined text-2xl">person</span>
                    Perfil
                </Link>
            </nav>
        </>
    );
}