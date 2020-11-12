export interface User {
  id: number;
  name: string;
  deckIds: number[]
}

export interface Deck {
  id: number;
  name: string;
  users?: UserRole[];
  parentId: number | null;
  childrenIds?: number[];
  cards: Card[];
}

export interface Card {
  id: number;
  deckId: number;
  content: string;
  lastReviewDate?: Date;
  nextReviewDate?: Date;
}

export interface UserRole {
  userId: number;
  role: Role;
}

export enum Role {
  OWNER,
  EDITOR,
  VIEWER
}


