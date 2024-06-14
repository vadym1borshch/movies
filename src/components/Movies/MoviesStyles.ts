import { SxProps, Theme } from "@mui/material";

export const MoviesStyles: SxProps<Theme> = {
  backgroundColor: "#1d2527",
  color: "white",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  "& .search_bar": {
    height: "100px",
    backgroundColor: "#6440d5",
    margin: "10px 10px 0",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .text-field_container": {
      display: "flex",
      justifyContent: "center",
      width: "50%",
      "& .MuiTextField-root ": {
        width: "100%",
        "& label": {
          color: "greenyellow"
        },
        "& .MuiInputBase-root": {
          backgroundColor: "#7a4ff3",
          borderRadius: "10px",
          color: "#fff",
          "& fieldset": {
            borderColor: "greenyellow"
          },
          "& .Mui-focused": {}
        }
      }
    },
    "& .logo_container": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 1,
      width: "25%",
      "& img": {
        width: "50px"
      }
    },
    "& .result_container": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "25%"
    }
  },
  "& .movies_container": {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",
    gap: 1,
    "& .movies": {
      display: "flex",
      width: "50%",
      minHeight: "100%",
      backgroundColor: "#4d585e",
      borderRadius: "10px"
    },
    "& .left_container": {
      display: "flex",
      flexDirection: "column",
      "& .icon_container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        margin: "5px 5px 5px 0",
        "& svg": {
          backgroundColor: "black",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
        }
      }
    },
    "& .right_container": {}
  }
};
