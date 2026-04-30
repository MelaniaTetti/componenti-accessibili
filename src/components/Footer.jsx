export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white p-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-black text-slate-950">A11yKit</h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
          A compact accessible component library built with React and Tailwind CSS.
        </p>

        <nav className="mt-6 flex gap-4" aria-label="Footer navigation">
          <a
            href="#home"
            className="rounded text-sm text-slate-600 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
          >
            Home
          </a>

          <a
            href="#components"
            className="rounded text-sm text-slate-600 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
          >
            Components
          </a>

          <a
            href="#about"
            className="rounded text-sm text-slate-600 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
          >
            About
          </a>
        </nav>
      </div>
    </footer>
  );
}