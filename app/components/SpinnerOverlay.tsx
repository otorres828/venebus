type SpinnerOverlayProps = {
  message?: string;
};

export default function SpinnerOverlay({ message = "Cargando resultados…" }: SpinnerOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 text-primary">
        <span className="material-symbols-outlined animate-spin text-4xl">progress_activity</span>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{message}</p>
      </div>
    </div>
  );
}