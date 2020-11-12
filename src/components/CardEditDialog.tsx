import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, IconButton, makeStyles, TextareaAutosize } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
  dialogContent: {
    minHeight: '50px',
    '& textarea': {
      width: '100%',
      border: 'none',
      resize: 'none'
    },
    '& textarea:focus': {
      outline: 'none'
    }
  },
  dialogFooter: {
    backgroundColor: '#0000001c'
  }
});

interface EditCardDialogProps {
  open: boolean,
  onSave(value: string): any,
  onDelete?(): any,
  onClose(): any,
  defaultValue: string
}

export default function CardEditDialog(props: EditCardDialogProps) {
  const classes = useStyles();
  const [value, setValue] = useState(props.defaultValue);
  
  const handleOnChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleOnSave = () => {
    props.onSave(value);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth='sm'
      open={props.open}
      onClose={props.onClose}>
      <DialogContent className={classes.dialogContent}>
        <TextareaAutosize autoFocus defaultValue={props.defaultValue} onChange={handleOnChange} placeholder="Enter..." />
      </DialogContent>
      <DialogActions className={classes.dialogFooter}>
        {props.onDelete ? <IconButton onClick={props.onDelete}><DeleteIcon/></IconButton> : ""}
        <IconButton onClick={props.onClose}><CancelIcon/></IconButton>
        <IconButton onClick={handleOnSave}><SaveIcon/></IconButton>
      </DialogActions>
    </Dialog>
  );
}