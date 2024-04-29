import filmsIcon from "./assets/Stormtrooper-icon.png";
import peopleIcon from "./assets/Boba-Fett-icon.png";
import planetsIcon from "./assets/Death-Star-icon.png";
import speciesIcon from "./assets/Chewbacca-icon.png";
import starshipsIcon from "./assets/Millennium-Falcon-icon.png";
import vehiclesIcon from "./assets/R2D2-icon.png";
import starwarsIconDark from "./assets/star-wars-logo-black.svg";

const features = [
  {
    name: "Films",
    description:
      "Explore the cinematic saga of Star Wars through its iconic films. Learn about the epic battles, memorable characters, and captivating storylines that have enthralled audiences for generations.",
    icon: filmsIcon,
    href: "#",
    alt: "films",
  },
  {
    name: "People",
    description:
      "Delve into the rich tapestry of characters that populate the Star Wars universe. From courageous Jedi knights to cunning Sith lords, discover the diverse personalities and compelling narratives that shape this galaxy far, far away.",
    icon: peopleIcon,
    href: "#",
    alt: "people",
  },
  {
    name: "Planets",
    description:
      "Journey to distant worlds and exotic landscapes that serve as the backdrop for the epic adventures of Star Wars. From the desert sands of Tatooine to the lush forests of Endor, uncover the unique environments and cultures of each planet.",
    icon: planetsIcon,
    href: "#",
    alt: "planets",
  },
  {
    name: "Species",
    description:
      "Encounter a multitude of alien species that inhabit the vast reaches of the Star Wars galaxy. From the noble Wookiees of Kashyyyk to the enigmatic Twi'leks of Ryloth, learn about the diverse races and civilizations that coexist in this fantastical universe.",
    icon: speciesIcon,
    href: "#",
    alt: "species",
  },
  {
    name: "Starships",
    description:
      "Take to the stars aboard legendary starships that have played pivotal roles in the battles and conflicts of Star Wars. From the sleek and agile X-wing fighters to the imposing Imperial Star Destroyers, explore the iconic vessels that define the spacefaring adventures of the franchise.",
    icon: starshipsIcon,
    href: "#",
    alt: "starships",
  },
  {
    name: "Vehicles",
    description:
      "Discover a range of ground-based vehicles that traverse the varied terrain of the Star Wars galaxy. From the iconic landspeeders of Tatooine to the towering AT-AT walkers of Hoth, learn about the different modes of transportation used by characters in their quests for victory and survival.",
    icon: vehiclesIcon,
    href: "#",
    alt: "vehicles",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center">
            <img
              className="h-14 w-auto"
              src={starwarsIconDark}
              alt="Star wars dark icon"
            />
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore the Galaxy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Embark on an epic journey through films, planets, characters, and
            beyond.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <a href={feature.href}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
                      <img
                        src={feature.icon}
                        alt={feature.alt}
                        className={`inline-block h-8 w-auto`}
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
