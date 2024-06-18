import { SxProps, Theme } from "@mui/material";

export const iconStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    stroke: "black",
    width: "100%",
    height: "100%"
  }
};
