import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  const getPopularMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        options
      );
      const data = await response.json();
      console.log(data);
      dispatch(addPopularMovie(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovie();
  }, []);

  //   return null;
};

export default usePopularMovie;
