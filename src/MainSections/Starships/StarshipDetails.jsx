export default function StarshipDetails({ starship }) {
  return (
    <ul
      className="rounded-md p-3 text-sm/6 text-black/50 transition dark:text-white/50"
      aria-hidden="true"
    >
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Model: {starship.model}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Manufacturer: {starship.manufacturer}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Cost in Credits: {starship.cost_in_credits}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Length: {starship.length}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Max Atmosphering Speed: {starship.max_atmosphering_speed}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Crew: {starship.crew}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Passengers: {starship.passengers}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Cargo Capacity: {starship.cargo_capacity}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Consumables: {starship.consumables}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Hyperdrive Rating: {starship.hyperdrive_rating}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        MGLT: {starship.MGLT}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Starship Class: {starship.starship_class}
      </li>
    </ul>
  );
}
