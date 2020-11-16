import { IconButton, LinearProgress } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import React, { useState } from 'react';
import UserService from '../api/user.service';
import { ReviewCard } from '../interfaces/deck.interface';
import Card from './Card';

interface CardReviewProps {
  cards: ReviewCard[];
}

export default function CardReview(props: CardReviewProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const advanceProgress = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };

  const progress = () => {
    return ((currentCardIndex + 1)/props.cards.length) * 100; 
  };

  const onForget = () => {
    advanceProgress();
    let reviewCard = props.cards[currentCardIndex];
    let newCard = {...reviewCard.card, lastReviewDate: new Date(), nextReviewDate: new Date(Date.now() + 5)}
    UserService.updateCard(reviewCard.deckId, newCard);
  };  

  const onRemember = () => {
    advanceProgress();
    //TODO: change date
  };
  
  const currentCard = props.cards[currentCardIndex].card;

  const reviewInProgress = () => {
    return(
      <>
        <LinearProgress variant="determinate" value={progress()}/>
        <Card data={currentCard} onSave={e => console.log("Save")} onDelete={e => console.log("Delete")}/>
        <IconButton onClick={onRemember}><CheckIcon/></IconButton>
        <IconButton onClick={onForget}><ClearIcon/></IconButton>
      </>
    );
  };

  const reviewDone = () => {
    return(
      <>
        Done with review
      </>
    );
  };

  return(
    <React.Fragment>
      {progress() < 100 ? reviewInProgress() : reviewDone()}
    </React.Fragment>
  );
}