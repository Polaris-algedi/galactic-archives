export default function StarWarsSectionImgRight({ details }) {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <h2 className="text-lg font-semibold leading-7 text-yellow-400">
            {details.heading}
          </h2>
        </div>
        <div className="mx-auto flex flex-col items-center justify-between lg:max-w-none lg:flex-row">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {details.subheading}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                {details.description}
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-yellow-400 px-16 py-3 text-lg font-semibold text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white px-16 py-3 text-lg font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
                >
                  Random
                </a>
              </div>
            </div>
          </div>
          <img
            src={details.picture}
            alt="Product screenshot"
            className="mt-10 w-full max-w-[40rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:ml-4 lg:ml-0"
          />
        </div>
      </div>
    </div>
  );
}
