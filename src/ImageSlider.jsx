import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide + 3 === images.length - 1;

  return (
    <>
      <div className="flex w-full justify-center bg-white p-10 dark:bg-gray-800/95 ">
        <button
          onClick={prevSlide}
          className={`${isFirstSlide ? "invisible" : ""} m-10`}
        >
          <ChevronDoubleLeftIcon className="h-6 w-6 text-red-500 lg:h-8 lg:w-8" />
        </button>
        <div className="mx-auto flex w-4/5 overflow-hidden rounded-md">
          {images.map((slide, index) => (
            <div
              key={index}
              className="duration-800 w-1/4 flex-shrink-0  p-5 transition ease-out"
              style={{ transform: `translateX(${currentSlide * -100}%)` }}
            >
              <button
                className={`relative overflow-hidden rounded-lg shadow-lg transition duration-300 ease-out hover:scale-105 active:scale-100 ${selectedSlide === index ? "scale-105" : " "}`}
                onClick={() => setSelectedSlide(index)}
              >
                <img
                  src={slide.img}
                  alt="Slide"
                  className="h-96 rounded-lg object-cover"
                />
                <div className="absolute inset-0 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-5">
                  <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-black bg-opacity-30">
                    <h2 className="p-2 text-center text-3xl font-bold text-white">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className={`${isLastSlide ? "invisible" : ""} m-10`}
        >
          <ChevronDoubleRightIcon className="h-6 w-6 text-red-500 lg:h-8  lg:w-8" />
        </button>
      </div>
    </>
  );
}
