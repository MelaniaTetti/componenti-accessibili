import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Components", href: "#components" },
  { label: "About", href: "#about" },
];

const megaItems = [
  {
    title: "Design",
    links: ["UI Systems", "Accessibility", "Brand Identity"],
  },
  {
    title: "Build",
    links: ["React", "Frontend", "Design Tokens"],
  },
  {
    title: "Strategy",
    links: ["Research", "Content", "Product Direction"],
  },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!megaRef.current || megaRef.current.contains(e.target)) return;
      setIsMegaOpen(false);
    }

    function handleEscape(e) {
      if (e.key === "Escape") {
        setIsMegaOpen(false);
        setIsMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="rounded-lg text-lg font-black tracking-tight text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
          aria-label="A11yKit home"
        >
          A11yKit
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
            >
              {item.label}
            </a>
          ))}

          <div className="relative" ref={megaRef}>
            <button
              type="button"
              aria-expanded={isMegaOpen}
              aria-controls="mega-menu"
              onClick={() => setIsMegaOpen((open) => !open)}
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
            >
              Resources
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition ${isMegaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMegaOpen && (
              <div
                id="mega-menu"
                className="absolute right-0 mt-3 w-[680px] rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/10"
              >
                <div className="grid grid-cols-3 gap-6">
                  {megaItems.map((column) => (
                    <section key={column.title} aria-labelledby={`${column.title}-heading`}>
                      <h2
                        id={`${column.title}-heading`}
                        className="text-sm font-bold text-slate-950"
                      >
                        {column.title}
                      </h2>

                      <ul className="mt-3 space-y-1">
                        {column.links.map((link) => (
                          <li key={link}>
                            <a
                              href="#components"
                              className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          <Button>Contact</Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-slate-950 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 md:hidden"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {[...navItems, { label: "Resources", href: "#components" }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button className="mt-2 w-full">Contact</Button>
          </div>
        </div>
      )}
    </header>
  );
}