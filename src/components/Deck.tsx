import { Grid, makeStyles, Toolbar, IconButton, Button } from '@material-ui/core';
import React, { useState } from 'react';
import Card from './Card';
import UserService from '../api/user.service';
import AddBoxIcon from '@material-ui/icons/AddBox';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CardEditDialog from './CardEditDialog';
import { Deck } from '../interfaces/deck.interface';
import CardAddButton from './CardAddButton';
import CardList from './CardList';

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
    UserService.updateCard(props.id, card);
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
    <>
      <CardList cards={cards} onAdd={handleOnAdd} onSave={handleOnSave} onDelete={handleOnDelete}/>
      <CardEditDialog open={isAdding} onSave={handleOnSaveAdd} onClose={handleOnClose} defaultValue=""/>
    </>
  );
}