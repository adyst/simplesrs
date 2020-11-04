import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {makeStyles, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse} from '@material-ui/core';
import { AccountCircle, ExpandMore, ExpandLess } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import SettingsIcon from '@material-ui/icons/Settings';
import HomePage from './HomePage';
import DeckPage from './DeckPage';
import SettingsPage from './SettingsPage';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
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
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListItemLink = (props) => {
  return <ListItem button component={Link} {...props}/>
};

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
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
          <ListItemLink to="/">
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="Due Today"/>
          </ListItemLink>
        </List>

        <Divider/>

        <List>
          <ListItemLink to="/123" onClick={handleClick}>
            <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
            <ListItemText primary="Language Deck"/>
            {open ? <ExpandLess/> : <ExpandMore/>}
          </ListItemLink>
          <Collapse in={open}>
            <List>
              <ListItemLink to="/123789" className={classes.nested}>
                <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
                <ListItemText primary="Vocabulary"/>
              </ListItemLink>
              <ListItemLink to="/12345" className={classes.nested}>
                <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
                <ListItemText primary="Phrases"/>
              </ListItemLink>
            </List>
          </Collapse>
          <ListItemLink to="/456">
            <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
            <ListItemText primary="Study Deck"/>
          </ListItemLink>
          <ListItemLink to="/789">
            <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
            <ListItemText primary="Random Deck"/>
          </ListItemLink>
        </List>

        <Divider/>
          
        <List>
          <ListItemLink to="/settings">
            <ListItemIcon><SettingsIcon/></ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemLink>
        </List>
      </Drawer>
      <main>
        <Toolbar/>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/settings"><SettingsPage/></Route>
          <Route path="/:deckId"><DeckPage/></Route>
        </Switch>
      </main>
    </div>
  )
};