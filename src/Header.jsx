import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import filmsIcon from "./assets/Stormtrooper-icon.png";
import peopleIcon from "./assets/Boba-Fett-icon.png";
import planetsIcon from "./assets/Death-Star-icon.png";
import speciesIcon from "./assets/Chewbacca-icon.png";
import starshipsIcon from "./assets/Millennium-Falcon-icon.png";
import vehiclesIcon from "./assets/R2D2-icon.png";
import starwarsIconDark from "./assets/star-wars-logo-black.svg";
import starwarsIconWhite from "./assets/star-wars-logo-white.svg";

const lightTheme = {
  bg: "white",
  text: "gray",
  border: "gray-300",
  hover: "gray-50",
};

const darkTheme = {
  bg: "gray-900",
  text: "gray-300",
  border: "gray-700",
  hover: "gray-800",
};

const navigation = [
  { name: "Films", href: "#", src: filmsIcon, alt: "films" },
  { name: "People", href: "#", src: peopleIcon, alt: "people" },
  { name: "Planets", href: "#", src: planetsIcon, alt: "planets" },
  { name: "Species", href: "#", src: speciesIcon, alt: "species" },
  { name: "Starships", href: "#", src: starshipsIcon, alt: "starships" },
  { name: "Vehicles", href: "#", src: vehiclesIcon, alt: "vehicles" },
];

export default function Header({ theme = "dark", islandingPage = true }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setTheme] = useState(
    theme === "light" ? "light" : "dark",
  );
  const themeObj = currentTheme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header
      className={`absolute inset-x-0 top-0 z-10 ${islandingPage ? "bg-transparent" : ` bg-${themeObj.bg}`}`}
    >
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Star War</span>
            <img
              className="h-14 w-auto"
              src={
                currentTheme === "light" ? starwarsIconDark : starwarsIconWhite
              }
              alt=""
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button" /*  */
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-${themeObj.text} hover:bg-${themeObj.hover} `}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6`} />
          </button>
        </div>
        <div className={`hidden lg:flex lg:gap-x-12 text-${themeObj.text}`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 hover:underline text-${themeObj.text}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`inline-block h-8 w-auto`}
              />
              <span
                className={`ml-2 ${currentTheme === "dark" ? "dark:text-gray-300" : ""}`}
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
        <div className="hidden hover:underline lg:flex lg:flex-1 lg:justify-end">
          {!islandingPage && (
            <button
              type="button"
              className={`text-sm font-semibold leading-6 ${themeObj.text}`}
              onClick={toggleTheme}
            >
              {currentTheme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
              <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className={`fixed inset-x-0 top-0 z-10 bg-${themeObj.bg}`} />
        <Dialog.Panel
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-${themeObj.bg} px-8 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Star War</span>
              <img
                src={
                  currentTheme === "light"
                    ? starwarsIconDark
                    : starwarsIconWhite
                }
                alt=""
                className="h-14 w-auto"
              />
            </a>
            <button
              type="button"
              className={`-m-2.5 rounded-md p-2.5 text-${themeObj.text} hover:bg-${themeObj.hover}`}
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
                    className={`block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-${themeObj.text} hover:bg-${themeObj.hover}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="inline-block h-8 w-auto"
                    />
                    <span className="ml-5">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
            {!islandingPage && (
              <div className="py-6">
                <button
                  type="button"
                  className={`block rounded-lg px-3 py-2 text-base font-semibold leading-6 ${themeObj.text}`}
                  onClick={toggleTheme}
                >
                  {currentTheme === "light"
                    ? "Switch to Dark Mode"
                    : "Switch to Light Mode"}
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
