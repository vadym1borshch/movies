import { SxProps, Theme } from '@mui/material'

const scrollStyle: SxProps<Theme> = {
  '&::-webkit-scrollbar': {
    width: '3px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#555',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#f1f1f1',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
}

const iconStyles: SxProps<Theme> = {
  '& .icon_container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    '& svg': {
      backgroundColor: 'black',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
    },
  },
}

export const MoviesStyles: SxProps<Theme> = {
  backgroundColor: '#1d2527',
  color: 'white',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& .search_bar': {
    height: '80px',
    backgroundColor: '#6440d5',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10px 10px 0 10px',
    '& .text-field_container': {
      display: 'flex',
      justifyContent: 'center',
      width: '50%',
      '& .MuiTextField-root ': {
        width: '100%',
        '& label': {
          color: 'greenyellow',
        },
        '& .MuiInputBase-root': {
          backgroundColor: '#7a4ff3',
          borderRadius: '10px',
          color: '#fff',
          '& fieldset': {
            borderColor: 'greenyellow',
          },
          '& .Mui-focused': {},
        },
      },
    },
    '& .logo_container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1,
      width: '25%',
      '& img': {
        width: '50px',
      },
    },
    '& .result_container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '25%',
    },
  },
  '& .movies_container': {
    margin: '10px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    '& .movies': {
      display: 'flex',
      width: '50%',
      backgroundColor: '#4d585e',
      borderRadius: '10px',
      minHeight: '100%',
      flexDirection: 'column',
      ...iconStyles,
    },
    '& .left_container': {
      '& .icon_container': {
        margin: '5px',
      },
    },
    '& .right_container': {},
  },
}

export const infoContainer: SxProps<Theme> = {
  '& .watched-movies-summary_info': {
    borderRadius: '10px',
    margin: '0 0 10px 0',
    ...iconStyles,
    '& .watched-movies_container': {
      overflow: 'auto',
      marginTop: '10px',
      padding: '0 5px',
      ...scrollStyle,
      '& .movie_container': {
        display: 'flex',
        alignItems: 'start',
        gap: 1,
        justifyContent: '',
        borderBottom: "2px solid white",
        cursor: 'pointer',
        '& .movie-image_container': {
          '& img': {
            width: '100px',
            height: '150px',
          },
        },
        '& .movie-descriptions_container': {
          '& .movie-data_container': {
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            '& span': {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            },
          },
        },
      },
    },
    '& .watched-movies_info-container': {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#919d94',
      borderRadius: "10px",
      padding: '5px',
      '& h3': { margin: '0 0 5px 0' },
      '& .watched-movies_info': {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: 3,
        '& span': {
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        },
      },
    },
  },
}


