import React, { useEffect } from "react";
import Header from "../components/Header";
import api from "../config/api";
import Hero from "../components/Hero";
import type { MoviesData } from "../model/type";
import { CategoryMovie } from "../components/CategoryMovie";
import Footer from "../components/Footer";
import Floating from "../components/Floating";
import ServiceCardList from "../components/ServiceCardList";
import LayoutMovie from "../components/LayoutMovie";

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
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Hero data={movies.upcoming} />
      <main>
        <CategoryMovie title="Mới trên NetFlix" data={movies.upcoming} />
        <CategoryMovie title="Phổ biến" data={movies.popular} />
        <CategoryMovie title="Xếp hạng hàng đầu" data={movies.topRated} />
        <CategoryMovie title="Đang chiếu" data={movies.nowPlaying} />
        <ServiceCardList title="Gói dịch vụ đáp ứng nhu cầu của bạn" />
        <LayoutMovie />
      </main>
      <Floating />
      <Footer />
    </>
  );
}

export default Homepage;
