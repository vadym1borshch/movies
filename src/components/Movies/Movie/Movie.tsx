import { FC } from 'react'
import { Box } from '@mui/material'
import { MovieType } from '../../../store/MoviesSlice'
import { MovieStyles } from './style'
import { useResize } from '../../../commonFiles/hooks'

interface IMovieProps {
  movies: MovieType[]
}

export const Movie: FC<IMovieProps> = ({ movies }) => {
  const height = useResize(200)
  return (
    <Box
      sx={{
        ...MovieStyles,
        height: `${height}px`,
      }}
    >
      {movies.map((movie) => {
        return (
          <Box key={movie.imdbID} className="movie_container">
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
