export type AmenidadProps = { icon: string; label: string };

export function Amenidad({ icon, label }: AmenidadProps) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
      <span className="material-icons text-sm text-primary">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

export async function loadLeaflet() {
  if (typeof window === "undefined") return Promise.reject("SSR");

  if (!(document.getElementById("leaflet-css") instanceof HTMLLinkElement)) {
    const link = document.createElement("link");
    link.id = "leaflet-css";
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.crossOrigin = "";
    document.head.appendChild(link);
  }

  const existingScript = document.getElementById("leaflet-script") as HTMLScriptElement | null;

  if (existingScript && (window as any).L) {
    return (window as any).L;
  }

  if (existingScript && !existingScript.dataset.loaded) {
    return new Promise((resolve) => {
      existingScript.addEventListener("load", () => resolve((window as any).L));
    });
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = "leaflet-script";
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.dataset.loaded = "true";
    script.onload = () => resolve((window as any).L);
    document.body.appendChild(script);
  });
}
