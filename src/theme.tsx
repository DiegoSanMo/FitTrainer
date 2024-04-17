import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F7F3F6',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      "Poppins", "sans-serif"
    ].join(','),
  }
});