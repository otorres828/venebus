// import { useLoaderData } from "react-router";
import { homeLoader } from "@lib/search";
import Busqueda from "@components/Busqueda";
import type { Route } from "./+types/page";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Venebus | Compra de pasajes" },
    { name: "description", content: "Busca y compra pasajes de bus en minutos" },
  ];
}

export const clientLoader  = homeLoader;

export default function Home() {
  // const data = useLoaderData<typeof clientLoader >();
  return (
    <main className="bg-slate-50 text-slate-900">

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-14 pt-12">

        <div className="lg:col-span-12 text-center space-y-4 mb-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-[#111618] dark:text-white tracking-tight leading-tight">
            Viaja por toda <span className="text-primary italic">Venezuela</span>
          </h1>
          <p className="text-lg text-[#637f88] dark:text-gray-400 max-w-2xl mx-auto">
            Reserva tus boletos de autobús de forma rápida y segura con los mejores operadores del país.
          </p>
        </div>

        <Busqueda />

        <section className="pb-16 px-6">
          <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#1a1f23] via-[#2d3439] to-[#1a1f23] rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-[#2d3439]">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-coral/20 border border-accent-coral/30 text-accent-coral mb-6">
                  <span className="material-symbols-outlined text-lg animate-pulse">bolt</span>
                  <span className="text-xs font-bold uppercase tracking-widest leading-none mt-0.5">Venta Relámpago</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                  ¡40% de Descuento en la ruta <span className="text-primary italic">Caracas - Valencia</span>!
                </h2>
                <p className="text-gray-400 text-lg mb-8">Aprovecha nuestras tarifas flash por tiempo limitado. Solo para salidas seleccionadas este fin de semana.</p>
                <button className="bg-cyan-500 text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#1591bc] transition-all shadow-lg shadow-primary/20 mx-auto lg:mx-0">
                  Obtener Oferta
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 w-full max-w-sm">
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest text-center mb-6">La oferta termina en:</p>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="size-16 md:size-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center border bg-cyan-500/30 text-white text-3xl font-heading font-bold">
                      00
                    </div>
                    <span className="text-xs text-white/40 font-bold mt-2 uppercase">Horas</span>
                  </div>
                  <div className="text-3xl font-bold text-white/20 pt-4">:</div>
                  <div className="flex flex-col items-center">
                    <div className="size-16 md:size-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center border bg-cyan-500/30 text-white text-3xl font-heading font-bold">
                      42
                    </div>
                    <span className="text-xs text-white/40 font-bold mt-2 uppercase">Min</span>
                  </div>
                  <div className="text-3xl font-bold text-white/20 pt-4">:</div>
                  <div className="flex flex-col items-center">
                    <div className="size-16 md:size-20 bg-accent-coral/20 rounded-2xl flex items-center justify-center border border-accent-coral/30 text-accent-coral text-3xl font-heading font-bold">
                      15
                    </div>
                    <span className="text-xs text-white/40 font-bold mt-2 uppercase">Seg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-24 -left-24 size-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 size-96 bg-accent-coral/10 rounded-full blur-3xl"></div>
            <div className="absolute right-12 top-12 opacity-10">
              <span className="material-symbols-outlined text-[160px] text-white rotate-12">confirmation_number</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#f5f7f8] dark:bg-[#1c2226]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-heading font-bold dark:text-white">Rutas Populares</h2>
                <p className="text-[#637f88] dark:text-gray-400 mt-2">Los destinos favoritos de nuestros viajeros esta semana</p>
              </div>
              <a className="text-primary font-bold flex items-center gap-1 group hover:underline" href="#">
                Ver todas
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-white dark:bg-[#252b30] rounded-2xl overflow-hidden border border-[#f0f3f4] dark:border-[#2d3439] hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-accent-coral text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Hot Deal</div>
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    data-alt="Pico Bolivar in Merida Venezuela landscapes"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBh0QBTk5C85JTQwSx115V5DI6TTpBMn0hk_WkllLny7PrxsNQ03A81tpBMOWu1LQruJEztbzI8bOfGdx9hNJyE-MUqLlQy1ulnwkltr3ZsakFOlQkaHKTRvdxI6uCMrhggq0lIin2FBzEJKqnZEvS2S8L7UnU5KUSgK7bbzDSErrKJiSf4xr62BUqD778vdbqpH_73zeOuQmh9ZeqWhc_R3q5JKaPQ1ltJiulJkjr98LzPte-JzDcZcg8AAzUHKNwdMzrGxftd1w')" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-xl">Caracas ↔ Mérida</p>
                    <p className="text-white/80 text-sm">Desde $35.00</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#637f88]">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    12h 30m
                  </div>
                  <button className="text-primary font-bold text-sm">Reservar</button>
                </div>
              </div>
              <div className="group bg-white dark:bg-[#252b30] rounded-2xl overflow-hidden border border-[#f0f3f4] dark:border-[#2d3439] hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    data-alt="Beach sunset in Puerto La Cruz Anzoategui"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAo9WNFl3RjlJoMclRm2fCmE_6g1G6E-LDg_W2Um4ab63QCxQE9f_pEWEhwWiXmMS5HnZFaY__42jgdQHLSoKo1I0iw_oY5ZipXjZqpVFUym3d0dN2l_7NfvP4nnMsAW0cls2NDoUDtkqPCvz7hhz5kPXlNuW8v4fHwq25k14RpdU8oS9DL-3sEb7dYpQVx6yGPm1cWlslURgnDTBkkSMgI1JOihkgx5MBbTN7Dm2RmeySRlAerNOYSJN3oM5jQQB1iXo1Rz89L_Q')" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-xl">Valencia ↔ Puerto La Cruz</p>
                    <p className="text-white/80 text-sm">Desde $22.00</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#637f88]">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    5h 15m
                  </div>
                  <button className="text-primary font-bold text-sm">Reservar</button>
                </div>
              </div>
              <div className="group bg-white dark:bg-[#252b30] rounded-2xl overflow-hidden border border-[#f0f3f4] dark:border-[#2d3439] hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    data-alt="San Cristobal Tachira landscape architecture"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCorVZgkgEbn5r--5lvoUyksIj-jKLcHKQuV7RuievC68iQV9f37uqyYhsVob5Q7Pv_YHcAlJ0ldbPLYzlSbHnDpB9t1XqIDMQaG1AlnRbWO1XPpXQTTeAzIhfQiIhHz8gGrPRi96jvW8tT6UYpL0KCebpup5x_u6sWh9jOCXovlhIJQXtTDAhnq5k2iHOOu4ktpzkXGGEQjBsgzsbHUZE0U9ETndAnjGqhsXmicekpIzCTY_O68UC_bAXJWJSTDAYs6lW9ZqsqZA')" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-xl">Maracaibo ↔ San Cristóbal</p>
                    <p className="text-white/80 text-sm">Desde $28.00</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#637f88]">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    8h 45m
                  </div>
                  <button className="text-primary font-bold text-sm">Reservar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl border border-primary/10">
                <div className="bg-primary text-white size-12 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Operadores Verificados</h3>
                <p className="text-[#637f88] dark:text-gray-400">Trabajamos exclusivamente con las líneas de mayor trayectoria y seguridad en Venezuela.</p>
              </div>
              <div className="bg-accent-coral/5 dark:bg-accent-coral/10 p-8 rounded-3xl border border-accent-coral/10">
                <div className="bg-accent-coral text-white size-12 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">shield</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Pagos Seguros</h3>
                <p className="text-[#637f88] dark:text-gray-400">Paga en Bolívares o Divisas mediante Pago Móvil, Zelle o Tarjeta de Crédito.</p>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl border border-primary/10">
                <div className="bg-primary text-white size-12 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">Soporte 24/7</h3>
                <p className="text-[#637f88] dark:text-gray-400">Nuestro equipo está listo para ayudarte en cada paso de tu viaje, desde la reserva hasta el destino.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}


// Render a lightweight placeholder on the server; hydrate full UI on client
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

