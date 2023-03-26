import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// A custom theme for this app
const theme = createTheme({
  breakpoints:{
    0: 'xs',
    xs: 0
  },
  palette: {
    mode: "light",
    primary: {
      main: red[500],
      light: red[50]
    },
    secondary: {
      main: '#00B7FF',
    },
    text: {
        primary: '#000000',
        secondary: '#f5efef',
        hint: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1:{
      fontSize: '1rem',
    }
  }
});

export default theme;