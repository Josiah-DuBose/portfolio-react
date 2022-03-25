import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#41c1ba',
    },
    secondary: {
      main: '#6c9286',
    },
    background: {
      default: '#f7f7f7',
    },
    info: {
      main: '#289dd2',
    },
    dark: {
      main: '#365B6D',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', width: '99vw' }}>
        <NavBar />
        <div style={{ height: '90vh', width: '99vw' }}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
