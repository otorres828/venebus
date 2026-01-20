import { useCallback } from "react";
import { useNavigate } from "react-router";

export function meta() {
  return [
    { title: "VeneBus | Checkout" },
    { name: "description", content: "Completa tu pago para confirmar tus asientos" },
  ];
}

export default function Checkout() {
  const navigate = useNavigate();
  const copyValue = useCallback((value: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(value).catch(() => { });
    }
  }, []);

  return (

    <main className="flex flex-1 justify-center py-10 px-4 text-slate-800 dark:text-slate-200">
      <div className="layout-content-container flex flex-col max-w-7xl mx-auto w-full gap-8">
        {/* Encabezado */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Pago Seguro</h1>
          <p className="text-[#637f88] dark:text-gray-400 text-base">Completa tu pago para confirmar tus asientos de Caracas a Valencia.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna izquierda: Pasos de pago */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Tabs */}
            <div className="bg-white dark:bg-[#1a2b31] rounded-xl shadow-sm border border-[#dce3e5] dark:border-[#2a3e44] overflow-hidden">
              <div className="flex border-b border-[#dce3e5] dark:border-[#2a3e44] overflow-x-auto">
                <button className="flex-1 flex flex-col items-center justify-center py-4 px-2 gap-2 border-b-2 border-primary text-primary transition-all">
                  <span className="material-symbols-outlined">smartphone</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Pago Móvil</span>
                </button>
                {/* <button className="flex-1 flex flex-col items-center justify-center py-4 px-2 gap-2 border-b-2 border-transparent text-[#637f88] hover:text-primary transition-all">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Zelle</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center py-4 px-2 gap-2 border-b-2 border-transparent text-[#637f88] hover:text-primary transition-all">
                  <span className="material-symbols-outlined">account_balance</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Transferencia</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center py-4 px-2 gap-2 border-b-2 border-transparent text-[#637f88] hover:text-primary transition-all">
                  <span className="material-symbols-outlined">credit_card</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Tarjeta</span>
                </button> */}
              </div>
              {/* Contenido del método seleccionado */}
              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold">Transferencia Pago Móvil</h3>
                  <p className="text-sm text-[#637f88] dark:text-gray-400">Por favor realiza la transferencia a los siguientes datos:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-background-light dark:bg-background-dark/50 p-4 rounded-lg border border-[#dce3e5] dark:border-[#2a3e44] relative group">
                      <p className="text-[10px] uppercase font-bold text-[#637f88] mb-1">Banco</p>
                      <p className="font-bold">Banesco (0134)</p>
                      <button onClick={() => copyValue("Banesco (0134)")} className="absolute top-2 right-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                    <div className="bg-background-light dark:bg-background-dark/50 p-4 rounded-lg border border-[#dce3e5] dark:border-[#2a3e44] relative group">
                      <p className="text-[10px] uppercase font-bold text-[#637f88] mb-1">Teléfono</p>
                      <p className="font-bold">0412-5551234</p>
                      <button onClick={() => copyValue("0412-5551234")} className="absolute top-2 right-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                    <div className="bg-background-light dark:bg-background-dark/50 p-4 rounded-lg border border-[#dce3e5] dark:border-[#2a3e44] relative group">
                      <p className="text-[10px] uppercase font-bold text-[#637f88] mb-1">Cédula / RIF</p>
                      <p className="font-bold">V-25.123.456</p>
                      <button onClick={() => copyValue("V-25.123.456")} className="absolute top-2 right-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                    <div className="bg-background-light dark:bg-background-dark/50 p-4 rounded-lg border border-[#dce3e5] dark:border-[#2a3e44] relative group">
                      <p className="text-[10px] uppercase font-bold text-[#637f88] mb-1">Monto a Pagar</p>
                      <p className="font-bold text-primary">1,245.50 VES</p>
                      <button onClick={() => copyValue("1,245.50 VES")} className="absolute top-2 right-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="border-[#dce3e5] dark:border-[#2a3e44]" />
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-bold">Referencia de Pago (Últimos 6 dígitos)</label>
                  <div className="relative">
                    <input className="w-full h-12 rounded-lg border-[#dce3e5] dark:border-[#2a3e44] bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-lg font-bold" placeholder="Ej: 839210" type="text" />
                    <span className="absolute right-4 top-3 material-symbols-outlined text-[#637f88]">verified_user</span>
                  </div>
                  <p className="text-xs text-[#637f88]">Al confirmar, nuestro sistema validará la transacción inmediatamente.</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold h-14 rounded-xl text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95" onClick={() => navigate("/por-confirmar")}>
              Confirmar pago
              <span className="material-symbols-outlined">lock</span>
            </div>
            <div className="flex justify-center items-center gap-4 text-[#637f88] dark:text-gray-500 py-4">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">Cifrado SSL</span>
              </div>
              <div className="h-4 w-[1px] bg-[#dce3e5]"></div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">security</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">Pago seguro</span>
              </div>
            </div>
          </div>

            <div className="lg:col-span-4 space-y-6">
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
                        <span className="material-symbols-outlined text-primary">event_seat</span>
                        <p className="text-sm font-bold">Asientos seleccionados</p>
                      </div>
                      <p className="font-bold text-primary">24, 25</p>
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
        </div>

        {/* Pie de página */}
        <footer className="mt-8 border-t border-[#dce3e5] dark:border-[#2a3e44] pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-50">
              <div className="size-4">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <p className="text-xs font-bold">© 2026 VeneBus Venezuela S.A.</p>
            </div>
            <div className="flex gap-6">
              <a className="text-xs font-bold text-[#637f88] hover:text-primary transition-colors" href="#">Política de Privacidad</a>
              <a className="text-xs font-bold text-[#637f88] hover:text-primary transition-colors" href="#">Términos de Servicio</a>
              <a className="text-xs font-bold text-[#637f88] hover:text-primary transition-colors" href="#">Contacto</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );

}
