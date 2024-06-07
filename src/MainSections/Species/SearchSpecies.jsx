import { useState } from "react";

export default function SearchSpecies({
  setSelectedClassification,
  classifications,
  relatedSpecies,
  setSelectedSpecies,
  loading,
}) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedClassification(query);
  };

  return (
    <>
      <div className="container mx-auto justify-around p-4 dark:bg-gray-900 dark:text-white lg:flex">
        <div className="mx-auto mb-4 max-w-md ">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              list="classifications"
              placeholder={loading ? "Loading..." : "Search by classification"}
              className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <datalist id="classifications">
              {classifications.map((classification, index) => (
                <option key={index} value={classification} />
              ))}
            </datalist>
            <button
              type="submit"
              className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              Search
            </button>
          </form>
        </div>

        <div className="max-h-10 items-center lg:border-r-2 lg:border-gray-900 dark:lg:border-white" />

        <div className="mx-auto mt-8 max-h-80 max-w-md overflow-y-auto lg:mt-0">
          <h2 className="mb-4 text-center text-xl font-bold">Species Names</h2>

          <ul
            className="rounded-md p-3 text-sm/6 text-black/50  transition dark:text-white/50   "
            aria-hidden="true"
          >
            {relatedSpecies.map((species) => (
              <button
                key={species.name}
                onClick={() => setSelectedSpecies(species)}
                className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5"
              >
                {species.name}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
