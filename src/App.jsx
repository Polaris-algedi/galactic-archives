//import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Features from "./AllFeatures";
import LandingPageFooter from "./LandingPageFooter";

import FeatureDetails from "./FeatureDetails";

//import { useState, useEffect } from "react";

export default function App() {
  /*   const [theme, setTheme] = useState(null);

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
  }; */

  return (
    <>
      {/* {<Header />} */}

      <Hero />
      <Features />
      <FeatureDetails />
      <AboutUs />
      <LandingPageFooter />
    </>
  );
}
