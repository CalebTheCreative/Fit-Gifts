import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deleteClient } from '../../../actions/clients';
import useStyles from './styles';

const Client = ({ client, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={client.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={client.clientName} />
      <div className={classes.overlay}>
        <Typography variant="h6">{client.clientName}</Typography>
        <Typography variant="body2">{moment(client.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(client._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{client.phone}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(client._id))}><ThumbUpAltIcon fontSize="small" /> Like {client.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteClient(client._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Client;
