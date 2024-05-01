import { useState } from "react";

// Icons
import filmsIcon from "./assets/Stormtrooper-icon.png";
import peopleIcon from "./assets/Boba-Fett-icon.png";
import planetsIcon from "./assets/Death-Star-icon.png";
import speciesIcon from "./assets/Chewbacca-icon.png";
import starshipsIcon from "./assets/Millennium-Falcon-icon.png";
import vehiclesIcon from "./assets/R2D2-icon.png";

// Pictures
import filmsPicture from "./assets/film.jpg";
import peoplePicture from "./assets/people.jpg";
import planetsPicture from "./assets/planet.jpg";
import speciesPicture from "./assets/species.jpg";
import starshipsPicture from "./assets/starship.jpg";
import vehiclesPicture from "./assets/vehicle.jpg";

import StarWarsSectionImgRight from "./StarWarsSectionImgRight";
import StarWarsSectionImgLeft from "./StarWarsSectionImgLeft";

const navigation = [
  { name: "Films", icon: filmsIcon, alt: "films" },
  { name: "People", icon: peopleIcon, alt: "people" },
  { name: "Planets", icon: planetsIcon, alt: "planets" },
  { name: "Species", icon: speciesIcon, alt: "species" },
  { name: "Starships", icon: starshipsIcon, alt: "starships" },
  { name: "Vehicles", icon: vehiclesIcon, alt: "vehicles" },
];

const details = [
  {
    heading: "Films",
    subheading: "Explore the Cinematic Saga",
    description:
      "Immerse yourself in the epic narrative of Star Wars through its iconic films. From the original trilogy that introduced us to Luke Skywalker and Darth Vader, to the latest installments continuing the saga, each film offers a unique adventure filled with memorable characters, thrilling battles, and timeless themes of heroism and redemption.",
    picture: filmsPicture,
  },
  {
    heading: "People",
    subheading: "Meet the Characters",
    description:
      "Step into the shoes of legendary heroes and fearsome villains that populate the Star Wars universe. From noble Jedi knights and cunning Sith lords to courageous rebels and nefarious bounty hunters, each character brings their own story and motivations to the ongoing struggle between light and dark.",
    picture: peoplePicture,
  },
  {
    heading: "Planets",
    subheading: "Journey to Distant Worlds",
    description:
      "Embark on a virtual voyage to the farthest reaches of the Star Wars galaxy. Visit iconic planets like Tatooine, Hoth, and Coruscant, each with its own unique geography, culture, and inhabitants. Whether you seek adventure on desert dunes, icy tundras, or bustling cityscapes, there's a world waiting to be explored.",
    picture: planetsPicture,
  },
  {
    heading: "Species",
    subheading: "Encounter Alien Lifeforms",
    description:
      "Dive into the fascinating world of alien species that populate the Star Wars galaxy. From the wise and ancient Yoda's species to the fierce and formidable Wookiees, each race offers a glimpse into the rich tapestry of cultures and civilizations that coexist among the stars.",
    picture: speciesPicture,
  },
  {
    heading: "Starships",
    subheading: "Navigate the Cosmos",
    description:
      "Take command of some of the most iconic vessels in the Star Wars universe. Whether you're flying an X-wing into battle against the Empire or cruising through hyperspace aboard the Millennium Falcon, these legendary starships are ready to transport you to new worlds and epic adventures.",
    picture: starshipsPicture,
  },
  {
    heading: "Vehicles",
    subheading: "Conquer the Terrain",
    description:
      "From speeder bikes racing through dense forests to AT-AT walkers marching across icy plains, explore the diverse array of vehicles used in the Star Wars galaxy. Whether you're navigating treacherous terrain or engaging in high-speed chases, these vehicles are essential tools for survival and victory.",
    picture: vehiclesPicture,
  },
];

export default function FeatureDetails() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="mx-auto w-full overflow-hidden">
      <div className="relative">
        <div
          className={`duration-800 flex transition ease-out`}
          style={{ transform: `translateX(${currentSlide * -100}%)` }}
        >
          {details.map((detail, index) => (
            <div key={index} className={`relative w-full flex-none`}>
              {index % 2 === 0 ? (
                <StarWarsSectionImgRight key={index} details={detail} />
              ) : (
                <StarWarsSectionImgLeft key={index} details={detail} />
              )}
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 flex justify-center bg-white p-4">
          {details.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`mx-1 h-14 w-14 rounded-lg bg-white p-2 ${
                index === currentSlide
                  ? "border-b-2 border-black opacity-100"
                  : "opacity-50"
              }`}
            >
              <span className="sr-only">Navigation icons</span>
              <img src={navigation[index].icon} alt={navigation[index].alt} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
