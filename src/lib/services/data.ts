import { User, Deck, Card } from './interfaces/app.interface';

//TODO: create and api that gets the nested menu structure for decks
//add parentId back to decks
const cards: Card[] = [
  {
    id: 1,
    front: "front text",
    back: "back text",
  }
];

const deckData: Deck[] = [
  {
    id: 1,
    name: "German",
    cards: cards
  },
  {
    id: 2,
    name: "Cooking",
    cards: cards
  },
  {
    id: 3,
    name: "Ingredients",
    cards: cards
  },
  {
    id: 4,
    name: "Vocabulary",
    cards: cards
  },
  {
    id: 5,
    name: "Phrases",
    cards: cards
  }
];

export const userData: User = {
  id: 1,
  decks: deckData
};
