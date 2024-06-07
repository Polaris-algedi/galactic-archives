export default function VehicleDetails({ vehicle }) {
  return (
    <ul
      className="rounded-md p-3 text-sm/6 text-black/50 transition dark:text-white/50"
      aria-hidden="true"
    >
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Model: {vehicle.model}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Manufacturer: {vehicle.manufacturer}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Cost in Credits: {vehicle.cost_in_credits}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Length: {vehicle.length}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Max Atmosphering Speed: {vehicle.max_atmosphering_speed}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Crew: {vehicle.crew}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Passengers: {vehicle.passengers}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Cargo Capacity: {vehicle.cargo_capacity}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Consumables: {vehicle.consumables}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Vehicle Class: {vehicle.vehicle_class}
      </li>
    </ul>
  );
}
