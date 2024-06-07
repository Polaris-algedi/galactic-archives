import { useState, useEffect } from "react";
import ImageSlider from "../../ImageSlider";
import VehicleDetails from "./VehicleDetails";
import EntityDetails from "../../ReusableComponents/EntityDetails";

import sandCrawler from "../../assets/vehicles/sand-crawler.jpeg";
import t16Skyhopper from "../../assets/vehicles/t-16-skyhopper.jpeg";
import x34Landspeeder from "../../assets/vehicles/x-34-landspeeder.jpeg";
import tieLnStarfighter from "../../assets/vehicles/tie-ln-starfighter.jpeg";
import snowspeeder from "../../assets/vehicles/snowspeeder.jpeg";
import tieBomber from "../../assets/vehicles/tie-bomber.jpeg";
import atAt from "../../assets/vehicles/at-at.jpeg";

// Add more vehicle images as needed

const placeHolder = "https://placehold.co/1080x1920";

import { getAllVehicles, getDataFromUrls } from "../../services/swapi";

const images = [
  sandCrawler,
  t16Skyhopper,
  x34Landspeeder,
  tieLnStarfighter,
  snowspeeder,
  tieBomber,
  atAt,
]; // Add more starship images as needed
export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedVehicleImg, setSelectedVehicleImg] = useState(
    sandCrawler || placeHolder,
  );
  const [relatedData, setRelatedData] = useState({});

  useEffect(() => {
    const fetchVehicles = async () => {
      const data = await getAllVehicles();
      console.log("Data from getAllVehicles:", data);
      setVehicles(data.results);
      if (data.results.length > 0) {
        setSelectedVehicle(data.results[0]); // Set the first vehicle as the selected vehicle after fetching
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    const fetchRelatedData = async () => {
      if (selectedVehicle) {
        const { pilots, films } = selectedVehicle;

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
  }, [selectedVehicle]);

  console.log("relatedData", relatedData);

  const handleImageClick = (index) => {
    setSelectedVehicle(vehicles[index]);
    setSelectedVehicleImg(images[index]);
  };

  const vehicleImg =
    vehicles.length > 0
      ? images.map((image, index) => {
          return {
            img: image,
            title: vehicles[index]?.name || "No Name",
            onClick: () => handleImageClick(index),
            selected: selectedVehicle,
          };
        })
      : [];

  const categories = [
    {
      nav: "Vehicle",
      details: {
        title: selectedVehicle?.name,
        model: selectedVehicle?.model,
        manufacturer: selectedVehicle?.manufacturer,
        cost_in_credits: selectedVehicle?.cost_in_credits,
        length: selectedVehicle?.length,
        max_atmosphering_speed: selectedVehicle?.max_atmosphering_speed,
        crew: selectedVehicle?.crew,
        passengers: selectedVehicle?.passengers,
        cargo_capacity: selectedVehicle?.cargo_capacity,
        consumables: selectedVehicle?.consumables,
        vehicle_class: selectedVehicle?.vehicle_class,
        image: selectedVehicleImg,
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
      <ImageSlider images={vehicleImg} />
      <EntityDetails entityData={categories} cardHeight="100%" cardWidth={30}>
        <VehicleDetails vehicle={categories[0].details} />
      </EntityDetails>
    </>
  );
}
