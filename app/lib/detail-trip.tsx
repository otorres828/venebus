import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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
export async function ensureLeafletIcons() {
  if (leafletIconsReady || typeof window === "undefined") return;
  const L = await import("leaflet");
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });
  leafletIconsReady = true;
}
