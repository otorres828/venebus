import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import InputField from "@globals/InputField";
import { AutocompleteInput } from "@globals/AutocompleteInput";

type BusquedaProps = {
  initialOrigen?: string;
  initialDestino?: string;
  initialFecha?: string;
  onSubmitted?: () => void;
};

export default function Busqueda({ initialOrigen, initialDestino, initialFecha, onSubmitted }: BusquedaProps) {
  const navigate = useNavigate();
  const [origen, setOrigen] = useState(initialOrigen ?? "");
  const [destino, setDestino] = useState(initialDestino ?? "");
  const [fecha, setFecha] = useState(initialFecha ?? "");

  const todayLocal = new Date();
  todayLocal.setHours(0, 0, 0, 0);
  const todayISO = `${todayLocal.getFullYear()}-${String(todayLocal.getMonth() + 1).padStart(2, "0")}-${String(todayLocal.getDate()).padStart(2, "0")}`;

  useEffect(() => {
    // If the component is remounted with new initial values, sync them once
    if (initialOrigen !== undefined) setOrigen(initialOrigen);
    if (initialDestino !== undefined) setDestino(initialDestino);
    if (initialFecha !== undefined) setFecha(initialFecha);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialOrigen, initialDestino, initialFecha]);

  const isDateReady = (() => {
    if (!fecha.trim()) return false;
    const parsed = new Date(`${fecha}T00:00:00`);
    return !Number.isNaN(parsed.getTime()) && parsed >= todayLocal;
  })();

  const isReady = origen.trim().length > 0 && destino.trim().length > 0 && isDateReady;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const o = origen.trim();
    const d = destino.trim();
    const f = fecha.trim();

    const { fetchOrigenes, fetchDestinos } = await import("../lib/search");

    const origenes = await fetchOrigenes(o);
    const origenValido = origenes.includes(o);
    if (!origenValido) {
      return;
    }

    const destinos = await fetchDestinos(o, "");
    const destinoValido = destinos.includes(d);
    if (!destinoValido) {
      return;
    }

    if (!f) {
      return;
    }

    const parsedDate = new Date(`${f}T00:00:00`);
    if (Number.isNaN(parsedDate.getTime())) {
      return;
    }

    if (parsedDate < todayLocal) {
      return;
    }

    const params = new URLSearchParams();
    params.set("origen", o);
    params.set("destino", d);
    params.set("fecha", f);
    params.set("minUsd", "10");
    params.set("maxUsd", "100");
    navigate(`/resultados?${params.toString()}`);
    if (onSubmitted) onSubmitted();
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md shadow-slate-200/60">
      <form className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" onSubmit={onSubmit}>
        <AutocompleteInput
          label="Origen"
          id="origen"
          placeholder="Ej: Caracas"
          value={origen}
          onChange={(v: string) => {
            setOrigen(v);
            setDestino("");
          }}
          onFetchSuggestions={async (q: string) => (await import("../lib/search")).fetchOrigenes(q)}
          onSelected={async (val: string) => {
            setOrigen(val);
            setDestino("");
            await (await import("../lib/search")).fetchDestinos(val, "");
          }}
          minQueryLength={3}
        />
        <AutocompleteInput
          label="Destino"
          id="destino"
          placeholder="Ej: Valencia"
          value={destino}
          onChange={(v: string) => {
            setDestino(v);
          }}
          onFetchSuggestions={async (q: string) => (await import("../lib/search")).fetchDestinos(origen, q)}
          enableDropdown={origen.trim().length > 0}
        />
        <InputField
          label="Fecha de salida"
          id="fecha"
          type="date"
          value={fecha}
          min={todayISO}
          onChange={(v) => {
            setFecha(v);
          }}
        />
        <div className="flex items-end">
          <button
            type="submit"
            disabled={!isReady}
            className={`flex h-12 w-full items-center justify-center rounded-xl px-4 text-sm font-semibold text-white transition ${isReady ? "bg-primary hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Buscar pasajes
          </button>
        </div>
      </form>
    </div>
  );
}


