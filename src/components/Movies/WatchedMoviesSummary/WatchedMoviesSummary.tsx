import { FC } from 'react'
import { Box } from '@mui/material'

interface iWatchedMoviesSummaryProps {}

export const WatchedMoviesSummary: FC<iWatchedMoviesSummaryProps> = ({}) => {
  return (
    <Box className="watched-movies_info-container">
      <Box className="watched-movies_header">
        <h3>header</h3>
      </Box>
      <Box className="watched-movies_info">
        <span>movies</span>
        <span>rating</span>
        <span>rating</span>
        <span>duration</span>
      </Box>
    </Box>
  )
}
