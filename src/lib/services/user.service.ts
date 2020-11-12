import { userData, deckData } from './data';
import { Deck, Card } from '../interfaces/app.interface';

class UserService {
  getDecks(): Deck[] {
    return userData.deckIds.map((deckId: number) => getDeck(deckId));
  }

  getDeck(id: number): Deck {
    let deck: Deck = deckData[id];
    if(!deck) throw new Error(`Unable to find deck with ID ${id}`);

    return deck;
  }

  updateCard(newCard: Card): Card[] {
    return getDeck(newCard.deckId).cards.map(card => {
      if(card.id === newCard.id) return newCard;
      return card;
    });
  }

  addCard(deckId: number, content: string): Card[] {
    let deck = getDeck(deckId);
    deck.cards.push({id: 123, deckId: deckId, content: content});

    return deck.cards;
  }

  deleteCard(deckId: number, cardId: number): Card[] {
    let deck = getDeck(deckId);
    deck.cards = deck.cards.filter(card => card.id !== cardId);

    return deck.cards;
  }
}

const getDeck = (id => deckData[id]);

const instance = new UserService();
Object.freeze(instance);

export default instance;