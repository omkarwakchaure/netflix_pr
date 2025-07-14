import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("Trailer:", trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;
