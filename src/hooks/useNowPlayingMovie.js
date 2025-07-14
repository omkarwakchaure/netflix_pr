import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        options
      );
      const data = await response.json();
      console.log(data);
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

//   return null;
};

export default useNowPlayingMovies;
