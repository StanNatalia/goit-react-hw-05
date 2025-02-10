import { Suspense, useEffect, useState } from "react";
import { getDetails } from "../../services/api";
import {
  useLocation,
  useParams,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Details from "/src/components/Details/Details";
import css from "./MovieDetailsPage.module.css";
import { useRef } from "react";
import Error from "/src/components/Error/Error";
import { PropagateLoader } from "react-spinners";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const goBackUrl = useRef(location.state?.from ?? "/");

  const [movieDetails, setMovieDetails] = useState({
    poster_path: "",
    title: "",
    release_date: "",
    vote_average: null,
    overview: "",
    genres: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getDetails(movieId);
        setMovieDetails(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div className={css.container}>
      <Link to={goBackUrl.current} className={css.link}>
        Go Back
      </Link>
      {loading && <PropagateLoader color="white" />}
      {error && <Error message={error.message || "Failed to upload file!"} />}
      <Details movieDetails={movieDetails} />
      <nav className={css.nav}>
        <NavLink to="cast" className={css.link}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.link}>
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<PropagateLoader color="white" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
