import { createTheme } from '@mui/material/styles';

export const ButtonTheme = createTheme({
  palette: {
    gray: {
      main: '#47525E',
      contrastText: '#fff',
    }
  },
});

export const theme = createTheme({
  palette: {
    gray: {
      main: '#3B4252',
      contrastText: '#fff',
    },
    white: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#A8D5FF',
      contrastText: '#000',
    }
  },
})