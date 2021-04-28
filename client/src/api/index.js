import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
// 	if (localStorage.getItem('profile')) {
// 		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
// 	}
// 	return req;
// });

export const fetchClients = () => API.get('/clients');
export const createClient = (newClient) => API.post('/clients', newClient);
export const likeClient = (id) => API.patch(`/clients/${id}/likeClient`);
export const updateClient = (id, updatedClient) => API.patch(`clients/${id}`, updatedClient);
export const deleteClient = (id) => API.delete(`/clients/${id}`);

export const logIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
