export default function StarWarsSectionImgRight({ details }) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center pb-8">
          <h2 className="text-lg font-semibold leading-7 text-blue-700">
            {details.heading}
          </h2>
        </div>
        <div className="mx-auto flex flex-col items-center justify-between lg:max-w-none lg:flex-row">
          <img
            src={details.picture}
            alt="Product screenshot"
            className="w-full max-w-[40rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:ml-4 lg:ml-0"
          />

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {details.subheading}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {details.description}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-blue-700 px-16 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="rounded-full bg-black px-16 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Random
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
