import { SxProps, Theme } from '@mui/material'

export const movieDetailsStyleContainer: SxProps<Theme> = {
  width: '100%',
  '& .poster_genre-container': {
    display: 'flex',
    alignItems: 'start',
    gap: 3,
    '& .poster-container': {
      '& img': {
        width: '200px',
      },
    },
    '& .main_details-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      "& span": {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        fontSize: "18px"
      }
    },
  },
  '& .rest-details-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 2,
    '& .rating-container': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke',
    },
    "& span" :{
      fontSize: '16px'
    }
  },
}

export const watchedMovieModalStyle: SxProps<Theme> = {
  width: 600,
  position: 'relative',
  textTransform: 'none',
  textAlign: 'start',
  p: 1,
  '& button': {
    position: 'absolute',
    top: 0,
    minWidth: 0,
    width: "60px",
    height: '60px',
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: '50%',
    margin: '5px',
    "&:hover": {
      backgroundColor: 'lightgray',
    }
  },
}