export default function FilmDetails({ film }) {
  return (
    <ul
      className="rounded-md p-3 text-sm/6 text-black/50  transition dark:text-white/50   "
      aria-hidden="true"
    >
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        {film.opening_crawl}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Release date: {film.release_date}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Director: {film.director}
      </li>
      <li aria-hidden="true">
        <hr />
      </li>
      <li className="rounded-md p-4 hover:bg-black/5 dark:hover:bg-white/5">
        Producer: {film.producer}
      </li>
    </ul>
  );
}
