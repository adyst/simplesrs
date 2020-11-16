import { Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import DeckPage from './pages/DeckPage';
import ReviewPage from './pages/ReviewPage';
import SettingsPage from './pages/SettingsPage';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import UserService from './api/user.service';

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
            <Route exact path="/"><ReviewPage/></Route>
            <Route exact path="/settings"><SettingsPage/></Route>
            <Route path="/:deckId"><DeckPage/></Route>
          </Switch>
        </Container>
      </main>
    </div>
  )
};