import React, { useEffect } from 'react'
import { Movies } from './components/Movies/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from './store/store'
import {
  deleteSelectedMovieAction,
  getMovies,
  setRatingWatchedMoviesAction,
} from './store/MoviesSlice'
import { Box } from '@mui/material'
import { TransitionsModal } from './components/Modal/Modal'
import {
  initialMovieSelector,
  selectedMovieSelector,
} from './store/selectors'
import { watchedMovieModalStyle } from './components/Movies/MovieDetails/MovieDetailsStyle'
import { MovieDetails } from './components/Movies/MovieDetails/MovieDetails'

function App() {
  const initialMovie = useSelector(initialMovieSelector)
  const movie = useSelector(selectedMovieSelector)
  const dispatch = useDispatch<AppDispatch>()

  const handleSetRating = (value: number) => {
    dispatch(setRatingWatchedMoviesAction({ movie: movie!, rating: value }))
  }

  const handleCloseDetails = () => {
    if (!movie) return
    dispatch(deleteSelectedMovieAction())
  }

  useEffect(() => {
    dispatch(getMovies(initialMovie))
  }, [])
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#1d2527',
      }}
    >
      <TransitionsModal
        open={!!movie}
        close={handleCloseDetails}
        sx={watchedMovieModalStyle}
        buttonChildren="back"
      >
        {movie && <MovieDetails movie={movie} callback={handleSetRating} />}
      </TransitionsModal>
      <Movies />
    </Box>
  )
}

export default App
