import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};
type StateType = {
  movies: MovieType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string | undefined;
  initialMovie: string
};

const initialState: StateType = {
  movies: [],
  status: "idle",
  error: null,
  initialMovie: "interstellar",
};
const KEY = "af71ac68";

export const getMovies = createAsyncThunk<
  MovieType[], // Тип даних, який повертає сервер
  string, // Тип аргументу для thunk (у цьому випадку - відсутній)
  { rejectValue: string } // Опціональні параметри та обробка помилок
>("movies/getMovies", async (query) => {

  const url = `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

  const res = await axios.get(url);
  return res.data.Search;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<{}>) => {

    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
