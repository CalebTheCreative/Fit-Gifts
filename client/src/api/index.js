import axios from 'axios';

const url = 'http://localhost:5000/clients';

export const fetchClients = () => axios.get(url);
export const createClient = (newClient) => axios.post(url, newClient);
export const likeClient = (id) => axios.patch(`${url}/${id}/likeClient`);
export const updateClient = (id, updatedClient) => axios.patch(`${url}/${id}`, updatedClient);
export const deleteClient = (id) => axios.delete(`${url}/${id}`);
