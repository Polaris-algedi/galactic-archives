export default function SpeciesDetails({ specie }) {
  console.log("specie", specie);
  return (
    <ul
      className="rounded-md p-3 text-sm/6 text-black/50  transition dark:text-white/50   "
      aria-hidden="true"
    >
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Designation: {specie?.designation}
      </li>

      <hr />

      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Average height: {specie?.average_height}
      </li>

      <hr />
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Skin colors: {specie?.skin_colors}
      </li>
      <hr />
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Hair colors: {specie?.hair_colors}
      </li>
      <hr />
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Eye colors: {specie?.eye_colors}
      </li>
      <hr />
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Average lifespan: {specie?.average_lifespan}
      </li>
      <hr />
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Language: {specie?.language}
      </li>
    </ul>
  );
}
