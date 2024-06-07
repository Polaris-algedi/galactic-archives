import { useState, useEffect } from "react";
import ImageSlider from "../../ImageSlider";
import StarshipDetails from "./StarshipDetails";
import EntityDetails from "../../ReusableComponents/EntityDetails";

import cr90Corvette from "../../assets/starships/cr90-corvette.jpeg";
import starDestroyer from "../../assets/starships/star-destroyer.jpeg";
import sentinelClassLandingCraft from "../../assets/starships/sentinel-class-landing-craft.jpeg";
import deathStar from "../../assets/starships/death-star.jpeg";
import millenniumFalcon from "../../assets/starships/millennium-falcon.jpeg";
import yWing from "../../assets/starships/y-wing.jpeg";
import xWing from "../../assets/starships/x-wing.jpeg";

// Add more starship images as needed

const placeHolder = "https://placehold.co/1080x1920";

import { getAllStarships, getDataFromUrls } from "../../services/swapi";

const images = [
  cr90Corvette,
  starDestroyer,
  sentinelClassLandingCraft,
  deathStar,
  millenniumFalcon,
  yWing,
  xWing,
]; // Add more starship images as needed

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [selectedStarshipImg, setSelectedStarshipImg] = useState(
    cr90Corvette || placeHolder,
  );
  const [relatedData, setRelatedData] = useState({});

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getAllStarships();
      console.log("Data from getAllStarships:", data);
      setStarships(data.results);
      if (data.results.length > 0) {
        setSelectedStarship(data.results[0]); // Set the first starship as the selected starship after fetching
      }
    };

    fetchStarships();
  }, []);

  useEffect(() => {
    const fetchRelatedData = async () => {
      if (selectedStarship) {
        const { pilots, films } = selectedStarship;

        const [pilotsData, filmsData] = await Promise.all([
          getDataFromUrls(pilots),
          getDataFromUrls(films),
        ]);

        setRelatedData({
          pilots: pilotsData,
          films: filmsData,
        });
      }
    };

    fetchRelatedData();
  }, [selectedStarship]);

  console.log("relatedData", relatedData);

  const handleImageClick = (index) => {
    setSelectedStarship(starships[index]);
    setSelectedStarshipImg(images[index]);
  };

  const starshipImg =
    starships.length > 0
      ? images.map((image, index) => {
          return {
            img: image,
            title: starships[index]?.name || "No Name",
            onClick: () => handleImageClick(index),
            selected: selectedStarship,
          };
        })
      : [];

  const categories = [
    {
      nav: "Starship",
      details: {
        title: selectedStarship?.name,
        model: selectedStarship?.model,
        manufacturer: selectedStarship?.manufacturer,
        cost_in_credits: selectedStarship?.cost_in_credits,
        length: selectedStarship?.length,
        max_atmosphering_speed: selectedStarship?.max_atmosphering_speed,
        crew: selectedStarship?.crew,
        passengers: selectedStarship?.passengers,
        cargo_capacity: selectedStarship?.cargo_capacity,
        consumables: selectedStarship?.consumables,
        hyperdrive_rating: selectedStarship?.hyperdrive_rating,
        MGLT: selectedStarship?.MGLT,
        starship_class: selectedStarship?.starship_class,
        image: selectedStarshipImg,
      },
    },
    {
      nav: "Films",
      details: relatedData?.films,
    },
    {
      nav: "Pilots",
      details: relatedData?.pilots,
    },
  ];

  return (
    <>
      <ImageSlider images={starshipImg} />
      <EntityDetails entityData={categories} cardHeight="100%" cardWidth={30}>
        <StarshipDetails starship={categories[0].details} />
      </EntityDetails>
    </>
  );
}
