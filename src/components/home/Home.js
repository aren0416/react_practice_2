import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { PageTitle } from "../PageTitle";

// console.log(movieApi.nowPlaying());

const MainBanner = styled.div`
  height: 80vh;
`;

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
      {nowPlaying ? (
        <MainBanner
          style={{
            background: `url(https://image.tmdb.org/t/p/original${nowPlaying[0].backdrop_path}) no-repeat center / cover`,
          }}
        ></MainBanner>
      ) : (
        "Loading"
      )}
    </>
  );
};
