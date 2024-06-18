import React, { useEffect } from 'react'
import { Movies } from './components/Movies/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { clearIsMovieAddedAction, getMovies } from './store/MoviesSlice'
import { Box } from '@mui/material'
import { TransitionsModal } from './components/Modal/Modal'
import { initialMovieSelector, isMovieAddedSelector } from './store/selectors'

function App() {
  const initialMovie = useSelector(initialMovieSelector)
  const isAdded = useSelector(isMovieAddedSelector)

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getMovies(initialMovie))
  }, [])

  const handleModalClose = () => {
    dispatch(clearIsMovieAddedAction())
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#1d2527',
      }}
    >
      <TransitionsModal
        open={!!isAdded}
        close={handleModalClose}
        message={'movie is already added'}
      />
      <Movies />
    </Box>
  )
}

export default App
