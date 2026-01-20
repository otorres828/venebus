import { useState } from "react";
import { useNavigate } from "react-router";
import { createPassenger, type Passenger, type PassengerType } from "@lib/passenger";

export function meta() {
  return [
    { title: "VeneBus | Pasajeros" },
    { name: "description", content: "Ingresa los datos de los viajeros" },
  ];
}

export default function Pasajeros() {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState<Passenger[]>([
    createPassenger({ name: "", docNumber: "", email: "", phone: "" }),
  ]);

  const updatePassenger = (id: string, updated: Partial<Passenger>) => {
    setPassengers((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const addPassenger = () => {
    setPassengers((prev) => {
      if (prev.length >= 5) return prev;
      return [...prev, createPassenger()];
    });
  };

  const removePassenger = (id: string) => {
    setPassengers((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 text-slate-800 dark:text-slate-200">

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Añade los pasajeros</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Caracas <span className="mx-2 text-primary">→</span> Valencia</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">


          <form className="space-y-6">
            {passengers.map((p, idx) => (
              <PassengerCard
                key={p.id}
                index={idx + 1}
                passenger={p}
                onChange={(updated) => updatePassenger(p.id, updated)}
                onRemove={idx > 0 ? () => removePassenger(p.id) : undefined}
                isPrimary={idx === 0}
              />
            ))}

            {passengers.length < 5 && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={addPassenger}
                  className="px-4 h-11 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">person_add</span>
                  Añadir pasajero
                </button>
              </div>
            )}
          </form>
        </div>

        <aside className="lg:col-span-1 space-y-6">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white dark:bg-white/5 rounded-2xl shadow-xl shadow-black/5 border border-[#f0f4f4] dark:border-white/5 overflow-hidden">
              <div className="bg-primary/5 p-6 border-b border-[#f0f4f4] dark:border-white/5">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">confirmation_number</span>
                  Resumen del viaje
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex flex-col gap-4 relative">
                  <div className="absolute left-[15px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-primary/30"></div>
                  <div className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-white dark:bg-background-dark border-4 border-primary z-10"></div>
                    <div>
                      <p className="text-xs font-bold opacity-50 uppercase tracking-widest leading-none mb-1">Origen</p>
                      <p className="font-bold">Caracas (Terminal La Bandera)</p>
                      <p className="text-sm opacity-70">Mañana, 08:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-8 rounded-full bg-primary z-10 flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold opacity-50 uppercase tracking-widest leading-none mb-1">Destino</p>
                      <p className="font-bold">Maracaibo (Terminal Central)</p>
                      <p className="text-sm opacity-70">Día siguiente, 06:00 AM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background-light dark:bg-white/5 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <p className="text-sm font-bold">Cantidad de asientos</p>
                  </div>
                  <p className="font-bold text-primary">{passengers.length}</p>
                </div>


              </div>


            </div>

            <div className="bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-[#f0f4f4] dark:border-white/5 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">sell</span>
                <h3 className="text-lg font-bold">Cupón de descuento</h3>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="INGRESA TU CÓDIGO"
                  className="flex-1 uppercase text-sm font-semibold bg-background-light dark:bg-white/5 border border-[#e5ebec] dark:border-white/10 rounded-xl h-12 px-4 tracking-widest focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  className="px-4 h-12 rounded-xl bg-primary text-white font-bold shadow-md shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all"
                >
                  Aplicar
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Solo se aplicará un cupón por compra. Revisa mayúsculas/minúsculas.</p>
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
        </aside>
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
            <button className="flex-1 md:flex-none px-8 py-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold rounded-lg transition-all">
              Cancelar
            </button>
            <button onClick={() => navigate("/pagar")} className="flex-[2] md:flex-none px-12 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
              Confirmar y Continuar
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}


type PassengerCardProps = {
  index: number;
  passenger: Passenger;
  onChange: (updated: Partial<Passenger>) => void;
  onRemove?: () => void;
  isPrimary?: boolean;
};

function PassengerCard({ index, passenger, onChange, onRemove, isPrimary = false }: PassengerCardProps) {
  const handleClear = () => {
    onChange({
      name: "",
      docNumber: "",
      email: "",
      phone: "",
      docPrefix: "V-",
      type: "adulto",
    });
  };

  const handleSave = () => {
    console.log("Pasajero guardado", passenger);
  };

  return (
    <div className="bg-white dark:bg-white/5 rounded-xl p-8 shadow-sm border border-[#f0f4f4] dark:border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
      <div className="flex items-center gap-4 mb-6">
        <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">{index}</div>
        <h2 className="text-xl font-bold">Pasajero {index}</h2>
        <div className="ml-auto flex items-center gap-3">
          <select
            value={passenger.type}
            onChange={(e) => onChange({ type: e.target.value as PassengerType })}
            className="bg-background-light dark:bg-white/5 border-none rounded-lg focus:ring-2 focus:ring-primary h-10 px-3 text-sm font-semibold"
            disabled={isPrimary}
          >
            <option value="adulto">Adulto</option>
            <option value="nino">Niño</option>
          </select>
          {!isPrimary && onRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="size-10 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center"
              title="Eliminar pasajero"
            >
              <span className="material-symbols-outlined text-base">delete</span>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold opacity-70">Nombre completo</label>
          <input
            type="text"
            value={passenger.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Ej. Juan Pérez"
            className="bg-background-light dark:bg-white/5 border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4"
          />
        </div>

        {passenger.type === "nino" ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold opacity-70">Fecha de nacimiento</label>
            <input
              type="date"
              className="bg-background-light dark:bg-white/5 border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold opacity-70">Documento de identidad</label>
            <div className="flex gap-2">
              <select
                value={passenger.docPrefix}
                onChange={(e) => onChange({ docPrefix: e.target.value as Passenger["docPrefix"] })}
                className="bg-background-light dark:bg-white/5 border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-2 text-sm font-bold w-20"
              >
                <option value="V-">V-</option>
                <option value="E-">E-</option>
                <option value="P-">P-</option>
              </select>
              <input
                type="text"
                value={passenger.docNumber}
                onChange={(e) => onChange({ docNumber: e.target.value })}
                placeholder="12345678"
                className="flex-1 bg-background-light dark:bg-white/5 border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4"
              />
            </div>
          </div>
        )}

        {passenger.type === "adulto" && isPrimary && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold opacity-70">Número de teléfono</label>
            <div className="flex items-center bg-background-light dark:bg-white/5 rounded-lg px-4 gap-2 focus-within:ring-2 focus-within:ring-primary">
              <span className="text-sm font-bold opacity-50">+58</span>
              <input
                type="tel"
                value={passenger.phone}
                onChange={(e) => onChange({ phone: e.target.value })}
                placeholder="412 000 0000"
                className="flex-1 bg-transparent border-none h-12 p-0 focus:ring-0"
              />
            </div>
          </div>
        )}

        {passenger.type === "adulto" && isPrimary && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold opacity-70">Correo electrónico</label>
            <input
              type="email"
              value={passenger.email}
              onChange={(e) => onChange({ email: e.target.value })}
              placeholder="correo@ejemplo.com"
              className="bg-background-light dark:bg-white/5 border-none rounded-lg focus:ring-2 focus:ring-primary h-12 px-4"
            />
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <a href="#" className="text-primary hover:text-blue-700 underline underline-offset-2 text-sm font-semibold">
          Seleccionar pasajero frecuente
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleClear}
            className="px-4 h-11 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            Limpiar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 h-11 rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
