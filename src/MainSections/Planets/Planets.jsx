import ImageSlider from "../../ImageSlider";
import PlanetDetails from "./PlanetDetails";
import EntityDetails from "../../ReusableComponents/EntityDetails";

import tatooine from "../../assets/planets/tatooine.jpeg";
import alderaan from "../../assets/planets/alderaan.jpeg";
import yavinIV from "../../assets/planets/yavin-iv.jpeg";
import hoth from "../../assets/planets/hoth.jpeg";
import dagobah from "../../assets/planets/dagobah.jpeg";
import bespin from "../../assets/planets/bespin.jpeg";
import endor from "../../assets/planets/endor.jpeg";

import { useState, useEffect } from "react";

import { getAllPlanets, getDataFromUrls } from "../../services/swapi";

const images = [tatooine, alderaan, yavinIV, hoth, dagobah, bespin, endor];

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [relatedData, setRelatedData] = useState({});

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getAllPlanets();
      console.log("Data from getAllPlanets:", data); // Add this line
      setPlanets(data.results);
      if (data.results.length > 0) {
        setSelectedPlanet(data.results[0]); // Set the first planet as the selected planet after fetching
      }
    };

    fetchPlanets();
  }, []);

  useEffect(() => {
    const fetchRelatedData = async () => {
      if (selectedPlanet) {
        const { residents, films } = selectedPlanet;

        const [residentsData, filmsData] = await Promise.all([
          getDataFromUrls(residents),
          getDataFromUrls(films),
        ]);

        setRelatedData({
          residents: residentsData,
          films: filmsData,
        });
      }
    };

    fetchRelatedData();
  }, [selectedPlanet]);

  console.log("relatedData", relatedData);

  const handleImageClick = (index) => {
    setSelectedPlanet(planets[index]);
  };

  const planetImg =
    planets.length > 0
      ? images.map((image, index) => {
          return {
            img: image,
            title: planets[index]?.name || "No Name",
            onClick: () => handleImageClick(index),
            selected: selectedPlanet,
          };
        })
      : [];

  function extractIdFromUrl(url) {
    const regex = /\/planets\/(\d+)\//;
    const match = url.match(regex);
    return match ? parseInt(match[1], 10) : null;
  }

  // Extract ID and find the matching image
  const selectedPlanetUrl = selectedPlanet?.url;
  const planetId = selectedPlanetUrl
    ? extractIdFromUrl(selectedPlanetUrl)
    : null;
  const selectedPlanetImg = images[planetId - 1];

  const categories = [
    {
      nav: "Planet",
      details: {
        title: selectedPlanet?.name,
        rotation_period: selectedPlanet?.rotation_period,
        orbital_period: selectedPlanet?.orbital_period,
        diameter: selectedPlanet?.diameter,
        climate: selectedPlanet?.climate,
        gravity: selectedPlanet?.gravity,
        terrain: selectedPlanet?.terrain,
        surface_water: selectedPlanet?.surface_water,
        population: selectedPlanet?.population,
        image: selectedPlanetImg,
      },
    },
    {
      nav: "Residents",
      details: relatedData?.residents,
    },
    {
      nav: "Films",
      details: relatedData?.films,
    },
  ];

  return (
    <>
      <ImageSlider images={planetImg} />
      <EntityDetails entityData={categories} cardHeight={25}>
        <PlanetDetails planet={categories[0].details} />
      </EntityDetails>
    </>
  );
}
