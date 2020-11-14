import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//Material UI components
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//My Components
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideNavigationBar from '../../components/SideNavigationBar/SideNavigationBar';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import Orders from '../Orders/Orders';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {

      flexShrink: 0,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {

  },
  content: {
    flexGrow: 1,
    width:'90%',
    padding: theme.spacing(3),
  },
}));

export default Main; function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavigationBar handleDrawerToggle={handleDrawerToggle} />
      <SideNavigationBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/orders" component={Orders} exact />
          <Route path="/admin" component={Admin} exact />

        </Switch>

      </main>
    </div>
  );
}
