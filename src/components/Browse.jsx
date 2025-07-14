import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopratedMovie from "../hooks/useTopratedMovie";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useUpcomingMovie();
  useTopratedMovie();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
