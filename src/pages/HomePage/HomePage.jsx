import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import { PropagateLoader } from "react-spinners";
import css from "./HomePage.module.css";
import Error from "/src/components/Error/Error";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovies();
        setMovies(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className={css.wrapper}>
      {error && <Error message={error.message || "Oh, shit!"} />}
      {loading && <PropagateLoader color="white" />}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
