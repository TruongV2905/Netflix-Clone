import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../config/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Floating from "../components/Floating";
import LayoutMovie from "../components/LayoutMovie";
import BackGround from "../components/BackGround";
import ServiceCardList from "../components/ServiceCardList";
import PosterCard from "../components/PosterCard";
import TopCastList from "../components/TopcastList";
import VideoList from "../components/VideoList";
import { CategoryMovie } from "../components/CategoryMovie";
import type { MovieData } from "../model/type";

// 🧩 Import types

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<MovieData>({
    detail: {},
    similar: [],
    recomendations: [],
    video: [],
    credit: [],
  });

  const fetchData = async () => {
    try {
      const endpoints = [
        `movie/${id}`,
        `movie/${id}/similar`,
        `movie/${id}/recommendations`,
        `movie/${id}/videos`,
        `movie/${id}/credits`,
      ];

      const [resDetail, resSimilar, resRecomendations, resVideo, resCredit] =
        await Promise.all(endpoints.map((endpoint) => api.get(endpoint)));

      setData({
        detail: resDetail.data,
        similar: resSimilar.data.results,
        recomendations: resRecomendations.data.results,
        video: resVideo.data.results,
        credit: resCredit.data.cast,
      });
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, [id]);

  return (
    <>
      <Header />
      <BackGround image={data.detail.backdrop_path} />
      <main className="w-full min-h-screen">
        <PosterCard
          image={data.detail.poster_path}
          overview={data.detail.overview}
          title={data.detail.title}
          genres={data.detail.genres}
          tagline={data.detail.tagline}
          vote_average={data.detail.vote_average}
          status={data.detail.status}
          date={data.detail.release_date}
          runtime={data.detail.runtime}
          vote_count={data.detail.vote_count}
          spoken_languages={data.detail.spoken_languages}
          production_companies={data.detail.production_companies}
          production_countries={data.detail.production_countries}
        />
        {data.credit.length > 0 && <TopCastList casts={data.credit} />}
        {data.video.length > 0 && <VideoList videos={data.video} />}
        {data.similar.length > 0 && (
          <CategoryMovie
            overlay={false}
            title="Phim tương tự"
            data={data.similar}
          />
        )}
        {data.recomendations.length > 0 && (
          <CategoryMovie
            overlay={false}
            title="Phim đề xuất"
            data={data.recomendations}
          />
        )}
        <ServiceCardList title="Gói dịch vụ đáp ứng nhu cầu của bạn" />
        <LayoutMovie />
      </main>
      <Floating />
      <Footer />
    </>
  );
};

export default MoviePage;
