import { Grid, makeStyles, Toolbar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import Card from './Card';
import UserService from '../lib/services/user.service';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditCardDialog from './EditCardDialog';

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
  const [isAdding, setIsAdding] = useState(false);

  const handleOnSave = (cardId, content) => {
    setCards(UserService.saveCard(props.id, cardId, content));
  };

  const handleOnAdd = () => {
    setIsAdding(true);
  };

  const handleOnSaveAdd = (content: string) => {
    setCards(UserService.addCard(props.id, content));
    setIsAdding(false);
  };

  const handleOnClose = () => {
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={handleOnAdd}><AddBoxIcon/></IconButton>
      </Toolbar>
      <Grid container spacing={3}>
        {props.cards.map(card =>
          <Grid key={card.id} item xs={12} sm={12} md={6} lg={4}>
            <Card {...card} onSave={handleOnSave} />
          </Grid>
        )}
      </Grid>
      <EditCardDialog open={isAdding} onSave={handleOnSaveAdd} onClose={handleOnClose} defaultValue=""/>
    </React.Fragment>
  );
}