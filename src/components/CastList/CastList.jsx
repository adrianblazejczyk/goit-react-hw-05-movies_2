import React from "react";
import css from "./CastList.module.css";
import CastListItem from "../CastListItem/CastListItem";
import PropTypes from "prop-types";

const CastList = ({ dataCasts }) => {
  return (
    <ul className={css.listCast}>
      {dataCasts.map((item) => (
        <CastListItem key={item.id} dataCast={item} />
      ))}
    </ul>
  );
};

CastList.propTypes = {
  dataCasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CastList;
