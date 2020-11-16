import { Deck, Card } from '../interfaces/deck.interface';
import { User } from '../interfaces/user.interface';

const cards: Card[] = [
  {
    id: 1,
    content: "front text",
    lastReviewDate: new Date('December 16, 1995 03:24:00'),
    nextReviewDate: new Date('December 17, 1995 03:24:00')
  },
  {
    id: 2,
    content: "# heading",
  },
  {
    id: 3,
    content: "front --- back",
  }
];

export const deckData = {
  "1": {
    id: 1,
    ownerId: 1,
    name: "German",
    parentId: null,
    childrenIds: [4, 5],
    cards: cards
  },
  "2": {
    id: 2,
    ownerId: 1,
    name: "Cooking",
    parentId: null,
    childrenIds: [3],
    cards: cards
  },
  "3": {
    id: 3,
    ownerId: 1,
    name: "Ingredients",
    parentId: 2,
    cards: cards
  },
  "4": {
    id: 4,
    ownerId: 1,
    name: "Vocabulary",
    parentId: 1,
    childrenIds: [6],
    cards: cards
  },
  "5": {
    id: 5,
    ownerId: 1,
    name: "Phrases",
    parentId: 1,
    cards: cards
  },
  "6": {
    id: 6,
    ownerId: 1,
    name: "Work",
    parentId: 4,
    cards: cards
  }
};

export const userData: User = {
  id: 1,
  name: "Araceli",
  deckIds: [1, 2, 3, 4, 5]
};
