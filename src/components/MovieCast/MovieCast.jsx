import { useEffect, useState } from "react";
import { getCast } from "/src/services/api.js";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import Error from "../Error/Error";
import { PropagateLoader } from "react-spinners";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://image.tmdb.org/t/p/w200/";
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCast(movieId);
        setCast(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      {loading && <PropagateLoader color="white" />}
      {error && <Error message={error.message || "Failed to upload file!"} />}
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.item}>
              {actor.profile_path ? (
                <img
                  className={css.img}
                  src={`${url}${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <div className={css.noImage}>No Image</div>
              )}

              <p className={css.name}>{actor.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p className={css.noCast}>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;
