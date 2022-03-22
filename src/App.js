import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import NavBar from "./components/NavBar";

const useStyles = makeStyles({
  container: {},
  outlet: {
    display: 'flex',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes?.container}>
      <NavBar />
      <div className={classes?.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
