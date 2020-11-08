import { Grid, makeStyles, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import Card from './Card';
import UserService from '../lib/services/user.service';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles({
  toolbar: {
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export default function Deck(props) {
  const classes = useStyles();
  const [cards, setCards] = useState(props.cards);

  const handleOnSave = (cardId, cardContent) => {
    UserService.saveCard(props.id, cardId, cardContent);
    setCards(cards.map(card => {
      if(card.id === cardId) card.content = cardContent;
      return card;
    }));
  };

  const handleOnAdd = (cardContent) => {

  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}><AddBoxIcon/></Toolbar>
      <Grid container spacing={3}>
        {props.cards.map(card =>
          <Grid key={card.id} item xs={12} sm={12} md={6} lg={4}>
            <Card {...card} onSave={handleOnSave} />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}