import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material'
import _ from 'lodash'
import { getMovies } from '../../store/MoviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store/store'
//@ts-ignore
import moviesIcon from '../../commonFiles/movie-player-play-video-svgrepo-com.svg'
import { moviesSelector } from '../../store/selectors'

/**
 *
 * @param icon - must be as svg.
 *
 */
interface ISearchProps {
  icon?: string
  title?: string
  label?: string
}

export const Search: FC<ISearchProps> = ({ label, icon, title }) => {
  const movies = useSelector(moviesSelector)

  const [query, setQuery] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQuery(e.currentTarget.value)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceAction = useCallback(
    _.debounce((value: string) => {
      dispatch(getMovies(value))
      setQuery('')
    }, 3000),
    [],
  )

  useEffect(() => {
    if (!query) return
    debounceAction(query)
    return () => {}
  }, [debounceAction, query])

  useEffect(() => {}, [])

  return (
    <Box className="search_bar">
      <Box className="logo_container">
        <span className="icon">
          <img src={icon || moviesIcon} alt="logo" />
        </span>
        <span className="title">{title || 'TITLE'}</span>
      </Box>
      <Box className="text-field_container">
        <TextField
          id="outlined-basic"
          label={label || 'Search movie...'}
          variant="outlined"
          value={query}
          onChange={onChangeHandler}
        />
      </Box>
      <Box className="result_container">
        Found {movies.length} {`${movies.length === 1 ? 'result' : 'results'}`}
      </Box>
    </Box>
  )
}
