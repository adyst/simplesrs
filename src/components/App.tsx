import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {makeStyles, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemProps, ListItemIcon, ListItemText, Divider, Collapse} from '@material-ui/core';
import { AccountCircle, ExpandMore, ExpandLess } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import SettingsIcon from '@material-ui/icons/Settings';
import HomePage from './HomePage';
import DeckPage from './DeckPage';
import SettingsPage from './SettingsPage';
import { userData } from '../lib/services/data';
import { Deck } from '../lib/interfaces/app.interface';

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

interface ListItemLinkProps extends ListItemProps {
  to: string
}

const ListItemLink: React.FunctionComponent<ListItemLinkProps> = (props: { to: string }) => {
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
          {userData.decks.map(deck => 
            <ListItemLink key={deck.id} to={`/${deck.id}`}>
              <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
              <ListItemText primary={deck.name}/>
            </ListItemLink>
          )}
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