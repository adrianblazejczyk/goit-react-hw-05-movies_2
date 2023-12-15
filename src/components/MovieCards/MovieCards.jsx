import css from "./MovieCards.module.css";
import { MovieCardsItem } from "../../components";
import PropTypes from "prop-types";

export const MovieCards = ({ data }) => {
  return (
    <ul className={css.listMovie}>
      {data.map((item) => (
        <MovieCardsItem key={item.id} dataFilm={item}></MovieCardsItem>
      ))}
    </ul>
  );
};
MovieCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      
    })
  ).isRequired,
};
