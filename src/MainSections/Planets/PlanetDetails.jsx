export default function PlanetDetails({ planet }) {
  return (
    <ul
      className="rounded-md p-3 text-sm/6 text-black/50 transition dark:text-white/50"
      aria-hidden="true"
    >
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Rotation Period: {planet.rotation_period}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Orbital Period: {planet.orbital_period}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Diameter: {planet.diameter}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Climate: {planet.climate}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Gravity: {planet.gravity}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Terrain: {planet.terrain}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Surface Water: {planet.surface_water}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Population: {planet.population}
      </li>
    </ul>
  );
}
