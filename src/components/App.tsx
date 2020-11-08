import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {makeStyles, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemProps, ListItemIcon, ListItemText, Divider, Collapse, Container} from '@material-ui/core';
import { AccountCircle, ExpandMore, ExpandLess } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import SettingsIcon from '@material-ui/icons/Settings';
import HomePage from './HomePage';
import DeckPage from './DeckPage';
import SettingsPage from './SettingsPage';
import UserService from '../lib/services/user.service'
import { Deck } from '../lib/interfaces/app.interface';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    '& main': {
      width: '100%'
    }
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
  container: {
  }
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
      <Drawer 
        variant="permanent" 
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}>

        <List>
          <ListItem>
            <Typography variant="h6">Simple SRS</Typography>
          </ListItem>
          <ListItemLink to="/">
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="Due Today"/>
          </ListItemLink>
        </List>

        <Divider/>

        <List>
          {UserService.getDecks().map(deck => 
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
        <Container className={classes.container}>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/settings"><SettingsPage/></Route>
            <Route path="/:deckId"><DeckPage/></Route>
          </Switch>
        </Container>
      </main>
    </div>
  )
};