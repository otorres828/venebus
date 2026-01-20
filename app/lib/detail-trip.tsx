const markerIcon2x = new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).toString();
const markerIcon = new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString();
const markerShadow = new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).toString();

export type AmenidadProps = { icon: string; label: string };

export function Amenidad({ icon, label }: AmenidadProps) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
      <span className="material-icons text-sm text-primary">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

let leafletIconsReady = false;
export function ensureLeafletIcons() {
  if (leafletIconsReady || typeof window === "undefined") return;
  // Dynamic import to avoid SSR issues while keeping URLs resolved by Vite.
  import("leaflet").then((L) => {
    // Prevent default imagePath prefixing which can duplicate URLs under Vite.
    (L.Icon.Default as any).imagePath = "";
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });
    leafletIconsReady = true;
  });
}
