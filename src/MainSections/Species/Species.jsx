import SearchSpecies from "./SearchSpecies";
import { useState, useEffect } from "react";
import { getDataFromUrls } from "../../services/swapi";
import EntityDetails from "../../ReusableComponents/EntityDetails";
import SpeciesDetails from "./SpeciesDetails";
import axios from "axios";

const placeHolder = "https://placehold.co/1080x1920";

export default function Species() {
  const [selectedClassification, setSelectedClassification] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [relatedSpecies, setRelatedSpecies] = useState([]);
  const [relatedData, setRelatedData] = useState({});
  const [speciesList, setSpeciesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecies = async () => {
      let allSpecies = [];
      for (let i = 1; i <= 4; i++) {
        const response = await axios.get(
          `https://swapi-api.alx-tools.com/api/species/?page=${i}`,
        );
        allSpecies = [...allSpecies, ...response.data.results];
      }
      setSpeciesList(allSpecies);
      setLoading(false);
    };
    fetchSpecies();
  }, []);

  useEffect(() => {
    const getRelatedSpecies = () => {
      if (selectedClassification) {
        const relatedSpecies = speciesList.filter(
          (species) => species.classification === selectedClassification,
        );
        setRelatedSpecies(relatedSpecies);
      }
    };
    getRelatedSpecies();
  }, [selectedClassification, speciesList]);

  useEffect(() => {
    const fetchRelatedData = async () => {
      if (selectedSpecies) {
        const { films, homeworld, people } = selectedSpecies;

        const [filmsData, homeworldData, peopleData] = await Promise.all([
          getDataFromUrls(films),
          getDataFromUrls(homeworld),
          getDataFromUrls(people),
        ]);

        setRelatedData({
          films: filmsData,
          homeworld: homeworldData,
          people: peopleData,
        });
      }
    };

    fetchRelatedData();
  }, [selectedSpecies]);

  const classifications = [
    ...new Set(speciesList.map((species) => species.classification)),
  ];

  const categories = [
    {
      nav: "Species",
      details: {
        title: selectedSpecies?.name,
        selectedSpecie: selectedSpecies,
        image: placeHolder,
      },
    },
    {
      nav: "Films",
      details: relatedData.films,
    },
    {
      nav: "Homeworld",
      details: relatedData.homeworld,
    },
    {
      nav: "People",
      details: relatedData.people,
    },
  ];

  console.log("SelectedSpecie", categories[0].details.selectedSpecie);

  return (
    <>
      <SearchSpecies
        setSelectedClassification={setSelectedClassification}
        classifications={classifications}
        relatedSpecies={relatedSpecies}
        setSelectedSpecies={setSelectedSpecies}
        loading={loading}
      />

      {selectedSpecies ? (
        <EntityDetails entityData={categories}>
          <SpeciesDetails specie={categories[0].details.selectedSpecie} />
        </EntityDetails>
      ) : null}
    </>
  );
}
