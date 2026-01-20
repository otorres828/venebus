import { useEffect, useState,useRef } from "react";

type AutocompleteInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onFetchSuggestions?: (query: string) => Promise<string[]>;
  suggestions?: string[];
  onSelected?: (value: string) => void;
  minQueryLength?: number;
  enableDropdown?: boolean;
  hasError?: boolean;
};

export function AutocompleteInput({ label, id, placeholder, value, onChange, onFetchSuggestions, suggestions, onSelected, minQueryLength = 0, enableDropdown = true, hasError = false }: AutocompleteInputProps) {
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [highlight, setHighlight] = useState(-1);
  const containerRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    const q = value.trim();
    if (!enableDropdown || q.length < minQueryLength) {
      setFiltered([]);
      return undefined;
    }

    // If suggestions are provided externally, just use them
    if (Array.isArray(suggestions)) {
      setFiltered(suggestions);
      return undefined;
    }

    const fetchSuggestions = async () => {
      if (!onFetchSuggestions) return;
      const list = await onFetchSuggestions(q);
      setFiltered(list);
    };

    const fetchTimer = setTimeout(fetchSuggestions, 200);
    return () => clearTimeout(fetchTimer);
  }, [value, onFetchSuggestions, enableDropdown, minQueryLength, suggestions]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setHighlight(-1);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      if (enableDropdown) setOpen(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (open && highlight >= 0 && highlight < filtered.length) {
        e.preventDefault();
        onChange(filtered[highlight]);
        setOpen(false);
        setHighlight(-1);
        onSelected?.(filtered[highlight]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setHighlight(-1);
    }
  };

  const select = (item: string) => {
    onChange(item);
    setOpen(false);
    setHighlight(-1);
    onSelected?.(item);
  };

  return (
    <label ref={containerRef} className="relative flex flex-col gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onFocus={() => enableDropdown && setOpen(true)}
        onClick={() => enableDropdown && setOpen(true)}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className={`h-12 w-full rounded-xl border ${hasError ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"} bg-slate-50 px-3 text-sm text-slate-900 shadow-inner shadow-slate-100 focus:bg-white focus:outline-none focus:ring-2`}
        aria-invalid={hasError}
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1 z-40 max-h-56 overflow-auto rounded-xl border border-slate-200 bg-white shadow-md"
        >
          {filtered.map((item, idx) => (
            <li
              key={item}
              role="option"
              aria-selected={highlight === idx}
              onMouseEnter={() => setHighlight(idx)}
              onMouseDown={(e) => {
                e.preventDefault();
                select(item);
              }}
              className={`${highlight === idx ? "bg-slate-50" : ""} cursor-pointer px-3 py-2 text-sm text-slate-800 hover:bg-slate-50`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}
