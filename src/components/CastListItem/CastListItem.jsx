import React from "react";
import css from "./CastListItem.module.css";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL } from "../../services/apiTMDB";

const CastListItem = ({ dataCast }) => {
  return (
    <li className={css.castItem}>
      <img
        className={css.image}
        src={
          dataCast.profile_path
            ? `${IMAGE_BASE_URL}${dataCast.profile_path}`
            : "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg"
        }
        alt={dataCast.name}
      />
      <h4 className={css.name}>{dataCast.name}</h4>
      <p className={css.description}> {dataCast.character}</p>
    </li>
  );
};
CastListItem.propTypes = {
  dataCast: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    
  }).isRequired,
};

export default CastListItem;
