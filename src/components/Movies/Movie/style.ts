import { SxProps, Theme } from "@mui/material";

const scrollStyle: SxProps<Theme> = {
  "&::-webkit-scrollbar": {
    width: "3px"
  },
  "&::-webkit-scrollbar-track": {
    background: "#555",
    borderRadius: "5px"
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#f1f1f1",
    borderRadius: "5px"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555"
  }
};

export const MovieStyles: SxProps<Theme> = {
  overflow: "auto",
  cursor: "pointer",
  ...scrollStyle,
  "& .movie_container": {
    margin: "5px 0 0 5px",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'start',
    position: "relative",
    "& img": {
      width: "100px",
      height: '150px'
    },
    "& .descriptions": {
      display: "flex",
      flexDirection: "column",
      alignItems: 'start',
      gap: 1,
      paddingLeft: "10px"
    },
    "& .bottom_line": {
      width: '95%',
      height: "1.5px",
      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
    }
  }
}

export const leftContainerCloseStyle: SxProps<Theme> = {
  minHeight: '0 !important',
  maxHeight: '40px',
}

export const movieContainerCloseStyle: SxProps<Theme> = {
  alignItems: 'start !important',
}