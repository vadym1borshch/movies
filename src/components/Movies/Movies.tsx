import { FC } from 'react'
import { Box, Icon } from '@mui/material'
import { MoviesStyles } from './MoviesStyles'
import { Search } from '../Search/Search'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import RemoveIcon from '@mui/icons-material/Remove'
import { Movie } from './Movie/Movie'

interface IMovieProps {}

export const Movies: FC<IMovieProps> = () => {
  const movies = useSelector((state: RootState) => state.movieSlice.movies)

  return (
    <Box sx={MoviesStyles}>
      <Search />
      <Box className="movies_container">
        <Box className="movies left_container">
          <Box className="icon_container">
            <Icon>
              <RemoveIcon />
            </Icon>
          </Box>
          <Movie movies={movies} />
        </Box>
        <Box className="movies right_container">watched movies</Box>
      </Box>
    </Box>
  )
}
