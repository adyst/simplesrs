import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Deck from './Deck';

export default function DeckPage() {
  const { deckId } = useParams();

  return (
    <React.Fragment>
      This is #{deckId}
    </React.Fragment>
  );
}