export default function ThemeBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-charcoal-950">
      <div
        className="pointer-events-none fixed inset-0 bg-grid-dark opacity-[0.28] [background-size:48px_48px]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-gradient-to-b from-charcoal-950/60 via-transparent to-zinc-950/20"
        aria-hidden
      />
      <div className="pointer-events-none fixed -left-32 top-0 h-[420px] w-[420px] rounded-full bg-zinc-900/30 blur-[120px]" />
      <div className="pointer-events-none fixed -right-20 top-1/3 h-[380px] w-[380px] rounded-full bg-zinc-800/20 blur-[100px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-zinc-900/12 blur-[90px]" />
      {children}
    </div>
  );
}
