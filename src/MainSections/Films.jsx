import ImageSlider from "../ImageSlider";
import FilmDetails from "./FilmDetails";

import aNewHope from "../assets/a-new-hope.png";
import empireStrikesBack from "../assets/empire-strikes-back.jpg";
import returnOfTheJedi from "../assets/return-of-the-jedi.jpg";
import phantomMenace from "../assets/phantom-menace.jpg";

import { useState, useEffect } from "react";

import { getAllFilms, getDataFromUrls } from "../services/swapi";

const images = [
  aNewHope,
  empireStrikesBack,
  returnOfTheJedi,
  phantomMenace,
  "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
];

export default function Films() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [relatedData, setRelatedData] = useState({});

  useEffect(() => {
    const fetchFilms = async () => {
      const data = await getAllFilms();
      setFilms(data);
      if (data.length > 0) {
        setSelectedFilm(data[0]); // Set the first film as the selected film after fetching
      }
    };

    fetchFilms();
    setSelectedFilm(films[0]);
  }, []);

  useEffect(() => {
    const fetchRelatedData = async () => {
      if (selectedFilm) {
        const { characters, planets, starships, vehicles, species } =
          selectedFilm;

        const [
          charactersData,
          planetsData,
          starshipsData,
          vehiclesData,
          speciesData,
        ] = await Promise.all([
          getDataFromUrls(characters),
          getDataFromUrls(planets),
          getDataFromUrls(starships),
          getDataFromUrls(vehicles),
          getDataFromUrls(species),
        ]);

        setRelatedData({
          characters: charactersData,
          planets: planetsData,
          starships: starshipsData,
          vehicles: vehiclesData,
          species: speciesData,
        });
      }
    };

    fetchRelatedData();
  }, [selectedFilm]);

  console.log("relatedData", relatedData);

  const handleImageClick = (index) => {
    setSelectedFilm(films[index]);
  };

  const filmImg =
    films.length > 0
      ? images.map((image, index) => {
          return {
            img: image,
            title: films[index]?.title || "No Title",
            onClick: () => handleImageClick(index),
          };
        })
      : [];

  const categories = [
    {
      nav: "Film",
      details: {
        id: selectedFilm?.episode_id,
        title: selectedFilm?.title,
        opening_crawl: selectedFilm?.opening_crawl,
        director: selectedFilm?.director,
        producer: selectedFilm?.producer,
        release_date: selectedFilm?.release_date,
      },
    },
    {
      nav: "Characters",
      details: relatedData?.characters,
    },
    {
      nav: "Planets",
      details: relatedData?.planets,
    },
    {
      nav: "Starships",
      details: relatedData?.starships,
    },
    {
      nav: "Vehicles",
      details: relatedData?.vehicles,
    },
    {
      nav: "Species",
      details: relatedData?.species,
    },
  ];

  return (
    <>
      <ImageSlider images={filmImg} />
      <FilmDetails categories={categories} filmCover={aNewHope} />
    </>
  );
}
