export default function PersonDetails({ person }) {
  return (
    <ul
      className="rounded-md p-3 text-sm/6 text-black/50  transition dark:text-white/50   "
      aria-hidden="true"
    >
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        {person.name}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Birth year: {person.birth_year}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Height: {person.height} cm & Mass: {person.mass} kg
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Hair color: {person.hair_color} & Skin color: {person.skin_color} & Eye
        color: {person.eye_color}
      </li>
      <hr />
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Gender: {person.gender}
      </li>
    </ul>
  );
}
