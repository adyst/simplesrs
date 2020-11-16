import React from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../api/user.service';
import { Deck as IDeck } from '../interfaces/deck.interface';
import Deck from '../components/Deck';

export default function DeckPage() {
  const { deckId } = useParams();
  const deck: IDeck = UserService.getDeck(deckId);

  return (
    <React.Fragment>
      <Deck {...deck}/>
    </React.Fragment>
  );
}