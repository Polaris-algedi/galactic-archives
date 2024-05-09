import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const links = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
];
export default function Carousel(/* { slides } */) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? links.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === links.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide + 3 === links.length - 1;

  return (
    <div className="relative w-full bg-white p-10 dark:bg-gray-800/95">
      <div className="mx-auto flex w-4/5 overflow-hidden">
        {links.map((slide, index) => (
          <div
            key={index}
            className="duration-800 w-1/4 flex-shrink-0 bg-white p-5 transition ease-out"
            style={{ transform: `translateX(${currentSlide * -100}%)` }}
          >
            <div className="relative ">
              <img
                src={slide}
                alt="Slide"
                className="rounded-lg object-cover shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gray-900 bg-opacity-30"></div>
              <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-black bg-opacity-30">
                <h2 className="p-2 text-center text-3xl font-bold text-white">
                  Film name
                </h2>
              </div>
            </div>
            {/* 
            <p className="absolute bottom-0 right-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              numquam fugiat dignissimos magni earum officiis eius, nobis
              tempora nisi, saepe, dicta obcaecati repellat dolor nesciunt
              aspernatur itaque rem! Necessitatibus, officia?
            </p> */}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 mx-auto flex w-[85%] justify-between text-red-500">
        <button
          onClick={prevSlide}
          className={`${isFirstSlide ? "invisible" : ""}`}
        >
          <ChevronDoubleLeftIcon className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>
        <button
          onClick={nextSlide}
          className={`${isLastSlide ? "invisible" : ""}`}
        >
          <ChevronDoubleRightIcon className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>
      </div>
    </div>
  );
}
