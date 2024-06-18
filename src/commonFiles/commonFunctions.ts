import { SxProps, Theme } from '@mui/material'

export const generateListFromNumber = (number: number): number[] => {
  if (!isNaN(number) && number > 0) {
    return Array.from({ length: number }, (_, i) => i + 1);
  }
  return [];
};
export const splitStyles = (
  extStyle?: SxProps<Theme>,
  defStyle?: SxProps<Theme>
): SxProps<Theme> => {
  return {
    ...defStyle,
    ...extStyle
  } as SxProps<Theme>;
};