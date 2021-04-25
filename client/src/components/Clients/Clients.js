import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Client from './Client/Client';
import useStyles from './styles';

const Clients = ({ setCurrentId }) => {
  const clients = useSelector((state) => state.clients);
  const classes = useStyles();

  return (
    !clients.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {clients.map((client) => (
          <Grid key={client._id} item xs={12} sm={6} md={6}>
            <Client client={client} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Clients;
