import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="" className={css.link}>
          Home
        </NavLink>
        <NavLink to="movies" className={css.link}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
