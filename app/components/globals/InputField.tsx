type InputFieldProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  min?: string | number;
  hasError?: boolean;
};

function InputField({ label, id, type = "text", placeholder, value, onChange, min, hasError = false }: InputFieldProps) {
  const isDate = type === "date";
  const baseClasses = `h-12 w-full rounded-xl border ${hasError ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"} bg-slate-50 px-3 text-sm text-slate-900 shadow-inner shadow-slate-100 focus:bg-white focus:outline-none focus:ring-2`;
  const dateClasses = isDate ? " pr-12 date-input-clean" : "";

  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          min={min}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses}${dateClasses}`}
          aria-invalid={hasError}
        />
        {isDate && (
          <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base text-slate-400">
            calendar_month
          </span>
        )}
      </div>
    </label>
  );
}

export default InputField
