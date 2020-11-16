export interface Deck {
  id: number;
  name: string;
  ownerId: number;
  parentId: number | null;
  childrenIds?: number[];
  cards: Card[];
}

export interface Card {
  id: number;
  content: string;
  lastReviewDate?: Date;
  nextReviewDate?: Date;
}

export interface ReviewCard {
  card: Card;
  deckId: number;
}