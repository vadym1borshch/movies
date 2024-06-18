import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import {
  setRatingWatchedMoviesAction,
  WatchedMovieType,
} from '../../../store/MoviesSlice'
import StarRateIcon from '@mui/icons-material/StarRate'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import StarsIcon from '@mui/icons-material/Stars'
import { TransitionsPopper } from '../../Popper/Popper'
import Rating from '../../Rating/Rating'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'

interface IWatchedMoviesProps {
  isClose?: boolean
  movie: WatchedMovieType
}

export const WatchedMovie: FC<IWatchedMoviesProps> = ({ isClose, movie }) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }
  const handleSetRating = (value: number) => {
    setOpen((previousOpen) => !previousOpen)
    dispatch(setRatingWatchedMoviesAction({ id: movie.imdbID, rating: value }))
  }
  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <>
      <TransitionsPopper open={open} anchorEl={anchorEl} id={id}>
        <Rating callback={handleSetRating} />
      </TransitionsPopper>
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
            <span aria-describedby={id} onClick={handleClick}>
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
    </>
  )
}
