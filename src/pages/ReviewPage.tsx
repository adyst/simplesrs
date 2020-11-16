import React from 'react';
import { ReviewCard, Deck } from '../interfaces/deck.interface';
import UserService from '../api/user.service';
import CardReview from '../components/CardReview';

export default function ReviewPage() {
  const decks: Deck[] = UserService.getDecks();

  const getCardsDueToday = (decks: Deck[]) => {
    let cards: ReviewCard[] = [];
    let now = new Date();

    decks.forEach(deck => {
      deck.cards.forEach(card => {
        let nextReviewDate: Date = new Date(card.nextReviewDate);

        if(isNaN(nextReviewDate.getTime()) || nextReviewDate <= now) {
            cards.push({
              deckId: deck.id,
              card: card
            });
        }
      });
    });

    return cards;
  };

  return (
    <>
      <CardReview cards={getCardsDueToday(decks)}/>
    </>
  )
}