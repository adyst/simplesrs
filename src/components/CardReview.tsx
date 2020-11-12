import React, { useState } from 'react';
import { Button, IconButton, LinearProgress } from '@material-ui/core';
import { Card as ICard } from '../interfaces/app.interface';
import Card from './Card';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import UserService from '../api/user.service';

interface CardReviewProps {
  cards: ICard[];
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
    let newCard = {...props.cards[currentCardIndex], lastReviewDate: new Date(), nextReviewDate: new Date(Date.now() + 5)}
    UserService.updateCard(newCard);
  };  

  const onRemember = () => {
    advanceProgress();
    //TODO: change date
  };

  const reviewInProgress = () => {
    return(
      <>
        <LinearProgress variant="determinate" value={progress()}/>
        <Card card={props.cards[currentCardIndex]} onSave={e => console.log("Save")} onDelete={e => console.log("Delete")}/>
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