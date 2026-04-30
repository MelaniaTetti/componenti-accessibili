export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition min-h-11 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-slate-950 text-white hover:bg-slate-800 active:bg-slate-700 disabled:bg-slate-300 disabled:text-slate-600",
    secondary:
      "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50 active:bg-slate-100 disabled:text-slate-400",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}