import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type MovieType = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}
export type WatchedMovieType = {
  Poster: string
  Title: string
  imdbID: string
  duration: number
  overallRating: number
  personalRating: number
}

type StateType = {
  movies: MovieType[]
  watchedMovies: WatchedMovieType[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | string | undefined
  initialMovie: string
  isMovieAdded: string | null
}

const initialState: StateType = {
  movies: [],
  watchedMovies: [],
  status: 'idle',
  error: null,
  initialMovie: 'interstellar',
  isMovieAdded: null,
}
const KEY = 'af71ac68'

export const getMovies = createAsyncThunk<
  MovieType[], // Тип даних, який повертає сервер
  string, // Тип аргументу для thunk (у цьому випадку - відсутній)
  { rejectValue: string } // Опціональні параметри та обробка помилок
>('movies/getMovies', async (query) => {
  const url = `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`

  const res = await axios.get(url)
  return res.data.Search
})

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addWatchedMovieAction: (state, action: PayloadAction<MovieType>) => {
      const hasMovie = state.watchedMovies.find(
        (movie) => movie.imdbID === action.payload.imdbID,
      )
      if (hasMovie) {
        state.isMovieAdded = action.payload.imdbID
      }
      if (!hasMovie) {
        state.watchedMovies = [
          ...state.watchedMovies,
          {
            Poster: action.payload.Poster,
            imdbID: action.payload.imdbID,
            Title: action.payload.Title,
            duration: Math.floor(Math.random() * 81) + 120,
            overallRating: Math.floor(Math.random() * 9),
            personalRating: 0,
          },
        ]
      }
    },
    clearIsMovieAddedAction: (state) => {
      state.isMovieAdded = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.movies = action.payload
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { addWatchedMovieAction, clearIsMovieAddedAction } =
  movieSlice.actions

export default movieSlice.reducer
