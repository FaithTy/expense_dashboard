
import { makeStyles } from '@mui/styles';

import Home from './components/Home';
import Sidebar from './components/Sidebar';
import User from './components/User';


const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex'
  },
});

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Sidebar />
      <Home />
      <User />
    </div>
  )
}

export default App;
