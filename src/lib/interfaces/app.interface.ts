export interface User {
  id: number;
  name: string;
  deckIds: number[]
}

export interface Deck {
  id: number;
  name: string;
  ownerId: number;
  viewerIds?: number[];
  childDecks?: Deck[];
  cards: Card[];
}

export interface Card {
  id: number;
  content: string;
  lastReviewDate?: Date;
  nextReviewDate?: Date;
}



