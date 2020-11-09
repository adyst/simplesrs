import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, makeStyles, TextareaAutosize } from '@material-ui/core';

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

export default function EditCardDialog(props: EditCardDialogProps) {
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
        {props.onDelete ? <Button onClick={props.onDelete}>Delete</Button> : ""}
        <Button onClick={props.onClose}>Close</Button>
        <Button onClick={handleOnSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}