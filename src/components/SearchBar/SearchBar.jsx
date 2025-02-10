import css from "./SearchBar.module.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className={css.form} onSubmit={handleSearch}>
      <input
        type="text"
        className={css.input}
        onChange={handleChange}
        value={query}
        placeholder="Search something"
        name="query"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
