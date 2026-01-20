export type Trip = {
    id: string;
    operator: string;
    service: string;
    service_id?: number;
    logo: string;
    originTime: string;
    originLabel: string;
    duration: string;
    destinationTime: string;
    destinationLabel: string;
    amenities: string[];
    priceUsd: number;
    priceVes: string;
    seatsLeft?: number;
    soldOut?: boolean;
};

type MetaShape = { title?: string; description?: string };

function parseHourToMinutes(time: string): number {
    // Assumes format "HH:MM AM/PM"
    const [hm, suffix] = time.trim().split(" ");
    if (!hm || !suffix) return 0;
    const [hStr, mStr] = hm.split(":");
    let h = Number(hStr);
    const m = Number(mStr ?? "0");
    if (suffix.toLowerCase() === "pm" && h !== 12) h += 12;
    if (suffix.toLowerCase() === "am" && h === 12) h = 0;
    return h * 60 + m;
}

function parseDurationMinutes(duration: string): number {
    // Expects "10h 30m" or "9h"
    const hMatch = duration.match(/(\d+)h/);
    const mMatch = duration.match(/(\d+)m/);
    const h = hMatch ? Number(hMatch[1]) : 0;
    const m = mMatch ? Number(mMatch[1]) : 0;
    return h * 60 + m;
}



export type SlotFilter = "manana" | "tarde" | "noche" | undefined;
export type SortKey = "barato" | "rapido" | "temprano";

export function filterTripsByPrice(trips: Trip[], minUsd: number, maxUsd?: number) {
    return trips.filter((t) => t.priceUsd >= minUsd && (maxUsd === undefined || t.priceUsd <= maxUsd));
}

export function filterTripsBySlot(trips: Trip[], slot: SlotFilter) {
    if (!slot) return trips;
    return trips.filter((t) => {
        const minutes = parseHourToMinutes(t.originTime);
        const m3 = 3 * 60;
        const m12 = 12 * 60;
        const m18 = 18 * 60;
        if (slot === "manana") {
            return minutes >= m3 && minutes < m12;
        }
        if (slot === "tarde") {
            return minutes >= m12 && minutes < m18;
        }
        // noche: 18:00-24:00 or 00:00-03:00
        return minutes >= m18 || minutes < m3;
    });
}

export function filterTripsByBusType(trips: Trip[], busTypes?: number[]) {
    if (!busTypes || busTypes.length === 0) return trips;
    return trips.filter((t) => typeof t.service_id === "number" && busTypes.includes(t.service_id));
}

export function sortTrips(trips: Trip[], sort: SortKey) {
    const copy = [...trips];
    if (sort === "barato") {
        copy.sort((a, b) => a.priceUsd - b.priceUsd);
        return copy;
    }
    if (sort === "rapido") {
        copy.sort((a, b) => parseDurationMinutes(a.duration) - parseDurationMinutes(b.duration));
        return copy;
    }
    // temprano: hora de salida más temprano
    copy.sort((a, b) => parseHourToMinutes(a.originTime) - parseHourToMinutes(b.originTime));
    return copy;
}

export function setSearchParam(search: string, name: string, value: string) {
    const params = new URLSearchParams(search);
    const trimmed = value.trim();
    if (trimmed) params.set(name, trimmed); else params.delete(name);
    return params.toString();
}

export function parseTypes (param: string): number[] {
    return param
      .split(",")
      .map((v) => Number(v.trim()))
      .filter((n) => Number.isFinite(n) && n >= 1 && n <= 3);
}

export function getMockTrips(origen: string, destino: string): Trip[] {
    const SERVICE_LABELS: Record<number, string> = {
        1: "Ejecutivo",
        2: "Buscama",
        3: "Semi cama",
    };
    return [
        {
            id: "trip-1",
            operator: "Aeroexpresos",
            service_id: 2,
            service: SERVICE_LABELS[2],
            logo:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC9H-U8X1mUJv0ANz0HFkW4SUPk1pSdsLQM5uIhpG7Y8zn_Wx-KuuxZ13mBmVrpROe6ea4fl9aCKJwpiTSKrD9sd63SETj0km7gajkol2YAu32ZZbnPgox3Hp2kTjdAQfdiFTU1dMw6AEbO74E7R6IxN7AW4OVwNqVGojYbeJa2BXKCLv39KHyIuN1HiP-F6kRc5DP0zH2D0B5ud0frCk3xz1M6tNDTTcC2ybnYF8552B0zaG2R2zuZeucFLZs4cRo_v8PiBi7Yxg",
            originTime: "08:30 PM",
            originLabel: `${origen} (La Bandera)`,
            duration: "80h 30m",
            destinationTime: "07:00 AM",
            destinationLabel: `${destino} (Terminal)`,
            amenities: ["wifi", "ac_unit", "power"],
            priceUsd: 35,
            priceVes: "1,230 VES",
            seatsLeft: 3,
        },
        {
            id: "trip-2",
            operator: "Peli Express",
            service_id: 1,
            service: SERVICE_LABELS[1],
            logo:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBffeKYPFipt3xUmUuI_pDVHhUk7lx4GSZlYrpzklBAHUqdjPY6Ox25hI2LWeecUN5EABQk5sjVQYMb0G6TBml6DJz-jx-628Mah1gtejp7RbeuCQppP2TShwxfhBgx4ZJJmxuI4aLvB4z1KTGiW6RQG2Y1eIaULMFukUdeJcWpAJlyfyHi_MzV0BNYIqxaapiG_hp1lovSvciyypxyT7sDdSqD93igioBlLlmWsH-oZwaFwjMJx64V-zRaXxDHvYbEyTyDhYCS7g",
            originTime: "10:00 AM",
            originLabel: `${origen} (Terminal)`,
            duration: "7h 00m",
            destinationTime: "07:00 AM",
            destinationLabel: `${destino} (Centro)`,
            amenities: ["ac_unit", "tv"],
            priceUsd: 60,
            priceVes: "980 VES",
        },
        {
            id: "trip-3",
            operator: "Peli Express",
            service_id: 3,
            service: SERVICE_LABELS[3],
            logo:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBffeKYPFipt3xUmUuI_pDVHhUk7lx4GSZlYrpzklBAHUqdjPY6Ox25hI2LWeecUN5EABQk5sjVQYMb0G6TBml6DJz-jx-628Mah1gtejp7RbeuCQppP2TShwxfhBgx4ZJJmxuI4aLvB4z1KTGiW6RQG2Y1eIaULMFukUdeJcWpAJlyfyHi_MzV0BNYIqxaapiG_hp1lovSvciyypxyT7sDdSqD93igioBlLlmWsH-oZwaFwjMJx64V-zRaXxDHvYbEyTyDhYCS7g",
            originTime: "10:00 PM",
            originLabel: `${origen} (Terminal)`,
            duration: "12h 00m",
            destinationTime: "07:00 AM",
            destinationLabel: `${destino} (Centro)`,
            amenities: ["ac_unit", "tv"],
            priceUsd: 75,
            priceVes: "980 VES",
        },
        {
            id: "trip-4",
            operator: "Peli Express",
            service_id: 3,
            service: SERVICE_LABELS[3],
            logo:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBffeKYPFipt3xUmUuI_pDVHhUk7lx4GSZlYrpzklBAHUqdjPY6Ox25hI2LWeecUN5EABQk5sjVQYMb0G6TBml6DJz-jx-628Mah1gtejp7RbeuCQppP2TShwxfhBgx4ZJJmxuI4aLvB4z1KTGiW6RQG2Y1eIaULMFukUdeJcWpAJlyfyHi_MzV0BNYIqxaapiG_hp1lovSvciyypxyT7sDdSqD93igioBlLlmWsH-oZwaFwjMJx64V-zRaXxDHvYbEyTyDhYCS7g",
            originTime: "9:00 AM",
            originLabel: `${origen} (Terminal)`,
            duration: "6h 00m",
            destinationTime: "07:00 AM",
            destinationLabel: `${destino} (Centro)`,
            amenities: ["ac_unit", "tv"],
            priceUsd: 80,
            priceVes: "980 VES",
        },
        {
            id: "trip-5",
            operator: "Global Express",
            service_id: 3,
            service: SERVICE_LABELS[3],
            logo:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDDHBi9D7l7A5wgHtv9XvnnzK9Bok7mJXDkSjDTAO7OIjBn0I3d9JPMwhAqOT4qWYD9FbABHBthk4e3THJmk10Law1R65PfIrujcPTDjz3mtlC-YDRQU9Jsprd5dV5AeE6mJ0e9eer95F9Y4zi3q3U_LiRp0q4V4SpOVxYxV0tcte5Q-Ltuu9zMDLCeP8NMUFqYLK6eIB5FDIS1ERcZ8nDu6ikXpp_7z85Cnv52rAaujw8nT-Od-_4WAfmaaWPZ_iQIwTfHsXIptQ",
            originTime: "06:00 AM",
            originLabel: `${origen} (La Bandera)`,
            duration: "18h 00m",
            destinationTime: "05:00 PM",
            destinationLabel: `${destino} (Terminal)`,
            amenities: ["schedule"],
            priceUsd: 150,
            priceVes: "Agotado",
            soldOut: true,
        },
        {
            id: "trip-6",
            operator: "Peli Express",
            service_id: 1,
            service: SERVICE_LABELS[1],
            logo:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBffeKYPFipt3xUmUuI_pDVHhUk7lx4GSZlYrpzklBAHUqdjPY6Ox25hI2LWeecUN5EABQk5sjVQYMb0G6TBml6DJz-jx-628Mah1gtejp7RbeuCQppP2TShwxfhBgx4ZJJmxuI4aLvB4z1KTGiW6RQG2Y1eIaULMFukUdeJcWpAJlyfyHi_MzV0BNYIqxaapiG_hp1lovSvciyypxyT7sDdSqD93igioBlLlmWsH-oZwaFwjMJx64V-zRaXxDHvYbEyTyDhYCS7g",
            originTime: "10:00 PM",
            originLabel: `${origen} (Terminal)`,
            duration: "7h 20m",
            destinationTime: "07:00 AM",
            destinationLabel: `${destino} (Centro)`,
            amenities: ["ac_unit", "tv"],
            priceUsd: 15,
            priceVes: "980 VES",
        },
        {
            id: "trip-7",
            operator: "Peli Express",
            service_id: 1,
            service: SERVICE_LABELS[1],
            logo:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBffeKYPFipt3xUmUuI_pDVHhUk7lx4GSZlYrpzklBAHUqdjPY6Ox25hI2LWeecUN5EABQk5sjVQYMb0G6TBml6DJz-jx-628Mah1gtejp7RbeuCQppP2TShwxfhBgx4ZJJmxuI4aLvB4z1KTGiW6RQG2Y1eIaULMFukUdeJcWpAJlyfyHi_MzV0BNYIqxaapiG_hp1lovSvciyypxyT7sDdSqD93igioBlLlmWsH-oZwaFwjMJx64V-zRaXxDHvYbEyTyDhYCS7g",
            originTime: "10:00 PM",
            originLabel: `${origen} (Terminal)`,
            duration: "3h 00m",
            destinationTime: "07:00 AM",
            destinationLabel: `${destino} (Centro)`,
            amenities: ["ac_unit", "tv"],
            priceUsd: 31,
            priceVes: "980 VES",
        },
    ];
}

export function processTrips({
    origen = "Caracas",
    destino = "Maracaibo",
    minUsd,
    maxUsd,
    slot,
    sort,
    busTypes,
}: {
    origen?: string;
    destino?: string;
    minUsd: number;
    maxUsd?: number;
    slot: SlotFilter;
    sort: SortKey;
    busTypes?: number[];
}) {
    const sourceTrips = getMockTrips(origen, destino);
    const byPrice = filterTripsByPrice(sourceTrips, minUsd, maxUsd);
    const bySlot = filterTripsBySlot(byPrice, slot);
    const byType = filterTripsByBusType(bySlot, busTypes);

    return sortTrips(byType, sort);
}


function formatDateEs(iso?: string) {
    if (!iso) return undefined;
    const [y, m, d] = iso.split("-").map(Number);
    const dt = new Date(y, (m || 1) - 1, d || 1);
    return new Intl.DateTimeFormat("es-VE", { weekday: "long", day: "numeric", month: "long" }).format(dt);
}

export async function resultadosLoader({ request }: { request: Request }) {
    const url = new URL(request.url);
    const origen = url.searchParams.get("origen") ?? "Caracas";
    const destino = url.searchParams.get("destino") ?? "Maracaibo";
    const minUsdParam = url.searchParams.get("minUsd");
    const maxUsdParam = url.searchParams.get("maxUsd");
    const slot = (url.searchParams.get("slot") as SlotFilter) ?? undefined;
    const sort = (url.searchParams.get("sort") as SortKey) ?? "barato";
    const types = parseTypes(url.searchParams.get("types") ?? "");
    const now = new Date();
    const todayISO = now.toISOString().slice(0, 10);
    const fechaISO = url.searchParams.get("fecha") ?? todayISO;
    const defaultMin = 10;
    const defaultMax = 100;

    const minUsdRaw = minUsdParam === null ? String(defaultMin) : minUsdParam;
    const maxUsdRaw = maxUsdParam === null ? String(defaultMax) : maxUsdParam;
    const minUsdNum = Number(minUsdRaw);
    const maxUsdNum = maxUsdRaw.trim() === "" ? undefined : Number(maxUsdRaw);
    const minUsd = Number.isFinite(minUsdNum) ? minUsdNum : defaultMin;
    const maxUsd = maxUsdNum === undefined ? undefined : Number.isFinite(maxUsdNum) ? maxUsdNum : defaultMax;

    const buildMeta = (trips: Trip[], meta?: MetaShape) => ({
        title: meta?.title ?? `VeneBus | ${origen} a ${destino}`,
        description:
            meta?.description ?? `Encuentra opciones para viajar de ${origen} a ${destino}`,
    });

    const processed = processTrips({ origen, destino, minUsd, maxUsd, slot, sort, busTypes: types });
    return { trips: processed, meta: buildMeta(processed), fecha: fechaISO, today: todayISO };

}
