/* import PeopleDetails from "./PeopleDetails"; */
import PeopleSearch from "./SearchPeople";

import { useState, useEffect } from "react";

import { getDataFromUrls } from "../../services/swapi";
import EntityDetails from "../../ReusableComponents/EntityDetails";
import PeopleDetails from "./PeopleDetails";

//import aNewHope from "../../assets/films/a-new-hope.jpg";

// People
import lukeSkywalker from "../../assets/people/luke-skywalker.jpg";
import darthVader from "../../assets/people/darth-vader-2.jpg";
import leiaOrgana from "../../assets/people/leia-organa.jpg";

// Droid
import r2d2 from "../../assets/droid/r2-d2.jpg";
import c3po from "../../assets/droid/c-3po.jpg";

// Wookiee
import chewbacca from "../../assets/wookiee/chewbacca.jpg";

const images = [
  { id: 1, name: "Luke Skywalker", image: lukeSkywalker },
  { id: 4, name: "Darth Vader", image: darthVader },
  { id: 5, name: "Leia Organa", image: leiaOrgana },
  { id: 2, name: "R2-D2", image: r2d2 },
  { id: 3, name: "C-3PO", image: c3po },
  { id: 13, name: "Chewbacca", image: chewbacca },
];
const placeHolder = "https://placehold.co/1080x1920";

export default function People() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [relatedData, setRelatedData] = useState({});

  useEffect(() => {
    const fetchRelatedData = async () => {
      if (selectedPerson) {
        const { films, homeworld, starships, vehicles, species } =
          selectedPerson;

        const [
          filmsData,
          homeworldData,
          starshipsData,
          vehiclesData,
          speciesData,
        ] = await Promise.all([
          getDataFromUrls(films),
          getDataFromUrls(homeworld),
          getDataFromUrls(starships),
          getDataFromUrls(vehicles),
          getDataFromUrls(species),
        ]);

        setRelatedData({
          films: filmsData,
          homeworld: homeworldData,
          starships: starshipsData,
          vehicles: vehiclesData,
          species: speciesData,
        });
      }
    };

    fetchRelatedData();
  }, [selectedPerson]);

  console.log("relatedData", relatedData);

  // Function to extract ID from URL
  function extractIdFromUrl(url) {
    const regex = /\/people\/(\d+)\//;
    const match = url.match(regex);
    return match ? parseInt(match[1], 10) : null;
  }

  // Extract ID and find the matching image
  const selectedPersonUrl = selectedPerson?.url;
  const personId = selectedPersonUrl
    ? extractIdFromUrl(selectedPersonUrl)
    : null;
  const personImg = images.find((img) => img.id === personId)?.image;

  const categories = [
    {
      nav: "Person",
      details: {
        title: selectedPerson?.name,
        height: selectedPerson?.height,
        mass: selectedPerson?.mass,
        hair_color: selectedPerson?.hair_color,
        skin_color: selectedPerson?.skin_color,
        eye_color: selectedPerson?.eye_color,
        birth_year: selectedPerson?.birth_year,
        gender: selectedPerson?.gender,
        image: personImg || placeHolder,
      },
    },
    {
      nav: "Films",
      details: relatedData?.films,
    },
    {
      nav: "Homeworld",
      details: relatedData?.homeworld,
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
      <PeopleSearch setSelectedPerson={setSelectedPerson} />
      {selectedPerson ? (
        <EntityDetails entityData={categories}>
          <PeopleDetails person={categories[0].details} />
        </EntityDetails>
      ) : null}
    </>
  );
}
