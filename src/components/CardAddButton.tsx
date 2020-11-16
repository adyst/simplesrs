import { makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '200px',
    border: '1px dotted grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    '& svg': {
      fill: 'grey'
    },
    '&:hover': {
      backgroundColor: '#0000001c'
    }
  }
});

interface CardAddButtonProps {
  onAdd: any;
}

export default function CardAddButton(props: CardAddButtonProps) {
  const classes = useStyles();

  return(
    <div id="add-card-button" className={classes.root} onClick={props.onAdd}>
      <AddIcon/>
    </div>
  );
}