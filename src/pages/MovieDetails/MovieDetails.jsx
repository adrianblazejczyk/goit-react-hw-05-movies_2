import css from "./MovieDetails.module.css";
import { getMovieDetails } from "../../services/apiTMDB";
import { IMAGE_BASE_URL } from "../../services/apiTMDB";

import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";


const MovieDetails = () => {
  const { productId } = useParams();
  const [dataFilmDetails, setDataFilmDetails] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    getMovieDetails(productId)
      .then((response) => {
        if (response) {
          setDataFilmDetails(response);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [productId]);

  return (
    dataFilmDetails && (
      <main>
        <Link className={`${css.backButton} ${css.button}`} to={backLinkHref}>
          Go Back
        </Link>
        <section className={css.details}>
          <div>
            <img
              className={css.image}
              src={
                dataFilmDetails.poster_path
                  ? `${IMAGE_BASE_URL}${dataFilmDetails.poster_path}`
                  : "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg"
              }
              alt={dataFilmDetails.title}
            />
          </div>
          <div>
            <h2>{dataFilmDetails.title}</h2>
            <p>User Score: {Math.round(dataFilmDetails.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{dataFilmDetails.overview}</p>
            <h3>Genres</h3>
            {dataFilmDetails.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </section>
        <section>
          <p>Aditional Information</p>
          <ul>
            <li>
              <NavLink className={`${css.castButton} ${css.button}`} to="cast">
                Cast{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${css.reviewsButton} ${css.button}`}
                to="reviews"
              >
                Reviews{" "}
              </NavLink>
            </li>
          </ul>
        </section>
        <Outlet />
      </main>
    )
  );
};

export default MovieDetails;
