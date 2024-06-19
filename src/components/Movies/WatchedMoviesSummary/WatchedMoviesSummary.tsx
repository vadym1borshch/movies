import { FC } from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import StarRateIcon from '@mui/icons-material/StarRate'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import StarsIcon from '@mui/icons-material/Stars'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import {
  overallMovieValuesSelector,
  watchedMoviesSelector,
} from '../../../store/selectors'

interface iWatchedMoviesSummaryProps {}

export const WatchedMoviesSummary: FC<iWatchedMoviesSummaryProps> = ({}) => {
  const watchedMovies = useSelector(watchedMoviesSelector)
  const overallValues = useSelector(overallMovieValuesSelector)
  const totalCount = watchedMovies.length


  return (
    <>
      <Box className="watched-movies_header">
        <h3>Movies you watched</h3>
      </Box>
      <Box className="watched-movies_info">
        <span>
          <LocalMoviesIcon />
          {totalCount} {totalCount === 1 ? 'movie' : 'movies'}
        </span>
        <span>
          <StarRateIcon />
          {overallValues.averageOverallRating || 0}
        </span>
        <span>
          <StarsIcon />
          {overallValues.averagePersonalRating || 0}
        </span>
        <span>
          <TimelapseIcon />
          {overallValues.totalDuration}
        </span>
      </Box>
    </>
  )
}
