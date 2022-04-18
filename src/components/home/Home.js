import { movieApi } from "../../api";
import { PageTitle } from "../PageTitle";

console.log(movieApi.nowPlaying());

export const Home = () => {
  return (
    <>
      <PageTitle title={"Home"} />
      <div>Home</div>
    </>
  );
};
