import { FC } from 'react'
import { Box } from '@mui/material'
import { MovieType, getMoviesInfo, setSelectedMovieAction } from '../../../store/MoviesSlice'
import { MovieStyles } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../store/store'
import { addedToWatchMoviesSelector } from '../../../store/selectors'

interface IMovieProps {
  movies: MovieType[]
  isClose: boolean
  height: number
}

export const Movie: FC<IMovieProps> = ({ movies, isClose, height }) => {
  const selectedMovie = useSelector(addedToWatchMoviesSelector)
  const dispatch = useDispatch<AppDispatch>()

  const showMoviesInfo = (id: string) => {
    const existingMovie = selectedMovie.find((movie)=> movie.imdbID === id)
    if (existingMovie) {
      dispatch(setSelectedMovieAction(existingMovie))
      return
    }
    dispatch(getMoviesInfo(id))
  }

  return (
    <Box
      sx={{
        ...MovieStyles,
        height: isClose ? '80px' : `${height}px`,
        display: isClose ? 'none' : 'block',
      }}
    >
      {movies.map((movie) => {
        return (
          <Box
            key={movie.imdbID}
            className="movie_container"
            onClick={() => showMoviesInfo(movie.imdbID)}
          >
            <Box>
              <img src={movie.Poster} alt={movie.Title} />
            </Box>
            <Box className="descriptions">
              <span>{movie.Title}</span>
              <span>{movie.Year}</span>
            </Box>
            <Box className="bottom_line" />
          </Box>
        )
      })}
    </Box>
  )
}
