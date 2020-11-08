import { User, Deck, Card } from '../interfaces/app.interface';

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
    cards: cards
  },
  "2": {
    id: 2,
    ownerId: 2,
    name: "Cooking",
    cards: cards
  },
  "3": {
    id: 3,
    ownerId: 2,
    name: "Ingredients",
    cards: cards
  },
  "4": {
    id: 4,
    ownerId: 1,
    name: "Vocabulary",
    cards: cards
  },
  "5": {
    id: 5,
    ownerId: 1,
    name: "Phrases",
    cards: cards
  }
};

export const userData: User = {
  id: 1,
  name: "Araceli",
  deckIds: [1, 4, 5]
};
