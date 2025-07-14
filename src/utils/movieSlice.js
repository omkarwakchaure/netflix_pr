import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topratedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopratedMovie: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovie,
  addUpcomingMovie,
  addTopratedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
