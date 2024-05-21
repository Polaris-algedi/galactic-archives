import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Layout from "./Layout";
import Films from "./MainSections/Films";

export default function App() {
  const AboutUs = () => <h1>About Us</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="films" element={<Films />} />
          <Route path="people" element={<h1>People</h1>} />
          <Route path="planets" element={<h1>Planets</h1>} />
          <Route path="species" element={<h1>Species</h1>} />
          <Route path="starships" element={<h1>Starships</h1>} />
          <Route path="vehicles" element={<h1>Vehicles</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
