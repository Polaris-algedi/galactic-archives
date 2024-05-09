import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // get current location
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Navbar
        islandingPage={location.pathname === "/"}
        theme={theme}
        handleThemeSwitch={handleThemeSwitch}
      />
      <Outlet />
      <Footer theme={theme} />
    </>
  );
}
