import React, { useEffect } from "react";
import Header from "../components/Header";
import api from "../config/api";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import type { Movie, MoviesData } from "../model/type";
import { CategoryMovie } from "../components/CategoryMovie";

function Homepage() {
  const [movies, setMovies] = React.useState<MoviesData>({
    upcoming: [],
    popular: [],
    topRated: [],
    nowPlaying: [],
  });
  const fetchData = async () => {
    try {
      const endpoints = [
        "movie/upcoming",
        "movie/popular",
        "movie/top_rated",
        "movie/now_playing",
      ];

      const [resUpcoming, resPopular, resTopRated, resNowPlaying] =
        await Promise.all(endpoints.map((endpoint) => api.get(endpoint)));

      setMovies({
        upcoming: resUpcoming.data.results,
        popular: resPopular.data.results,
        topRated: resTopRated.data.results,
        nowPlaying: resNowPlaying.data.results,
      });
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };
  console.log(movies);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Hero data={movies.upcoming} />
      <CategoryMovie title="Upcoming" data={movies.upcoming} />
    </>
  );
}

export default Homepage;
