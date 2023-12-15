import css from "./Home.module.css";
import { getTrending } from "../../services/apiTMDB";
import { MovieCards } from "../../components";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Home = () => {
  const [trendingFilms, settrendingFilms] = useState([]);

  useEffect(() => {
    getTrending()
      .then(function (response) {
        if (response) {
          settrendingFilms(response.results);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <main className={css.main}>
      <h1 className={css.titlePage}> Trending today</h1>
      <MovieCards data={trendingFilms}> </MovieCards>
    </main>
  );
};
Home.propTypes = {
  trendingFilms: PropTypes.arrayOf(PropTypes.shape({})),
};
export default Home;
