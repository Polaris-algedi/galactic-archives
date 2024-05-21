import ImageSlider from "../ImageSlider";
import FilmDetails from "./FilmDetails";

import aNewHope from "../assets/a-new-hope.png";
import empireStrikesBack from "../assets/empire-strikes-back.jpg";
import returnOfTheJedi from "../assets/return-of-the-jedi.jpg";
import phantomMenace from "../assets/phantom-menace.jpg";

import { useState, useEffect } from "react";

import { getAllFilms } from "../services/swapi";

const categories = [
  {
    nav: "Film",
    details: {
      id: 1,
      title: "A New Hope",
      opening_crawl: 5,
      director: 2,
      producer: 3,
      release_date: "1h ago",
    },
  },
  {
    nav: "People",
    details: [
      {
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    nav: "Planets",
    details: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  {
    nav: "Species",
    details: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  {
    nav: "Starships",
    details: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  {
    nav: "Vehicles",
    details: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

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

  useEffect(() => {
    const fetchFilms = async () => {
      const data = await getAllFilms();
      setFilms(data);
    };

    fetchFilms();
  }, []);

  console.log(films);

  const filmImg =
    films.length > 0
      ? images.map((image, index) => {
          return {
            img: image,
            title: films[index]?.title || "No Title", // Add a fallback for title
          };
        })
      : [];

  console.log(filmImg);

  return (
    <div>
      <ImageSlider images={filmImg} />
      <FilmDetails categories={categories} filmCover={aNewHope} />
    </div>
  );
}
