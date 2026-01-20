import { useNavigate, useLoaderData, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { resultadosLoader, processTrips, parseTypes } from "@lib/trip";
import type { SortKey, SlotFilter } from "@lib/trip";
import type { Route } from "./+types/resultados";
export const loader = resultadosLoader;

export function meta({ data }: Route.MetaArgs) {
  const title = data?.meta?.title ?? "VeneBus | Resultados de viajes";
  const description =
    data?.meta?.description ?? "Explora opciones de viaje en Venezuela";

  return [
    { title },
    { name: "description", content: description },
  ];
}

export default function Resultados() {
  const navigate = useNavigate();
  const { trips } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const origen = searchParams.get("origen") ?? "Caracas";
  const destino = searchParams.get("destino") ?? "Maracaibo";
  const minUsd = searchParams.get("minUsd") ?? "10";
  const maxUsd = searchParams.get("maxUsd") ?? "100";
  const sort = (searchParams.get("sort") as SortKey) ?? "barato";
  const slot = (searchParams.get("slot") as SlotFilter) ?? undefined;
  const typesParam = searchParams.get("types") ?? "";
  const fechaParam = searchParams.get("fecha") ?? formatISODate(new Date());

  const initialBusTypes = parseTypes(typesParam);

  const [busTypes, setBusTypes] = useState<number[]>(initialBusTypes); // 1: Ejecutivo, 2: Buscama, 3: Semi-cama

  const [displayTrips, setDisplayTrips] = useState(() =>
    processTrips({
      origen,
      destino,
      minUsd: Number(minUsd),
      maxUsd: Number(maxUsd),
      slot,
      sort,
      busTypes: initialBusTypes,
    })
  );

  function setTypesInUrl(nextTypes: number[]) {
    const next = new URLSearchParams(searchParams);
    if (nextTypes.length > 0) {
      next.set("types", nextTypes.join(","));
    } else {
      next.delete("types");
    }
    setSearchParams(next, { replace: true });
  }

  function toggleBusType(id: number) {
    setBusTypes((prev) => {
      const nextTypes = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      setTypesInUrl(nextTypes);
      return nextTypes;
    });
  }

  function updateParam(name: string, value?: string, allowEmpty = false) {
    const next = new URLSearchParams(searchParams);
    const trimmed = value?.trim() ?? "";
    if (value != null && (allowEmpty || trimmed !== "")) {
      next.set(name, value);
    } else {
      next.delete(name);
    }
    setSearchParams(next, { replace: true });
  }

  function formatISODate(d: Date) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function startOfDay(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  function addDays(base: Date, days: number) {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return d;
  }

  function parseISODateLocal(iso: string) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, (m || 1) - 1, d || 1);
  }

  const today = startOfDay(new Date());
  const selectedDate = startOfDay(parseISODateLocal(fechaParam));
  const selectedISO = formatISODate(selectedDate);

  function setSelectedDate(next: Date) {
    const clamped = startOfDay(next) < today ? today : startOfDay(next);
    updateParam("fecha", formatISODate(clamped));
  }

  function prevDay() {
    const next = addDays(selectedDate, -1);
    if (next >= today) setSelectedDate(next);
  }

  function nextDay() {
    setSelectedDate(addDays(selectedDate, 1));
  }

  const windowDates: Date[] = [addDays(selectedDate, -2), addDays(selectedDate, -1), selectedDate, addDays(selectedDate, 1)];

  function formatShort(d: Date) {
    const dow = new Intl.DateTimeFormat("es-VE", { weekday: "short" }).format(d).replace(".", "");
    const day = String(d.getDate()).padStart(2, "0");
    const monthShort = new Intl.DateTimeFormat("es-VE", { month: "short" }).format(d).replace(".", "");
    return `${dow}, ${day}/${monthShort}`;
  }

  function formatLong(d: Date) {
    const dow = new Intl.DateTimeFormat("es-VE", { weekday: "long" }).format(d);
    const day = d.getDate();
    const monthLong = new Intl.DateTimeFormat("es-VE", { month: "long" }).format(d);
    return `${dow}, ${day} de ${monthLong}`;
  }

  function handlePriceChange(name: "minUsd" | "maxUsd", value: string) {
    updateParam(name, value, true);
  }

  function toggleSlot(next: SlotFilter) {
    if (slot === next) {
      updateParam("slot", undefined);
      return;
    }
    updateParam("slot", next);
  }

  function changeSort(next: SortKey) {
    updateParam("sort", next);
  }

  function resetFilters() {
    const next = new URLSearchParams(searchParams);
    next.set("minUsd", "10");
    next.set("maxUsd", "150");
    next.set("sort", "barato");
    next.delete("slot");
    next.delete("types");
    setSearchParams(next, { replace: true });
    setBusTypes([]);
  }

  useEffect(() => {
    const t = setTimeout(async () => {
      const nextTypes = parseTypes(typesParam);
      let typesToUse = busTypes;
      if (
        nextTypes.length !== busTypes.length ||
        nextTypes.some((n) => !busTypes.includes(n))
      ) {
        setBusTypes(nextTypes);
        typesToUse = nextTypes;
      }

      const minN = minUsd ? Number(minUsd) : 0;
      const maxN = maxUsd ? Number(maxUsd) : undefined;
      const processed = processTrips({
        origen,
        destino,
        minUsd: minN,
        maxUsd: maxN,
        slot,
        sort,
        busTypes: typesToUse,
      });
      setDisplayTrips(processed);
    }, 250);
    return () => {
      clearTimeout(t);
    };
  }, [minUsd, maxUsd, origen, destino, slot, sort, busTypes, typesParam, fechaParam]);

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-8 min-h-screen bg-slate-50 dark:bg-background-dark text-[#111618] dark:text-white">
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <a className="hover:text-primary" href="#">Inicio</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-[#111618] dark:text-gray-300 font-semibold">{origen} a {destino}</span>
      </nav>

      <div className="flex gap-8">
        <aside className="w-72 shrink-0 hidden md:block">
          <div className="sticky top-28 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-lg font-bold">Filtros</h3>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                >
                  Reiniciar
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">Refina tu búsqueda para el viaje perfecto por Venezuela.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">schedule</span>
                <span className="text-sm font-bold uppercase tracking-wide">Horario de Salida</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => toggleSlot("manana")}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-4 cursor-pointer transition-colors ${slot === "manana" ? "bg-cyan-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                >
                  <span className="material-symbols-outlined text-sm">light_mode</span>
                  <p className="text-sm font-semibold leading-normal">Mañana</p>
                </button>
                <button
                  type="button"
                  onClick={() => toggleSlot("tarde")}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-4 cursor-pointer transition-colors ${slot === "tarde" ? "bg-cyan-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                >
                  <span className="material-symbols-outlined text-sm">wb_twilight</span>
                  <p className="text-sm font-semibold leading-normal">Tarde</p>
                </button>
                <button
                  type="button"
                  onClick={() => toggleSlot("noche")}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-4 cursor-pointer transition-colors ${slot === "noche" ? "bg-cyan-500 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                >
                  <span className="material-symbols-outlined text-sm">dark_mode</span>
                  <p className="text-sm font-semibold leading-normal">Noche</p>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">airline_seat_recline_extra</span>
                <span className="text-sm font-bold uppercase tracking-wide">Tipo de Bus</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl space-y-1">
                <label className="flex items-center gap-3 py-2 cursor-pointer group">
                  <input
                    className="h-5 w-5 rounded border-gray-300 border-2 bg-transparent text-primary focus:ring-primary/20"
                    type="checkbox"
                    checked={busTypes.includes(1)}
                    onChange={() => toggleBusType(1)}
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Ejecutivo</span>
                </label>
                <label className="flex items-center gap-3 py-2 cursor-pointer group">
                  <input
                    className="h-5 w-5 rounded border-gray-300 border-2 bg-transparent text-primary focus:ring-primary/20"
                    type="checkbox"
                    checked={busTypes.includes(2)}
                    onChange={() => toggleBusType(2)}
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Buscama</span>
                </label>
                <label className="flex items-center gap-3 py-2 cursor-pointer group">
                  <input
                    className="h-5 w-5 rounded border-gray-300 border-2 bg-transparent text-primary focus:ring-primary/20"
                    type="checkbox"
                    checked={busTypes.includes(3)}
                    onChange={() => toggleBusType(3)}
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Semi-cama</span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">payments</span>
                <span className="text-sm font-bold uppercase tracking-wide">Rango de Precio (USD)</span>
              </div>
              <div className="px-2 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Mínimo</label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">$</span>
                      <input
                        type="number"
                        min={0}
                        value={minUsd}
                        onChange={(e) => handlePriceChange("minUsd", e.target.value)}
                        className="w-full pl-6 pr-3 py-2 text-sm rounded-lg border bg-white dark:bg-background-dark dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Máximo</label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">$</span>
                      <input
                        type="number"
                        min={0}
                        value={maxUsd}
                        onChange={(e) => handlePriceChange("maxUsd", e.target.value)}
                        className="w-full pl-6 pr-3 py-2 text-sm rounded-lg border bg-white dark:bg-background-dark dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">Introduce un rango en USD.</p>
              </div>
            </div>

            <div className="bg-cyan-500/10 border bg-cyan-500/20 p-4 rounded-xl">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <p className="text-xs font-bold text-primary mb-1">Seguridad Primero</p>
                  <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-400">Todos nuestros operadores aliados están verificados y cumplen con protocolos de seguridad.</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Parte Derecha */}
        <div className="flex-1 space-y-6">
          <div className="bg-white dark:bg-background-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-2 flex items-center gap-2">
            <button
              type="button"
              onClick={prevDay}
              className={`size-10 rounded-xl flex items-center justify-center border ${selectedDate <= today ? "cursor-not-allowed text-gray-400 border-gray-200 dark:border-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"}`}
              disabled={selectedDate <= today}
              aria-label="Día anterior"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex-1 flex items-center justify-center gap-2">
              {windowDates.map((d) => {
                const iso = formatISODate(d);
                const isSelected = iso === selectedISO;
                const isPast = startOfDay(d) < today;
                return (
                  <button
                    key={iso}
                    type="button"
                    onClick={() => !isPast && setSelectedDate(d)}
                    className={`flex-1 sm:flex-none px-4 py-3 rounded-xl border text-center transition-all ${isSelected ? "bg-primary text-white border-primary" : "bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"} ${isPast && !isSelected ? "opacity-50 cursor-not-allowed" : ""}`}
                    aria-pressed={isSelected}
                  >
                    <strong className="sm:hidden text-sm">{formatShort(d)}</strong>
                    <strong className="hidden sm:block text-sm">{formatLong(d)}</strong>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={nextDay}
              className="size-10 rounded-xl flex items-center justify-center border hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
              aria-label="Día siguiente"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="flex items-center justify-between bg-white dark:bg-background-dark p-2 rounded-xl  dark:border-gray-800 shadow-sm text-gray-700 dark:text-gray-200">
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => changeSort("barato")}
                className={`px-5 py-2.5 text-sm font-bold rounded-lg border cursor-pointer transition-colors ${sort === "barato" ? "bg-cyan-500/20 text-primary" : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
              >
                Más Barato
              </button>
              <button
                type="button"
                onClick={() => changeSort("rapido")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${sort === "rapido" ? "bg-cyan-500/20 text-primary border" : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
              >
                Más Rápido
              </button>
              <button
                type="button"
                onClick={() => changeSort("temprano")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${sort === "temprano" ? "bg-cyan-500/20 text-primary border" : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
              >
                Más Temprano
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium px-4">{displayTrips.length} viajes encontrados</p>
          </div>

          <div className="grid gap-4">
            {displayTrips.map((trip) => (
              <div key={trip.id} className={`group bg-white dark:bg-background-dark  dark:border-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300 relative overflow-hidden ${trip.soldOut ? "opacity-90" : ""}`}>
                {!trip.soldOut && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                )}
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
                  <div className="w-full lg:w-48 flex flex-row lg:flex-col items-center lg:items-start gap-4">
                    <div className="size-16 rounded-lg bg-gray-50 dark:bg-gray-800 p-2 flex items-center justify-center  dark:border-gray-700">
                      <img className={`w-full object-contain ${trip.soldOut ? "grayscale" : "grayscale group-hover:grayscale-0 transition-all"}`} src={trip.logo} alt={trip.operator} />
                    </div>
                    <div>
                      <h4 className={`font-heading font-bold text-sm tracking-tight ${trip.soldOut ? "text-gray-500 dark:text-gray-400" : ""}`}>{trip.operator}</h4>
                      <p className={`text-xs ${trip.soldOut ? "text-gray-400 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"} font-medium`}>{trip.service}</p>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div className={`text-center lg:text-left ${trip.soldOut ? "text-gray-400 dark:text-gray-500" : ""}`}>
                      <div className="font-heading text-2xl font-bold">{trip.originTime}</div>
                      <div className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-tighter">{trip.originLabel}</div>
                    </div>
                    <div className="flex-1 px-4 flex flex-col items-center">
                      <div className={`text-[10px] font-bold ${trip.soldOut ? "text-gray-300 dark:text-gray-500" : "text-gray-400 dark:text-gray-500"} uppercase tracking-widest mb-2`}>{trip.duration}</div>
                      <div className="relative w-full h-px bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className={`absolute size-2 rounded-full ${trip.soldOut ? "bg-gray-200 dark:bg-gray-700" : "bg-gray-300 dark:bg-gray-600"} left-0`}></div>
                        <div className={`absolute size-2 rounded-full ${trip.soldOut ? "bg-gray-200 dark:bg-gray-700" : "bg-cyan-500"} right-0`}></div>
                        <span className={`material-symbols-outlined ${trip.soldOut ? "text-gray-200" : "text-primary"} bg-white dark:bg-background-dark px-1 text-base`}>directions_bus</span>
                      </div>
                      <div className="flex gap-3 mt-3">
                        {trip.amenities.map((amenity) => (
                          <span key={amenity} className={`material-symbols-outlined text-lg ${trip.soldOut ? "text-gray-300" : "text-gray-300 hover:text-primary transition-colors cursor-help"}`} title={amenity}>
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`text-center lg:text-right ${trip.soldOut ? "text-gray-400 dark:text-gray-500" : ""}`}>
                      <div className="font-heading text-2xl font-bold">{trip.destinationTime}</div>
                      <div className="text-xs font-bold text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-tighter">{trip.destinationLabel}</div>
                    </div>
                  </div>

                  <div className="lg:w-48 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-gray-800 pt-6 lg:pt-0 lg:pl-8 gap-4">
                    <div className="text-right">
                      {!trip.soldOut ? (
                        <>
                          <div className="flex items-center gap-1 justify-end">
                            <span className="text-xs font-bold text-gray-400">$</span>
                            <span className="font-heading text-3xl font-bold text-[#111618] dark:text-white">{trip.priceUsd}</span>
                            <span className="text-xs font-bold text-gray-400">USD</span>
                          </div>
                          <div className="text-[11px] font-bold text-gray-400 dark:text-gray-500">≈ {trip.priceVes}</div>
                          {typeof trip.seatsLeft === "number" && trip.seatsLeft > 0 && (
                            <div className="text-xs font-medium text-accent-coral mt-1">Solo {trip.seatsLeft} asientos libres</div>
                          )}
                        </>
                      ) : (
                        <div className="flex items-center gap-1 justify-end">
                          <span className="font-heading text-2xl font-bold text-gray-400 uppercase tracking-widest">Agotado</span>
                        </div>
                      )}
                    </div>
                    {!trip.soldOut ? (
                      <button
                        type="button"
                        onClick={() => navigate(`/viaje?${searchParams.toString()}`)}
                        className="bg-cyan-500 hover:bg-cyan-500/90 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md group-hover:shadow-primary/30"
                      >
                        Seleccionar
                      </button>
                    ) : (
                      <button className="bg-gray-100 text-gray-400 font-bold py-3 px-8 rounded-xl cursor-not-allowed" disabled>Agotado</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
}
