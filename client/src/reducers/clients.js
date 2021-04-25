/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (clients = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return clients.map((client) => (client._id === action.payload._id ? action.payload : client));
    case CREATE:
      return [...clients, action.payload];
    case UPDATE:
      return clients.map((client) => (client._id === action.payload._id ? action.payload : client));
    case DELETE:
      return clients.filter((client) => client._id !== action.payload);
    default:
      return clients;
  }
};

