import { Grid, makeStyles, Toolbar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import Card from './Card';
import UserService from '../api/user.service';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CardEditDialog from './CardEditDialog';
import { Deck } from '../interfaces/app.interface';

const useStyles = makeStyles({
  toolbar: {
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export default function Deck(props: Deck) {
  const classes = useStyles();
  const [cards, setCards] = useState(props.cards);
  const [isAdding, setIsAdding] = useState(false);

  const handleOnSave = (card) => {
    setCards(UserService.updateCard(card));
  };

  const handleOnAdd = () => {
    setIsAdding(true);
  };

  const handleOnSaveAdd = (content: string) => {
    setCards(UserService.addCard(props.id, content));
    setIsAdding(false);
  };

  const handleOnDelete = (id: number) => {
    setCards(UserService.deleteCard(props.id, id));
  }

  const handleOnClose = () => {
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={handleOnAdd}><AddBoxIcon/></IconButton>
      </Toolbar>
      <Grid container spacing={3}>
        {cards.map(card =>
          <Grid key={card.id} item xs={12} sm={12} md={6} lg={4}>
            <Card card={card} onSave={handleOnSave} onDelete={handleOnDelete}/>
          </Grid>
        )}
      </Grid>
      <CardEditDialog open={isAdding} onSave={handleOnSaveAdd} onClose={handleOnClose} defaultValue=""/>
    </React.Fragment>
  );
}