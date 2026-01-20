export type AmenidadProps = { icon: string; label: string };

export function Amenidad({ icon, label }: AmenidadProps) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
      <span className="material-icons text-sm text-primary">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

let leafletPromise: Promise<any> | null = null;

export async function loadLeaflet() {
  if (typeof window === "undefined") return Promise.reject("SSR");

  if (leafletPromise) return leafletPromise;

  if ((window as any).L) return Promise.resolve((window as any).L);

  if (!(document.getElementById("leaflet-css") instanceof HTMLLinkElement)) {
    const link = document.createElement("link");
    link.id = "leaflet-css";
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.crossOrigin = "";
    document.head.appendChild(link);
  }

  const existingScript = document.getElementById("leaflet-script") as HTMLScriptElement | null;

  leafletPromise = new Promise((resolve, reject) => {
    const resolveWithLib = () => resolve((window as any).L);

    if (existingScript) {
      existingScript.addEventListener("load", resolveWithLib, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "leaflet-script";
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = resolveWithLib;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  return leafletPromise;
}
