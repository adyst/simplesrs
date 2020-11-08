import { userData, deckData } from './data';
import { Deck, Card } from '../interfaces/app.interface';

class UserService {
  getDecks(): Deck[] {
    return userData.deckIds.map((deckId: number) => getDeck(deckId));
  }

  getDeck(id: number): Deck {
    return deckData[id];
  }

  saveCard(deckId: number, cardId: number, content: string) {
    let deck: Deck = getDeck(deckId);
    if(!deck) throw new Error(`Unable to find deck with ID ${deckId}`);

    let card: Card = deck.cards.find(card => card.id == cardId);
    if(!card) throw new Error(`Unable to find card ID ${cardId} in deck ${deck.name}`);

    console.log("saved card");

    card.content = content;
  }
}

const getDeck = (id => deckData[id]);

const instance = new UserService();
Object.freeze(instance);

export default instance;