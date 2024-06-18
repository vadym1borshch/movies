import { FC, useState } from 'react'
import { Box, Icon } from '@mui/material'
import { infoContainer, MoviesStyles } from './MoviesStyles'
import { Search } from '../Search/Search'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Movie } from './Movie/Movie'
import { WatchedMoviesSummary } from './WatchedMoviesSummary/WatchedMoviesSummary'
import { WatchedMovie } from './WatchedMovies/WatchedMovies'
import { useResize } from '../../commonFiles/hooks'

interface IMovieProps {}

export const Movies: FC<IMovieProps> = () => {
  const movies = useSelector((state: RootState) => state.movieSlice.movies)
  const [isClose, setIsClose] = useState(false)
  const height = useResize(200)
  const watchedMovies = useSelector(
    (state: RootState) => state.movieSlice.watchedMovies,
  )
  return (
    <Box
      sx={{
        ...MoviesStyles,
        '& .left_container': isClose
          ? {
              minHeight: '80px !important',
              transition: 'min-height .5s ease-in-out',
            }
          : {},
      }}
    >
      <Search />
      <Box
        className="movies_container"
        sx={
          isClose
            ? {
                alignItems: 'start !important',
              }
            : {}
        }
      >
        <Box className="movies left_container">
          <Box className="icon_container">
            <Icon onClick={() => setIsClose(!isClose)}>
              {!isClose ? <RemoveIcon /> : <AddIcon />}
            </Icon>
          </Box>
          <Movie movies={movies} isClose={isClose} height={height} />
        </Box>
        <Box className="movies right_container">
          <Box sx={{ ...infoContainer }}>
            <Box className="watched-movies-summary_info">
              <Box className="watched-movies_info-container">
                <Box className="icon_container">
                  <Icon onClick={() => setIsClose(!isClose)}>
                    {!isClose ? <RemoveIcon /> : <AddIcon />}
                  </Icon>
                </Box>
                <WatchedMoviesSummary />
              </Box>

              <Box
                className="watched-movies_container"
                sx={{
                  height: `${height}px`,
                }}
              >
                {watchedMovies.map((movie) => {
                  return (
                    <WatchedMovie
                      key={movie.imdbID}
                      isClose={isClose}
                      movie={movie}
                    />
                  )
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
