import ImageSlider from "../../ImageSlider";
import FilmDetails from "./FilmDetails";
import EntityDetails from "../../ReusableComponents/EntityDetails";

import aNewHope from "../../assets/films/a-new-hope.jpg";
import empireStrikesBack from "../../assets/films/empire-strikes-back.jpg";
import returnOfTheJedi from "../../assets/films/return-of-the-jedi.jpg";
import phantomMenace from "../../assets/films/phantom-menace.jpg";
import attackOfTheClones from "../../assets/films/attack-of-the-clones.jpg";
import revengeOfTheSith from "../../assets/films/revenge-of-the-sith.jpg";
import forceAwakens from "../../assets/films/force-awakens.jpg";

import { useState, useEffect } from "react";

import { getAllFilms, getDataFromUrls } from "../../services/swapi";

const images = [
  phantomMenace,
  attackOfTheClones,
  revengeOfTheSith,
  aNewHope,
  empireStrikesBack,
  returnOfTheJedi,
  forceAwakens,
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
        setSelectedFilm(data.filter((film) => film.episode_id === 1)[0]); // Set the first film as the selected film after fetching
      }
    };

    fetchFilms();
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
    setSelectedFilm(films.filter((film) => film.episode_id === index + 1)[0]);
  };

  const filmImg =
    films.length > 0
      ? images.map((image, index) => {
          return {
            img: image,
            title: films[index]?.title || "No Title",
            onClick: () => handleImageClick(index),
            selected: selectedFilm,
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
        image: images[selectedFilm?.episode_id - 1],
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
      <EntityDetails entityData={categories}>
        <FilmDetails film={categories[0].details} />
      </EntityDetails>
    </>
  );
}
