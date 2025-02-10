import css from "./Details.module.css";

const MovieDetailsPage = ({
  movieDetails: {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const GenresData = genres?.map((genre) => genre.name).join(", ");
  return (
    <div className={css.container}>
      <img className={css.img} src={`${imgUrl}${poster_path}`} alt={title} />
      <div className={css.wrapper}>
        <p className={css.info}>
          <span className={css.span}>Rating: </span>
          {vote_average || "No vote average"}
        </p>
        <p className={css.info}>
          <span className={css.span}>Release Date: </span>
          {new Date(release_date).toLocaleDateString() || "No release date"}
        </p>
        <p className={css.info}>
          <span className={css.span}>Overview: </span>
          {overview || "No overview"}
        </p>
        <p className={css.info}>
          <span className={css.span}>Genres: </span>
          {GenresData || "No genres"}
        </p>
      </div>
    </div>
  );
};

<span className={css.span}></span>;

export default MovieDetailsPage;
