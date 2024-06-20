import React, { FC } from 'react'
import {
  addMovieToWatchAction,
  deleteSelectedMovieAction,
  selectedMovieType,
} from '../../../store/MoviesSlice'
import { Box } from '@mui/material'
import { movieDetailsStyleContainer } from './MovieDetailsStyle'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import StarRateIcon from '@mui/icons-material/StarRate'
import Rating from '../../Rating/Rating'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { addedToWatchMoviesSelector } from '../../../store/selectors'

interface IMovieDetailsProps {
  movie: selectedMovieType
  callback?: (value: any) => void
}

export const MovieDetails: FC<IMovieDetailsProps> = ({ movie, callback }) => {
  const selectedMovie = useSelector(addedToWatchMoviesSelector)
  const existingMovie = selectedMovie.find((m)=> m.imdbID === movie.imdbID)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Box sx={movieDetailsStyleContainer}>
      <Box className="poster_genre-container">
        <Box className="poster-container">
          <img src={movie!.Poster} alt={movie!.Title} />
        </Box>
        <Box className="main_details-container">
          <h2>{movie!.Title}</h2>
          <span>
            {movie!.Released}
            <FiberManualRecordIcon />
            {movie!.Runtime} min
          </span>
          <span>{movie!.Genre}</span>
          <span>
            <StarRateIcon /> {movie!.imdbRating} IMDb rating
          </span>
        </Box>
      </Box>
      <Box className="rest-details-container">
        <Box className="rating-container">
          <Box className="rating">
            {!existingMovie ? (
              <Rating
                setRatingCallback={callback}
                pointColor="gold"
                pointSize={30}
                initialRating={movie!.personalRating}
              />
            ) : (
              <>
                you rate this movie: {movie!.personalRating} <StarRateIcon />{' '}
              </>
            )}
          </Box>
          <Box className="add_to_list">
            {!existingMovie &&
              <Button
                onClick={() => {
                  dispatch(addMovieToWatchAction(movie))
                  dispatch(deleteSelectedMovieAction())
                }}
              >
                add to list
              </Button>
            }
          </Box>
        </Box>
        <span>{movie!.Plot}</span>
        <span>Starring: {movie!.Actors}</span>
        <span>Directed by: {movie!.Writer}</span>
      </Box>
    </Box>
  )
}
