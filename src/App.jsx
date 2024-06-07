import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Layout from "./Layout";
import Films from "./MainSections/Films/Films";
import People from "./MainSections/People/People";
import Planets from "./MainSections/Planets/Planets";
import Species from "./MainSections/Species/Species";
import Starships from "./MainSections/Starships/Starships";
import Vehicles from "./MainSections/Vehicles/Vehicles";

export default function App() {
  const AboutUs = () => <h1>About Us</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="films" element={<Films />} />
          <Route path="people" element={<People />} />
          <Route path="planets" element={<Planets />} />
          <Route path="species" element={<Species />} />
          <Route path="starships" element={<Starships />} />
          <Route path="vehicles" element={<Vehicles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
