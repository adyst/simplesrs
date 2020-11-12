import React from 'react';
import { Card, Deck } from '../lib/interfaces/app.interface';
import UserService from '../lib/services/user.service';
import CardReview from '../components/CardReview';

export default function HomePage() {
  const decks: Deck[] = UserService.getDecks();

  const getCardsDueToday = (decks: Deck[]) => {
    let cards: Card[] = [];
    let now = new Date();

    decks.forEach(deck => {
      deck.cards.forEach(card => {
        let nextReviewDate = new Date(card.nextReviewDate);
        if(isNaN(nextReviewDate.getTime()) || nextReviewDate <= now) cards.push(card);
      });
    });

    return cards;
  };

  return (
    <React.Fragment>
      <CardReview cards={getCardsDueToday(decks)}/>
    </React.Fragment>
  );
}