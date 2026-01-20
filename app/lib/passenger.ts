export type PassengerType = "adulto" | "nino";

export type Passenger = {
  id: string;
  type: PassengerType;
  name: string;
  docPrefix: "V-" | "E-" | "P-";
  docNumber: string;
  email: string;
  phone: string;
};

let idCounter = 1;

export function createPassenger(overrides: Partial<Passenger> = {}): Passenger {
  const id = overrides.id ?? `passenger-${idCounter++}`;
  return {
    id,
    type: overrides.type ?? "adulto",
    name: overrides.name ?? "",
    docPrefix: overrides.docPrefix ?? "V-",
    docNumber: overrides.docNumber ?? "",
    email: overrides.email ?? "",
    phone: overrides.phone ?? "",
  };
}
