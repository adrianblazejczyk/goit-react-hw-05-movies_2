import css from "./SearchBar.module.css";
import PropTypes from "prop-types";
export const SearchBar = ({
  handlerOnClick,
  searchQuery,
  handleInputChange,
}) => {
  return (
    <form onSubmit={handlerOnClick}>
      <label>
        <input
          className={css.input}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="search for films"
        />
      </label>
      <button className={css.button} type="submit">
        Wyślij
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  handlerOnClick: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
