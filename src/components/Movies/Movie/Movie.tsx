import { FC } from 'react'
import { Box } from '@mui/material'
import { MovieType, getMoviesInfo } from '../../../store/MoviesSlice'
import { MovieStyles } from './style'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'

interface IMovieProps {
  movies: MovieType[]
  isClose: boolean
  height: number
}

export const Movie: FC<IMovieProps> = ({ movies, isClose, height }) => {

  const dispatch = useDispatch<AppDispatch>()
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
            onClick={() => {
              dispatch(getMoviesInfo(movie.imdbID))
            }}
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
