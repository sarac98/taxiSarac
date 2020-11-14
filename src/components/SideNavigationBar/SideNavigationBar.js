import React from 'react';
import { Link, BrowserRouter, withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import HomeIcon from '@material-ui/icons/Home';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import SecurityIcon from '@material-ui/icons/Security';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {ReactComponent as Logo} from '../../../src/logo.svg';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    links: {
      textDecoration: 'none',
      color: 'black'
      
  },
    toolbar: theme.mixins.toolbar,
    // necessary for content to be below app bar
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },

  }));
  const drawerWidth = 240;
  const  SideNavigationBar = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const drawer = (
      
        <div>
          
          <div className={classes.toolbar} />
        
          <Divider />
          <List>
            <Link to="/home"  className={classes.links}>
              <ListItem button onClick={()=> props.setMobileOpen(false)}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary={"Početna stranica"} />
              </ListItem>
              </Link>
              <Link to="/orders"  className={classes.links}>
              <ListItem  button onClick={()=> props.setMobileOpen(false)}>
                <ListItemIcon><LocalTaxiIcon/></ListItemIcon>
                <ListItemText primary={"Zakazivanje vožnje"} />
              </ListItem>
              </Link>
              <Link to="/admin"  className={classes.links}>
              <ListItem  button onClick={()=> props.setMobileOpen(false)}>
                <ListItemIcon><SecurityIcon/></ListItemIcon>
                <ListItemText primary={"Admin Panel"} />
              </ListItem>
              </Link>
            
          </List>
         
        </div>
      );
      const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    )
  } 
  export default withRouter(SideNavigationBar);