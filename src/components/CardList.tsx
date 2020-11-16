import { Grid } from '@material-ui/core';
import Card from './Card';
import { Card as ICard } from '../interfaces/deck.interface';
import React from 'react';
import CardAddButton from './CardAddButton';

interface CardListProps {
  cards: ICard[];
  onAdd: any;
  onSave: any;
  onDelete: any;
}

export default function CardList(props: CardListProps) {
  return (
    <Grid container spacing={3} >
       <Grid item xs={12} md={6} lg={4} xl={3}>
        <CardAddButton onAdd={props.onAdd}/>
      </Grid>
      {props.cards.map(card => 
        <Grid key={card.id} item xs={12} md={6} lg={4} xl={3}>
          <Card data={card} onSave={props.onSave} onDelete={props.onDelete}/>
        </Grid>   
      )}
    </Grid>
  );
}