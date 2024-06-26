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
      '& span': {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        fontSize: '18px',
      },
    },
  },
  '& .rest-details-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 2,
    '& .rating-container': {
      width: '100%',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      paddingTop: '10px',
      flexDirection: 'column',
      backgroundColor: 'whitesmoke',
      '& .rating': {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& .add_to_list': {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& button': {
          width: '50%',
          height: '30px',
          borderRadius: '10px',
          backgroundColor: '#6440d5',
        },
      },
    },
    '& span': {
      fontSize: '16px',
    },
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
    width: '60px',
    height: '60px',
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: '50%',
    margin: '5px',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  },
}
