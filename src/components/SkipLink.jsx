export default function SkipLink({
  href = "#main-content",
  children = "Skip to main content",
}) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
    >
      {children}
    </a>
  );
}