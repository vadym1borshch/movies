import { FC } from 'react'
import { Box } from '@mui/material'
import { useResize } from '../../../commonFiles/hooks'
import { MovieStyles } from '../Movie/style'
import { WatchedMovie } from '../../../store/MoviesSlice'

interface IWatchedMoviesProps {
  isClose?: boolean
  movie: WatchedMovie
}

export const WatchedMovies: FC<IWatchedMoviesProps> = ({ isClose, movie }) => {
  const height = useResize(200)

  return (
    <Box

    >
      <Box>
        <img src={movie.Poster} alt={movie.Title} />
      </Box>
      <Box>
        <Box>
          <h3>{movie.Title}</h3>
        </Box>
        <Box>
          <span>{movie.rating}</span>
          <span>{movie.usersRating}</span>
          <span>{movie.duration}</span>
        </Box>
      </Box>
    </Box>
  )
}
