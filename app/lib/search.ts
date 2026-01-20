export type Destacado = {
  id: string;
  tag: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  precio: string;
};

const CIUDADES = [
  "Caracas",
  "Valencia",
  "Maracaibo",
  "Barquisimeto",
  "Puerto Ordaz",
  "Mérida",
  "Barinas",
  "Puerto La Cruz",
  "Barcelona",
  "Cumaná",
  "San Cristóbal",
];

const DESTINOS_BY_ORIGEN: Record<string, string[]> = {
  Caracas: ["Valencia", "Maracaibo", "Barquisimeto", "Mérida", "Puerto La Cruz"],
  Valencia: ["Caracas", "Puerto Ordaz", "Barquisimeto", "Barcelona"],
  Maracaibo: ["Barquisimeto", "Caracas", "Cumaná"],
  Barquisimeto: ["Maracaibo", "Caracas", "San Cristóbal"],
  "Puerto Ordaz": ["Valencia", "Barcelona", "Cumaná"],
  Mérida: ["Caracas", "Barinas", "San Cristóbal"],
  Barinas: ["Mérida", "San Cristóbal", "Valencia"],
  "Puerto La Cruz": ["Caracas", "Barcelona"],
  Barcelona: ["Puerto La Cruz", "Valencia"],
  Cumaná: ["Puerto Ordaz", "Maracaibo"],
  "San Cristóbal": ["Mérida", "Barinas"],
};

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function fetchOrigenes(query: string): Promise<string[]> {
  await delay(200);
  const q = query.trim().toLowerCase();
  return CIUDADES.filter((c) => c.toLowerCase().includes(q)).slice(0, 8);
}

export async function fetchDestinos(origen: string, query: string): Promise<string[]> {
  const base = DESTINOS_BY_ORIGEN[origen] ?? CIUDADES;
  const q = query.trim().toLowerCase();
  return base.filter((c) => c.toLowerCase().includes(q)).slice(0, 8);
}

export async function homeLoader() {
  const destacados: Destacado[] = [
    {
      id: "ccs-val",
      tag: "Recomendado",
      titulo: "Caracas → Valencia",
      descripcion:
        "Salidas cada 2 horas con buses climatizados y asientos reclinables.",
      duracion: "2h 15m",
      precio: "$11.200",
    },
    {
      id: "val-pzo",
      tag: "Express",
      titulo: "Valencia → Puerto Ordaz",
      descripcion:
        "Ruta nocturna con snack y toma de corriente en cada asiento.",
      duracion: "7h 30m",
      precio: "$24.800",
    },
    {
      id: "mar-bar",
      tag: "Popular",
      titulo: "Maracaibo → Barquisimeto",
      descripcion:
        "Incluye wifi a bordo y dos maletas en bodega sin costo extra.",
      duracion: "5h 10m",
      precio: "$18.400",
    },
  ];
  return { destacados };
}
