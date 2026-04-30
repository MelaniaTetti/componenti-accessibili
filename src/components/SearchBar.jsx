import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Search:", query);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-2 max-w-md"
    >
      {/* Label accessibile (non visibile) */}
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <input
        id="search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-1 px-3 py-2 text-sm bg-transparent outline-none text-slate-950 placeholder:text-slate-500"
      />

      <button
        type="submit"
        className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
      >
        Search
      </button>
    </form>
  );
}