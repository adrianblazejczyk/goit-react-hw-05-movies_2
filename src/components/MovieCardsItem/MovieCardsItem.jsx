import css from "./MovieCardsItem.module.css";

import { IMAGE_BASE_URL } from "../../services/apiTMDB";

import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const MovieCardsItem = ({ dataFilm }) => {
  const location = useLocation();
  return (
    <li className={css.item}>
      <Link
        to={`/movies/${dataFilm.id}`}
        state={{ from: location }}
        className={css.link}
      >
        <img
          className={css.image}
          src={
            dataFilm.poster_path
              ? `${IMAGE_BASE_URL}${dataFilm.poster_path}`
              : "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg"
          }
          alt={dataFilm.title}
        />
        <p className={css.title}>{dataFilm.title}</p>
      </Link>
    </li>
  );
};
MovieCardsItem.propTypes = {
  dataFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    
  }).isRequired,
};
