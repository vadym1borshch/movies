import { FC, useState } from 'react'
import { Box, Icon, SxProps, Theme } from '@mui/material'
import { infoContainer, MoviesStyles } from './MoviesStyles'
import { Search } from '../Search/Search'
import { useSelector } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Movie } from './Movie/Movie'
import { WatchedMoviesSummary } from './WatchedMoviesSummary/WatchedMoviesSummary'
import { WatchedMovie } from './WatchedMovies/WatchedMovies'
import { useResize } from '../../commonFiles/hooks'
import {
  addedToWatchMoviesSelector,
  moviesSelector,
} from '../../store/selectors'

const closeStyle: SxProps<Theme> = {
  minHeight: '80px !important',
  transition: 'min-height .5s ease-in-out',
}

interface IMovieProps {}

export const Movies: FC<IMovieProps> = () => {
  const movies = useSelector(moviesSelector)
  const selectedMovies = useSelector(addedToWatchMoviesSelector)
  const [isCloseMovies, setIsCloseMovies] = useState(false)
  const [isCloseWatchedMovies, setIsCloseWatchedMovies] = useState(false)
  const height = useResize(170)

  return (
    <Box sx={MoviesStyles}>
      <Search />
      <Box
        className="movies_container"
        sx={
          isCloseMovies
            ? {
                alignItems: 'start !important',
              }
            : {}
        }
      >
        <Box className="container" sx={isCloseMovies ? closeStyle : {}}>
          <Box className="icon_container">
            <Icon onClick={() => setIsCloseMovies(!isCloseMovies)}>
              {!isCloseMovies ? <RemoveIcon /> : <AddIcon />}
            </Icon>
          </Box>
          <Movie movies={movies} isClose={isCloseMovies} height={height} />
        </Box>
        <Box
          className="container"
          sx={
            isCloseWatchedMovies
              ? { ...closeStyle, right: 0, top: 0 }
              : { right: 0, top: 0 }
          }
        >
          <Box sx={{ ...infoContainer }}>
            <Box className="watched-movies-summary_info">
              <Box className="watched-movies_info-container">
                <Box className="icon_container">
                  <Icon
                    onClick={() =>
                      setIsCloseWatchedMovies(!isCloseWatchedMovies)
                    }
                  >
                    {!isCloseWatchedMovies ? <RemoveIcon /> : <AddIcon />}
                  </Icon>
                </Box>
                <WatchedMoviesSummary />
              </Box>

              <Box
                className={
                  isCloseWatchedMovies ? '' : 'watched-movies_container'
                }
                sx={{
                  height: isCloseWatchedMovies ? '80px' : `${height - 66}px`,
                  display: isCloseWatchedMovies ? 'none' : 'block',
                }}
              >
                {!isCloseWatchedMovies ? (
                  selectedMovies.map((movie) => {
                    return <WatchedMovie key={movie.imdbID} movie={movie} />
                  })
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
