import React, { FC } from 'react'
import { WatchedMovieType } from '../../../store/MoviesSlice'
import { Box } from '@mui/material'
import { movieDetailsStyleContainer } from './MovieDetailsStyle'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import StarRateIcon from '@mui/icons-material/StarRate'
import Rating from '../../Rating/Rating'

interface IMovieDetailsProps {
  movie: WatchedMovieType
  callback?: (value: any) => void
}

export const MovieDetails: FC<IMovieDetailsProps> = ({ movie, callback }) => {
  return (
    <Box sx={movieDetailsStyleContainer}>
      <Box className="poster_genre-container">
        <Box className="poster-container">
          <img src={movie.Poster} alt={movie.Title} />
        </Box>
        <Box className="main_details-container">
          <h2>{movie.Title}</h2>
          <span>
            {movie.Released}
            <FiberManualRecordIcon />
            {movie.Runtime} min
          </span>
          <span>{movie.Genre}</span>
          <span>
            <StarRateIcon /> {movie.imdbRating} IMDb rating
          </span>
        </Box>
      </Box>
      <Box className="rest-details-container">
        <Box className="rating-container">
          <Rating
            setRatingCallback={callback}
            pointColor="gold"
            pointSize={30}
            initialRating={movie.personalRating}
          />
        </Box>
        <span>{movie.Plot}</span>
        <span>Starring: {movie.Actors}</span>
        <span>Directed by: {movie.Writer}</span>
      </Box>
    </Box>
  )
}
