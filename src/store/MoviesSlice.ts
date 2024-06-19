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
  Plot: string
  Year: string
  Genre: string
  Actors: string
  Type: string
  imdbID: string
  Runtime: number
  imdbRating: number
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

type MovieInfoTypeAPI = {
  Actors: string
  Genre: string
  Plot: string
  Poster: string
  Runtime: string
  Title: string
  Type: string
  Year: string
  imdbID: string
  imdbRating: string
}

export const getMovies = createAsyncThunk<
  MovieType[], // Тип даних, який повертає сервер
  string, // Тип аргументу для thunk (у цьому випадку - відсутній)
  { rejectValue: string } // Опціональні параметри та обробка помилок
>('movies/getMovies', async (query) => {
  const url = `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`

  const res = await axios.get(url)
  return res.data.Search
})

export const getMoviesInfo = createAsyncThunk<
  MovieInfoTypeAPI,
  string,
  { rejectValue: string }
>('movies/getMoviesInfo', async (id) => {
  const url = `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`

  const res = await axios.get(url)
  return res.data
})

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearIsMovieAddedAction: (state) => {
      state.isMovieAdded = null
    },
    setRatingWatchedMoviesAction: (
      state,
      action: PayloadAction<{ id: string; rating: number }>,
    ) => {
      state.watchedMovies = state.watchedMovies.map((movie) => {
        if (movie.imdbID === action.payload.id) {
          return { ...movie, personalRating: action.payload.rating }
        }
        return movie
      })
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
      .addCase(getMoviesInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        getMoviesInfo.fulfilled,
        (state, action: PayloadAction<MovieInfoTypeAPI>) => {
          state.status = 'succeeded'
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
                Runtime:
                  action.payload.Runtime !== 'N/A'
                    ? // @ts-ignore
                      parseInt(action.payload.Runtime.match(/\d+/)[0], 10)
                    : 0,
                imdbRating: +action.payload.imdbRating,
                personalRating: 0,
                Plot: action.payload.Plot,
                Type: action.payload.Type,
                Year: action.payload.Year,
                Actors: action.payload.Actors,
                Genre: action.payload.Genre,
              },
            ]
          }
        },
      )
      .addCase(getMoviesInfo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const {
  setRatingWatchedMoviesAction,
  clearIsMovieAddedAction,
} = movieSlice.actions

export default movieSlice.reducer
