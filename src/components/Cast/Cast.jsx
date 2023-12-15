import css from "./Cast.module.css";
import { getMovieCredits } from "../../services/apiTMDB";
import CastList from "../CastList/CastList";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Cast = () => {
  const { productId } = useParams();
  const [dataCasts, setDataCasts] = useState([]);

  useEffect(() => {
    getMovieCredits(productId)
      .then((response) => {
        setDataCasts(response.cast);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <section>
      {dataCasts.length > 0 ? (
        <CastList dataCasts={dataCasts} />
      ) : (
        <h3 className={css.noFoud}>No reviews available</h3>
      )}
    </section>
  );
};

export default Cast;
