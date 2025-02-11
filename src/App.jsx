import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import { lazy, Suspense } from "react";
import css from "./App.module.css";
// import Home from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetalsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetalsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <main className={css.wrapper}>
      <Navigation />
      <Suspense fallback={<div className={css.suspense}>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetalsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
