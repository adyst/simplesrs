export interface User {
  id: number;
  decks: Deck[]
}

export interface Deck {
  id: number;
  name: string;
  ownerId?: number;
  viewerIds?: number[];
  childDecks?: Deck[];
  cards: Card[];
}

export interface Card {
  id: number;
  front: string;
  back: string;
  lastReviewDate?: Date;
  nextReviewDate?: Date;
}



