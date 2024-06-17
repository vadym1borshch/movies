import React, { useEffect } from 'react'
import { Movies } from './components/Movies/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { getMovies } from './store/MoviesSlice'
import { Box } from '@mui/material'

function App() {
  const movie = useSelector((state: RootState) => state.movieSlice.initialMovie)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getMovies(movie))
  }, [])

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      backgroundColor: "#1d2527",
    }}>
      <Movies />
    </Box>
  )
}

export default App
