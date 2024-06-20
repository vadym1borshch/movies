import React, { FC } from 'react'
import { Box } from '@mui/material'
import {
  deleteWatchedMovieAction,
  selectedMovieType,
  setSelectedMovieAction,
} from '../../../store/MoviesSlice'
import StarRateIcon from '@mui/icons-material/StarRate'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import StarsIcon from '@mui/icons-material/Stars'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import Button from '@mui/material/Button'

interface IWatchedMoviesProps {
  isClose?: boolean
  movie: selectedMovieType
}

export const WatchedMovie: FC<IWatchedMoviesProps> = ({
  movie,
  isClose,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <Box
      className="movie_container"
    >
      <Box className="movie-image_container">
        <img src={movie.Poster} alt={movie.Title} />
      </Box>
      <Box className="movie-descriptions_container">
        <Box className="movie-title_container">
          <h3>{movie.Title}</h3>
        </Box>
        <Box className="movie-data_container">
          <span>
            {movie.imdbRating}
            <StarRateIcon />
          </span>
          <span>
            {movie.personalRating}
            <StarsIcon />
          </span>
          <span>
            {movie.Runtime}
            <TimelapseIcon />
          </span>

          <Button
            onClick={() => dispatch(deleteWatchedMovieAction(movie.imdbID))}
          >
            X
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
