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
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          hover: {
            color: 'red',
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'caption' },
          style: {
            fontSize: '10px',
            fontFamily: 'Open Sans, Arial, sans-serif',
          },
        },
      ],
    },
  },
});

export { theme };
