import { RootState } from './store'
import { createSelector } from 'reselect';

export const watchedMoviesSelector = (state: RootState) =>
  state.movieSlice.watchedMovies

const initialValues = {
  totalOverallRating: 0,
  totalPersonalRating: 0,
  totalDuration: 0,
}

// Мемоізований селектор
export const overallMovieValuesSelector = createSelector(
  [watchedMoviesSelector],
  (movies) => {
    const totalCount = movies.length
    const totalValues = movies.reduce((acc, movie) => {
      return {
        totalOverallRating: acc.totalOverallRating + movie.overallRating,
        totalPersonalRating: acc.totalPersonalRating + movie.personalRating,
        totalDuration: acc.totalDuration + movie.duration,
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
  }
);


