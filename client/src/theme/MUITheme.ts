import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },

  },
  components: {MuiTabs: {
    styleOverrides: {
      root: {
        hover: {
          color: 'red'

        }
      }
    }
  }}
});

export { theme };
