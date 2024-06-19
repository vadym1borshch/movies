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
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { TransitionsModal } from '../../Modal/Modal'
import { MovieDetails } from '../MovieDetails/MovieDetails'
import { watchedMovieModalStyle } from '../MovieDetails/MovieDetailsStyle'

interface IWatchedMoviesProps {
  isClose?: boolean
  movie: WatchedMovieType
}

export const WatchedMovie: FC<IWatchedMoviesProps> = ({ isClose, movie }) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const dispatch = useDispatch<AppDispatch>()

  const [openPopper, setOpenPopper] = useState(false)

  const handleOpenDetails = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true)
  }
  const handleSetRating = (value: any) => {
    dispatch(setRatingWatchedMoviesAction({ id: movie.imdbID, rating: value }))
  }
  const handleCloseDetails = () => {
    setOpen((previousOpen) => !previousOpen)
  }
  const onHoverHandler = (event: React.MouseEvent<HTMLElement>) => {

    setAnchorEl(event.currentTarget)
  }
  const onHoverLeave = () => {
    setAnchorEl(null)
    setOpenPopper(!openPopper)
  }

  console.log(anchorEl)
  const canBeOpen = openPopper && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined

  return (
    <>
      <TransitionsPopper open={openPopper} anchorEl={anchorEl} id={id}>
        click me to show more
      </TransitionsPopper>
      <TransitionsModal
        open={open}
        close={handleCloseDetails}
        sx={watchedMovieModalStyle}
        buttonChildren="back"
      >
        <MovieDetails movie={movie} callback={handleSetRating} />
      </TransitionsModal>
      <Box className="movie_container" onClick={handleOpenDetails}>
        <Box className="movie-image_container">
          <img src={movie.Poster} alt={movie.Title} />
        </Box>
        <Box className="movie-descriptions_container">
          <Box className="movie-title_container">
            <h3>{movie.Title}</h3>
          </Box>
          <Box className="movie-data_container" aria-describedby={id}>
            <span

              onMouseEnter={onHoverHandler}
              onMouseLeave={onHoverLeave}
            >
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
          </Box>
        </Box>
      </Box>
    </>
  )
}
