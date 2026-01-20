import { useNavigate, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "VeneBus | Viajes" },
  { name: "description", content: "Consulta tu viaje sin iniciar sesión" },
];

export default function Viajes() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-background-dark dark:via-background-dark dark:to-background-dark flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl">
        <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none p-10 sm:p-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Viajes</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">Consulte su viaje</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Consulte su viaje sin necesidad de hacer login! Basta con introducir los datos a continuación.
          </p>

          <div className="mt-10 space-y-6 text-left">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Código de reserva</label>
              <input
                type="text"
                placeholder="Ej. ABC123456"
                className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">Fecha de viaje</label>
              <input
                type="date"
                className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-900 dark:text-white"
              />
            </div>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                onClick={() => navigate("/exito")}
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-cyan-500 text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Consultar
              </button>
            </div>

            <div className="pt-4 text-center space-y-3">
              <p className="text-sm text-slate-500 dark:text-slate-400">O si ya tienes una cuenta</p>
              <button
                type="button"
                onClick={() => navigate("/iniciar-sesion")}
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white font-bold shadow-sm hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
              >
                Acceder a mi cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function HydrateFallback() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-8 animate-pulse">
      <section className="relative mb-12 rounded-3xl overflow-hidden min-h-[220px] bg-slate-200 dark:bg-slate-700" />
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="h-6 w-48 rounded bg-slate-200 dark:bg-slate-700" />
        <div className="flex items-center gap-2">
          <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="h-56 bg-slate-200 dark:bg-slate-700" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="h-6 w-64 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded-xl mt-4" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

