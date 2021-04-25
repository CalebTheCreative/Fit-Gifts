import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createClient, updateClient } from '../../actions/clients';

const Form = ({ currentId, setCurrentId }) => {
  const [clientData, setClientData] = useState({ clientName: '', phone: '', selectedFile: '' });
  const client = useSelector((state) => (currentId ? state.clients.find((client) => client._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (client) setClientData(client);
  }, [client]);

  const clear = () => {
    setCurrentId(0);
    setClientData({ clientName: '', phone: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createClient(clientData));
      clear();
    } else {
      dispatch(updateClient(currentId, clientData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${client.phone}"` : 'Add a Client'}</Typography>
        <TextField name="clientName" variant="outlined" label="Client's Name" fullWidth value={clientData.clientName} onChange={(e) => setClientData({ ...clientData, clientName: e.target.value })} />
        <TextField name="phone" variant="outlined" label="Phone" fullWidth value={clientData.phone} onChange={(e) => setClientData({ ...clientData, phone: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setClientData({ ...clientData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
