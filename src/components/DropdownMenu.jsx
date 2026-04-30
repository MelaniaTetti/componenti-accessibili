import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const firstItemRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!wrapperRef.current || wrapperRef.current.contains(e.target)) return;
      setIsOpen(false);
    }

    function handleEscape(e) {
      if (e.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleButtonKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      setTimeout(() => firstItemRef.current?.focus(), 0);
    }
  }

  return (
    <div className="relative inline-block" ref={wrapperRef}>
      <Button
        type="button"
        variant="secondary"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleButtonKeyDown}
      >
        Actions
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {isOpen && (
        <div
          id="dropdown-menu"
          role="menu"
          aria-label="Component actions"
          className="absolute left-0 z-30 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
        >
          {["View documentation", "Copy component", "Open GitHub"].map(
            (item, index) => (
              <button
                key={item}
                ref={index === 0 ? firstItemRef : null}
                role="menuitem"
                type="button"
                className="block w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}