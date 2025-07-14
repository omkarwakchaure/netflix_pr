import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopratedMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopratedMovie = () => {
  const dispatch = useDispatch();

  const getTopratedMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        options
      );
      const data = await response.json();
      console.log(data);
      dispatch(addTopratedMovie(data.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getTopratedMovie();
  }, []);

  //   return null;
};

export default useTopratedMovie;
