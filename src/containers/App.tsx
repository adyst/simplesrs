import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DeckPage from './DeckPage';
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import UserService from '../lib/services/user.service';

const useStyles = makeStyles({
  root: {
    display: 'flex', 
    '& main': {
      width: '100%'
    }
  }
});

const DynamicDeckBreadcrumb = ({ match }) => UserService.getDeck(match.params.deckId).name;

const routes = [
  { path: '/settings', breadcrumb: 'Settings' },
  { path: '/:deckId', breadcrumb: DynamicDeckBreadcrumb }
];

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar/>
      <main>
        <Container>
          <Breadcrumb routes={routes}/>
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