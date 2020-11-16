import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemProps, ListItemSecondaryAction, ListItemText, ListItemTextProps, makeStyles, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../api/user.service';
import { Deck } from '../interfaces/deck.interface';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
  listLink: {
    flexGrow: 1
  },
  expandButton: {
    padding: 0
  } 
}));

interface ListItemLinkProps extends ListItemProps {
  to: string
}

export default function Sidebar() {
  const decks = UserService.getDecks();
  let initOpenState = decks.reduce((state, deck) => {
    if(deck.childrenIds) state[deck.name + deck.id] = false;
    return state;
  }, {});

  const classes = useStyles();
  const [openState, setOpenState] = useState(initOpenState);

  const handleOnClick = (key) => {
    setOpenState(prevState => ({...prevState, [key]: !openState[key]}));
  };

  const ListItemLink: React.FunctionComponent<ListItemLinkProps> = (props: { to: string }) => {
    return <ListItem button component={Link} {...props} />
  };
  
  //TODO: change the onClick handler to not create an anonymous function:
  //ex: https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  const getDeckLinks = (deck: Deck) => {
    let openKey = deck.name + deck.id;
    return (
      <span key={deck.id}>
        <ListItemLink to={`/${deck.id}`}>
          <ListItemIcon><HorizontalSplitIcon/></ListItemIcon>
          <ListItemText primary={deck.name}/>
          {deck.childrenIds ? getExpandIcon(openKey) : ""}
        </ListItemLink>
        {deck.childrenIds ? getCollapse(deck, openKey) : ""}
      </span>
    );
  };
  
  const getExpandIcon = (openKey: string) => {
    return (
      <ListItemSecondaryAction>
        <IconButton onClick={e => handleOnClick(openKey)} className={classes.expandButton}>
          {openState[openKey] ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItemSecondaryAction>
    );
  };
  
  const getCollapse = (deck: Deck, openKey: string) => {
    return (
      <Collapse in={openState[openKey]}>
        <List dense={true} className={classes.nested}>
          {deck.childrenIds.map(childId => getDeckLinks(UserService.getDeck(childId)))}
        </List>
      </Collapse>
    )
  };

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}>

      <List dense={true}>
        <ListItem>
          <Typography variant="h6">Simple SRS</Typography>
        </ListItem>
        <ListItemLink to="/">
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Due Today"/>
        </ListItemLink>
      </List>

      <Divider />

      <List dense={true}>
        {decks.filter(deck => deck.parentId === null).map(deck => getDeckLinks(deck))}
      </List>

      <Divider />

      <List dense={true}>
        <ListItemLink to="/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemLink>
      </List>
    </Drawer>
  );
}