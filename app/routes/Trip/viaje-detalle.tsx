import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "leaflet/dist/leaflet.css";
import { Amenidad, ensureLeafletIcons } from "@lib/detail-trip";
import type { Route } from "./+types/viaje-detalle";

const routeCoords: [number, number][] = [
  [10.4806, -66.9036], // Caracas
  [10.0932, -67.8683], // Valencia
];

export function meta(_: Route.MetaArgs) {
  return [
    { title: "VeneBus | Resultados de viajes" },
    { name: "description", content: "Explora opciones de viaje en Venezuela" },
  ];
}

export default function ViajeDetalle() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isClient, setIsClient] = useState(false);
  const [leafletLib, setLeafletLib] = useState<typeof import("leaflet") | null>(null);
  const [mapComponents, setMapComponents] = useState<{
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    Popup: any;
    Polyline: any;
    useMap: any;
  } | null>(null);
  const travelDateLabel = new Intl.DateTimeFormat("es-VE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date());

  useEffect(() => {
    setIsClient(true);
    ensureLeafletIcons();
    import("leaflet").then((mod) => setLeafletLib(mod));
    import("react-leaflet").then((mod) =>
      setMapComponents({
        MapContainer: mod.MapContainer,
        TileLayer: mod.TileLayer,
        Marker: mod.Marker,
        Popup: mod.Popup,
        Polyline: mod.Polyline,
        useMap: mod.useMap,
      })
    );
  }, []);

  const DynamicFitBounds = ({
    positions,
    useMapHook,
    leafletLib: leaflet,
  }: {
    positions: [number, number][];
    useMapHook: any;
    leafletLib: typeof import("leaflet");
  }) => {
    const map = useMapHook();

    useEffect(() => {
      if (!positions.length) return;
      const bounds = leaflet.latLngBounds(positions);
      map.fitBounds(bounds, { padding: [20, 20] });
    }, [map, positions, leaflet]);

    return null;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 text-slate-800 dark:text-slate-200">
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Confirma tu itinerario</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Caracas <span className="mx-2 text-primary">→</span> Valencia</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h2 className="font-semibold flex items-center gap-2">
                <span className="material-icons text-primary">map</span>
                Ruta
              </h2>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Vía Autopista Regional del Centro</span>
            </div>
            <div className="z-0 h-80 w-full relative bg-slate-100 dark:bg-slate-900">
              {isClient && mapComponents && leafletLib ? (
                <mapComponents.MapContainer
                  center={routeCoords[0]}
                  zoom={7}
                  scrollWheelZoom={false}
                  zoomControl={false}
                  className="absolute inset-0"
                >
                  <mapComponents.TileLayer
                    attribution="© OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <mapComponents.Polyline positions={routeCoords} pathOptions={{ color: "#17a1cf", weight: 5, opacity: 0.9 }} />
                  <mapComponents.Marker position={routeCoords[0]}>
                    <mapComponents.Popup>Origen: Terminal Oriente</mapComponents.Popup>
                  </mapComponents.Marker>
                  <mapComponents.Marker position={routeCoords[1]}>
                    <mapComponents.Popup>Destino: Big Low Center</mapComponents.Popup>
                  </mapComponents.Marker>
                  <DynamicFitBounds useMapHook={mapComponents.useMap} leafletLib={leafletLib} positions={routeCoords} />
                </mapComponents.MapContainer>
              ) : (
                <div className="absolute inset-0 animate-pulse bg-slate-100 dark:bg-slate-900" aria-hidden="true"></div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="font-semibold mb-8">Cronograma del Viaje</h3>
            <div className="relative pl-8 space-y-12">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-background-dark z-10"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">07:30 AM</span>
                    <span className="text-xs text-slate-500 ml-2 align-middle">{travelDateLabel}</span>
                    <h4 className="font-bold text-lg mt-1">Terminal de Oriente (ADON)</h4>
                    <p className="text-sm text-slate-500 mt-1 max-w-md">Autopista Caracas-Guarenas, Petare. Se recomienda llegar 45 minutos antes.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                    <span className="material-icons text-primary">confirmation_number</span>
                    <div className="text-xs">
                      <p className="font-semibold">Andén 4</p>
                      <p className="text-slate-500">Puerta Principal</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative py-2">
                <div className="absolute -left-[29px] top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center bg-white dark:bg-background-dark z-10">
                  <span className="material-icons text-sm text-slate-300">schedule</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="h-px flex-1 bg-slate-100 dark:bg-slate-700"></span>
                  <span className="text-xs font-medium uppercase tracking-widest whitespace-nowrap">Duración estimada: 2h 45m</span>
                  <span className="h-px flex-1 bg-slate-100 dark:bg-slate-700"></span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1 w-5 h-5 rounded-full bg-slate-400 border-4 border-white dark:border-background-dark z-10"></div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <span className="text-2xl font-bold">10:15 AM</span>
                    <span className="text-xs text-slate-500 ml-2 align-middle">{travelDateLabel}</span>
                    <h4 className="font-bold text-lg mt-1">Terminal Big Low Center</h4>
                    <p className="text-sm text-slate-500 mt-1 max-w-md">Valencia, Estado Carabobo. Punto de llegada principal.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3 opacity-60">
                    <span className="material-icons">place</span>
                    <div className="text-xs">
                      <p className="font-semibold">Llegada General</p>
                      <p className="text-slate-500">Andén de descarga</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-icons text-primary">directions_bus</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Rodovias de Venezuela</h3>
                <p className="text-xs text-slate-500">Unidad #442 • Ejecutivo</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Comodidades a bordo</h4>
              <div className="grid grid-cols-2 gap-3">
                <Amenidad icon="ac_unit" label="Aire Acond." />
                <Amenidad icon="wifi" label="Wi-Fi Gratis" />
                <Amenidad icon="chair" label="Asiento Semi-Cama" />
                <Amenidad icon="usb" label="Carga USB" />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Equipaje permitido</span>
                <span className="font-semibold">23kg + Bolso de mano</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Cancelación</span>
                <span className="text-emerald-500 font-semibold">Gratis hasta 24h</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <span className="material-icons text-sm">receipt_long</span>
              Resumen de Pago
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Boleto Adulto (x1)</span>
                <span className="font-medium">$15.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Costo de servicio</span>
                <span className="font-medium">$1.50</span>
              </div>
              <div className="h-px bg-primary/20 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Subtotal</span>
                <span className="text-lg font-bold text-primary">$16.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-700 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] z-40">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="hidden md:block">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Total a pagar</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">$16.50</span>
              <span className="text-sm text-slate-400">o Bs. 595,00</span>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              className="flex-1 md:flex-none px-8 py-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold rounded-lg transition-all"
              onClick={() => navigate(`/resultados${location.search || ""}`)}
            >
              Cancelar
            </button>
            <button
              onClick={() => navigate(`/pasajeros${location.search || ""}`)}
              className="flex-[2] md:flex-none px-12 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              Continuar
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

