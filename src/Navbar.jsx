import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Dialog, Switch } from "@headlessui/react";
import filmsIcon from "./assets/Stormtrooper-icon.png";
import peopleIcon from "./assets/Boba-Fett-icon.png";
import planetsIcon from "./assets/Death-Star-icon.png";
import speciesIcon from "./assets/Chewbacca-icon.png";
import starshipsIcon from "./assets/Millennium-Falcon-icon.png";
import vehiclesIcon from "./assets/R2D2-icon.png";
import starwarsIconDark from "./assets/star-wars-logo-black.svg";
import starwarsIconWhite from "./assets/star-wars-logo-white.svg";

import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Films", to: "films", src: filmsIcon, alt: "films" },
  { name: "People", to: "people", src: peopleIcon, alt: "people" },
  { name: "Planets", to: "planets", src: planetsIcon, alt: "planets" },
  { name: "Species", to: "species", src: speciesIcon, alt: "species" },
  { name: "Starships", to: "starships", src: starshipsIcon, alt: "starships" },
  { name: "Vehicles", to: "vehicles", src: vehiclesIcon, alt: "vehicles" },
];

export default function Navbar({ theme, islandingPage, handleThemeSwitch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const darkMode = islandingPage || theme === "dark";

  // get current location
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  console.log(currentPath);

  return (
    <header
      className={
        islandingPage
          ? "absolute inset-x-0 top-0 z-10 bg-transparent"
          : "bg-gray-50 dark:bg-gray-800"
      }
    >
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Star War</span>
            <img
              className="h-14 w-auto"
              src={darkMode ? starwarsIconWhite : starwarsIconDark}
              alt="Star Wars Logo"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 hover:bg-gray-800/20 dark:text-gray-300 dark:hover:bg-gray-500/20"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`hidden text-gray-800 dark:text-gray-300 lg:flex lg:gap-x-12`}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="text-sm font-semibold leading-6 hover:underline"
              activeClassName="text-white"
              isActive={() => item.to === currentPath}
            >
              {!islandingPage && (
                <div
                  className={`inline-block rounded-full ${currentPath === item.to ? "bg-white" : "bg-gray-300"} p-2`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="inline-block h-8 w-auto"
                  />
                </div>
              )}
              <span
                className={`ml-2 ${currentPath === item.to ? "text-gray-800 underline dark:text-white" : "text-gray-500 dark:text-gray-300"}`}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
        <div className="hidden hover:underline lg:flex lg:flex-1 lg:justify-end">
          {!islandingPage && (
            <Switch
              checked={enabled}
              onChange={() => {
                setEnabled(!enabled);
                handleThemeSwitch();
              }}
              className="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75"
            >
              <span className="sr-only">Dark/Right Mode</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-9 bg-gray-800" : "translate-x-0 bg-gray-50"}
                pointer-events-none  flex h-[34px] w-[34px] transform items-center justify-center rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
              >
                {enabled ? (
                  <MoonIcon className="h-5 w-5 text-gray-50" />
                ) : (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                )}
              </span>
            </Switch>
          )}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className={`fixed inset-x-0 top-0 z-10`}>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-8 py-4 dark:bg-gray-800 sm:max-w-sm sm:ring-1 sm:ring-gray-800/10 sm:dark:ring-gray-500/30">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Star War</span>
                <img
                  src={darkMode ? starwarsIconWhite : starwarsIconDark}
                  alt=""
                  className="h-14 w-auto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-800 hover:bg-gray-800/20 dark:text-gray-300 dark:hover:bg-gray-500/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-800 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-500/20"
                    >
                      <div className="inline-block rounded-full bg-gray-300 p-2">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="inline-block h-8 w-auto"
                        />
                      </div>
                      <span className="ml-5">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              <hr className="my-6 border-gray-500/30" />
              {!islandingPage && (
                <div className="py-6">
                  <Switch
                    checked={enabled}
                    onChange={() => {
                      setEnabled(!enabled);
                      handleThemeSwitch();
                    }}
                    className={`${enabled ? "bg-gray-800" : "bg-gray-200"}
              relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Dark/Right Mode</span>
                    <span
                      aria-hidden="true"
                      className={`${enabled ? "translate-x-9 bg-gray-50" : "translate-x-0 bg-gray-800"}
                pointer-events-none  flex h-[34px] w-[34px] transform items-center justify-center rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
                    >
                      {enabled ? (
                        <SunIcon className="h-5 w-5 text-yellow-400" />
                      ) : (
                        <MoonIcon className="h-5 w-5 text-gray-50" />
                      )}
                    </span>
                  </Switch>
                </div>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
