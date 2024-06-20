import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type MovieType = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}
export type selectedMovieType = {
  Poster: string
  Title: string
  Plot: string
  Released: string
  Genre: string
  Actors: string
  Type: string
  imdbID: string
  Writer: string
  Runtime: number
  imdbRating: number
  personalRating: number
}

type StateType = {
  movies: MovieType[]
  selectedMovie: selectedMovieType | null
  addedMovieToWatch: selectedMovieType[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | string | undefined
  initialMovie: string
  isMovieAdded: string | null
}

const initialState: StateType = {
  movies: [],
  selectedMovie: null,
  addedMovieToWatch: [],
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
  Released: string
  Writer: string
  imdbID: string
  imdbRating: string
}

export const getMovies = createAsyncThunk<
  MovieType[], // Data type returns from API
  string, // Type of arg for thunk
  { rejectValue: string } // Optional params
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
    deleteSelectedMovieAction: (state) => {
      state.selectedMovie = null
    },
    setSelectedMovieAction: (state,action:PayloadAction<selectedMovieType>) => {
      state.selectedMovie = action.payload
    },
    deleteWatchedMovieAction: (state,action:PayloadAction<string>) => {
      state.addedMovieToWatch = state.addedMovieToWatch.filter((movie) => movie.imdbID !== action.payload)
    },
    setRatingWatchedMoviesAction: (
      state,
      action: PayloadAction<{ movie: selectedMovieType; rating: number }>,
    ) => {
      state.selectedMovie = {
        ...action.payload.movie,
        personalRating: action.payload.rating,
      }
    },
    addMovieToWatchAction: (
      state,
      action: PayloadAction<selectedMovieType>,
    ) => {
      const hasMovie = state.addedMovieToWatch.find(
        (movie) => movie.imdbID === action.payload.imdbID,
      )
      if (hasMovie) {
        state.isMovieAdded = action.payload.imdbID
        return
      }
      state.addedMovieToWatch = [...state.addedMovieToWatch, action.payload]
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

          state.selectedMovie = {
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
            Released: action.payload.Released,
            Actors: action.payload.Actors,
            Genre: action.payload.Genre,
            Writer: action.payload.Writer,
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
  addMovieToWatchAction,
  deleteSelectedMovieAction,
  clearIsMovieAddedAction,
  setSelectedMovieAction,
  deleteWatchedMovieAction
} = movieSlice.actions

export default movieSlice.reducer
