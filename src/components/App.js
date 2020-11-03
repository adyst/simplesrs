import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {makeStyles, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import { AccountCircle, ExpandMore } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Simple SRS
          </Typography>
          <IconButton>
            <AccountCircle/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="permanent" 
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar/>
        <List>
          <ListItem button>
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="Due Today"/>
          </ListItem>
        </List>
        <Divider/>
        <List>
          <ListItem button>
            <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
            <ListItemText primary="Language Deck"/>
            <ExpandMore/>
          </ListItem>
          <ListItem button>
            <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
            <ListItemText primary="Study Deck"/>
          </ListItem>
          <ListItem button>
            <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
            <ListItemText primary="Random Deck"/>
          </ListItem>
        </List>
      </Drawer>
      <main>
        <Toolbar/>
        Main content
      </main>
    </div>
  )
};