import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemProps, ListItemText, makeStyles, Typography } from '@material-ui/core';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../lib/services/user.service';

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
  }
}));

interface ListItemLinkProps extends ListItemProps {
  to: string
}

const ListItemLink: React.FunctionComponent<ListItemLinkProps> = (props: { to: string }) => {
  return <ListItem button component={Link} {...props} />
};

export default function Sidebar() {
  const classes = useStyles();

  return (
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
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Due Today" />
        </ListItemLink>
      </List>

      <Divider />

      <List>
        {UserService.getDecks().map(deck =>
          <ListItemLink key={deck.id} to={`/${deck.id}`}>
            <ListItemIcon><HorizontalSplitIcon /></ListItemIcon>
            <ListItemText primary={deck.name} />
          </ListItemLink>
        )}
      </List>

      <Divider />

      <List>
        <ListItemLink to="/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemLink>
      </List>
    </Drawer>
  );
}