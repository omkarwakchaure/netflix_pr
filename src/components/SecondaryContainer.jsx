import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("Movies in SecondaryContainer:", movies);
  return (
    <div className="bg-black">
      <div className="-mt-80 pl-8 relative z-20">
        <MovieList title={"Trending Now"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Top-Rated"} movies={movies.topratedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
