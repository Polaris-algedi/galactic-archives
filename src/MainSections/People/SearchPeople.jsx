import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

export default function StarWarsSpeciesSelector({ setSelectedPerson }) {
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch species from SWAPI
    const fetchSpecies = async () => {
      try {
        const response = await axios.get(
          "https://swapi-api.alx-tools.com/api/species/",
        );
        setSpecies(response.data.results);
      } catch (error) {
        console.error("Error fetching species:", error);
      }
    };

    fetchSpecies();
  }, []);

  useEffect(() => {
    if (selectedSpecies) {
      // Fetch people of the selected species
      const fetchPeople = async () => {
        setLoading(true);
        try {
          const responses = await Promise.all(
            selectedSpecies.people.map((url) => axios.get(url)),
          );
          setPeople(responses.map((res) => res.data));
        } catch (error) {
          console.error("Error fetching people:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPeople();
    }
  }, [selectedSpecies]);

  return (
    <div className="container mx-auto justify-around p-4 dark:bg-gray-900 dark:text-white lg:flex">
      <div className="mx-auto mb-4 max-w-md ">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Select a Species
        </h1>
        <Listbox value={selectedSpecies} onChange={setSelectedSpecies}>
          <div className="relative">
            <ListboxButton className="w-full cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
              {selectedSpecies ? selectedSpecies.name : "Select a species"}
            </ListboxButton>
            <Transition
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg focus:outline-none dark:border-gray-700 dark:bg-gray-800">
                {species.map((specie) => (
                  <ListboxOption
                    key={specie.name}
                    className={({ active }) =>
                      `relative cursor-pointer select-none px-4 py-2 ${
                        active
                          ? "bg-indigo-600 text-white"
                          : "text-gray-900 dark:text-white"
                      }`
                    }
                    value={specie}
                  >
                    {specie.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="max-h-10 items-center lg:border-r-2 lg:border-gray-900 dark:lg:border-white" />

      <div className="mx-auto mt-8 max-h-80 max-w-md overflow-y-auto lg:mt-0">
        <h2 className="mb-4 text-center text-xl font-bold">People</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <ul
            className="rounded-md p-3 text-sm/6 text-black/50  transition dark:text-white/50   "
            aria-hidden="true"
          >
            {people.map((person) => (
              <button
                key={person.name}
                onClick={() => setSelectedPerson(person)}
              >
                <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
                  {person.name}
                </li>
                <hr />
              </button>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
