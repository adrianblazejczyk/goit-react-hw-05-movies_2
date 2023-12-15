import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import { SharedLayout } from "./components";
import NotFound from "./pages/NotFound/NotFound";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));

const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:productId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
