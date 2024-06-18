import { FC } from 'react'
import { Box, Icon } from '@mui/material'
import { WatchedMovieType } from '../../../store/MoviesSlice'
import StarRateIcon from '@mui/icons-material/StarRate'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import StarsIcon from '@mui/icons-material/Stars'

interface IWatchedMoviesProps {
  isClose?: boolean
  movie: WatchedMovieType
}

export const WatchedMovie: FC<IWatchedMoviesProps> = ({ isClose, movie }) => {
  return (
    <Box className="movie_container">
      <Box className="movie-image_container">
        <img src={movie.Poster} alt={movie.Title} />
      </Box>
      <Box className="movie-descriptions_container">
        <Box className="movie-title_container">
          <h3>{movie.Title}</h3>
        </Box>
        <Box className="movie-data_container">
          <span>
            {movie.overallRating}
            <StarRateIcon />
          </span>
          <span>
            {movie.personalRating}
            <StarsIcon />
          </span>
          <span>
            {movie.duration}
            <TimelapseIcon />
          </span>
        </Box>
      </Box>
    </Box>
  )
}
