import { useEffect, useState } from "react";
import SearchBar from "/src/components/SearchBar/SearchBar";
import { getSearch } from "/src/services/api.js";
import { useSearchParams } from "react-router-dom";
import MoviesList from "/src/components/MoviesList/MoviesList";
import Error from "/src/components/Error/Error";
import { PropagateLoader } from "react-spinners";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getSearch(query);
        setMovies(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query]);
  return (
    <div className={css.wrapper}>
      <SearchBar />
      {loading && <PropagateLoader color="white" />}
      {error && <Error message={error.message || "Failed to upload file!"} />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
