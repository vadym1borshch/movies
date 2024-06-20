import { RootState } from './store'
import { createSelector } from 'reselect'

export const selectedMovieSelector = (state: RootState) =>
  state.movieSlice.selectedMovie
export const moviesSelector = (state: RootState) => state.movieSlice.movies
export const isMovieAddedSelector = (state: RootState) => state.movieSlice.isMovieAdded
export const statusSelector = (state: RootState) => state.movieSlice.status
export const errorSelector = (state: RootState) => state.movieSlice.error
export const initialMovieSelector = (state: RootState) => state.movieSlice.initialMovie
export const addedToWatchMoviesSelector = (state: RootState) => state.movieSlice.addedMovieToWatch

const initialValues = {
  totalOverallRating: 0,
  totalPersonalRating: 0,
  totalDuration: 0,
}

// Мемоізований селектор
export const overallMovieValuesSelector = createSelector(
  [addedToWatchMoviesSelector],
  (movies) => {
    const totalCount = movies.length
    const totalValues = movies.reduce((acc, movie) => {
      return {
        totalOverallRating: acc.totalOverallRating + movie.imdbRating,
        totalPersonalRating: acc.totalPersonalRating + movie.personalRating,
        totalDuration: acc.totalDuration + movie.Runtime,
      }
    }, initialValues)

    return {
      averageOverallRating: +(
        totalValues.totalOverallRating / totalCount
      ).toFixed(1),
      totalDuration: totalValues.totalDuration,
      averagePersonalRating: +(
        totalValues.totalPersonalRating / totalCount
      ).toFixed(1),
    }
  },
)
