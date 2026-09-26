export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(236,72,153,0.16),transparent_34%)] animate-light-sweep" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(124,58,237,0.18),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,5,26,0.9),transparent_55%)]" />
      <div className="ambient-grid absolute inset-0 opacity-40" />
    </div>
  );
}

export function GrainOverlay() {
  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <div className="vignette" aria-hidden />
    </>
  );
}
