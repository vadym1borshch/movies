import React, { useEffect } from 'react'
import { Movies } from './components/Movies/Movies'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { getMovies } from './store/MoviesSlice'

function App() {
  const movie = useSelector((state: RootState) => state.movieSlice.initialMovie)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(getMovies(movie))
  }, [])

  return (
    <div>
      <Movies />
    </div>
  )
}

export default App
