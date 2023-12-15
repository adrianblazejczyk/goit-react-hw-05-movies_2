import css from "./Reviews.module.css";
import { getMovieReviews } from "../../services/apiTMDB";
import { ReviewsList } from "../../components";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";


const Reviews = () => {
  const { productId } = useParams();
  const [dataReviews, setDataReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(productId)
      .then((response) => {
        setDataReviews(response.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [productId]);
  return (
    <section>
      {dataReviews.length > 0 ? (
        <ReviewsList dataReviews={dataReviews} />
      ) : (
        <h3 className={css.noFoud}>No reviews available</h3>
      )}
    </section>
  );
};

export default Reviews;
