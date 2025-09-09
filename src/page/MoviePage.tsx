import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Floating from "../components/Floating";
import LayoutMovie from "../components/LayoutMovie";
import BackGround from "../components/BackGround";
import ServiceCardList from "../components/ServiceCardList";

function MoviePage() {
  const { id } = useParams();

  const [data, setData] = React.useState({
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

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log(data.detail);
  return (
    <>
      <Header />
      <BackGround image={data.detail.backdrop_path} />
      <main>
        <ServiceCardList title="Gói dịch vụ đáp ứng nhu cầu của bạn" />
        <LayoutMovie />
      </main>
      <Floating />
      <Footer />
    </>
  );
}

export default MoviePage;
