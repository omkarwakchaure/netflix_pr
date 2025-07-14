import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  const getUpcomingMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        options
      );
      const data = await response.json();
      console.log(data);
      dispatch(addUpcomingMovie(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);

  //   return null;
};

export default useUpcomingMovie;
