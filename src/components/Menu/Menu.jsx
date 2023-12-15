import css from "./Menu.module.css";

import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <header className={css.menu}>
      <NavLink className={css.menuLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.menuLink} to="/movies">
        Movies
      </NavLink>
    </header>
  );
};
