import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Layout from "./Layout";
import Films from "./MainSections/Films/Films";
import People from "./MainSections/People/People";
import Planets from "./MainSections/Planets/Planets";

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
          <Route path="species" element={<h1>Species</h1>} />
          <Route path="starships" element={<h1>Starships</h1>} />
          <Route path="vehicles" element={<h1>Vehicles</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
