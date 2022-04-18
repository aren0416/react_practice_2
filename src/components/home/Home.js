import { useEffect, useState } from "react";
import { movieApi } from "../../api";
import { PageTitle } from "../PageTitle";
import { MainBanner } from "./MainBanner";

// console.log(movieApi.nowPlaying());

export const Home = () => {
  const [nowPlaying, setNowPlaying] = useState();

  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results: nowPlayingData },
      } = await movieApi.nowPlaying();
      setNowPlaying(nowPlayingData);
    };
    movieData();
  }, []);

  console.log("현재 상영 영화", nowPlaying);

  return (
    <>
      <PageTitle title={"Home"} />
      {nowPlaying ? <MainBanner play={nowPlaying} /> : "Loading"}
    </>
  );
};
