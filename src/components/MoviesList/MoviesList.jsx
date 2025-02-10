import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Most popular films:</h2>
      <ul className={css.itemWrapper}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id} className={css.tumb}>
            <Link to={`/movies/${id}`} state={location}>
              <img src={`${imgUrl}${poster_path}`} alt={title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
