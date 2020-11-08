import React, { useState } from 'react';
import { Typography, Card as MuiCard, CardContent, CardHeader, CardActions, Button, IconButton, makeStyles, Dialog, DialogContent, DialogActions, TextareaAutosize } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import marked from 'marked';

//TODO: finesse the position of the context menu
const useStyles = makeStyles({
  root: {
    position: 'relative'
  },
  cardHeader: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 0
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
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

export default function Card(props) {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(props.content);

  const handleOnEdit = () => {
    setIsEditing(true);
  };

  const handleOnChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const handleOnSave = (e) => {
    props.onSave(props.id, content);
    setIsEditing(false);
  };

  const handleOnClose = () => {
    setIsEditing(false);
  };

  const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US').format(date);

  const renderText = (text: string) => ({__html: marked(text)});

  return (
    <React.Fragment>
      <MuiCard className={classes.root}>
        <CardHeader
          className={classes.cardHeader}
          action={
            <IconButton aria-label="settings" onClick={handleOnEdit}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <div dangerouslySetInnerHTML={renderText(props.content)}/>
        </CardContent>
        <CardActions>
          <Typography variant="caption" className={classes.wrapIcon}>
            {props.lastReviewDate
              ? <AutorenewIcon fontSize="small" />
              : <FiberNewIcon fontSize="small" />}
          </Typography>
        </CardActions>
      </MuiCard>

      <Dialog
        fullWidth={true}
        maxWidth='sm'
        onClose={handleOnClose}
        open={isEditing}>
        <DialogContent className={classes.dialogContent}>
          <TextareaAutosize autoFocus defaultValue={content} onChange={handleOnChange} placeholder="Enter..."/>
        </DialogContent>
        <DialogActions className={classes.dialogFooter}>
          <Button>Close</Button>
          <Button onClick={handleOnSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}