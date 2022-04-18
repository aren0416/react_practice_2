import styled from "styled-components";

const SMainBanner = styled.div`
  height: 80vh;
  padding: 350px 0 0 100px;
`;
const TitleWrap = styled.div`
  width: 60%;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  line-height: 1.5rem;
`;

export const MainBanner = ({ play }) => {
  const firstNowPlaying = () => play[6];
  return (
    <SMainBanner
      style={{
        background: `url(https://image.tmdb.org/t/p/original${
          firstNowPlaying().backdrop_path
        }) no-repeat center / cover`,
      }}
    >
      <TitleWrap>
        <Title>{firstNowPlaying().title}</Title>
        <Desc>{firstNowPlaying().overview}</Desc>
      </TitleWrap>
    </SMainBanner>
  );
};
