import express from 'express';

import { getClients, getClient, createClient, updateClient, likeClient, deleteClient } from '../controllers/clients.js';

const router = express.Router();

//      /api/clients/
router.get('/', getClients);
router.post('/', createClient);

//      /api/clients/:id
router.get('/:id', getClient);
router.patch('/:id', updateClient);
router.delete('/:id', deleteClient);

//      /api/clients/:id/likePost
router.patch('/:id/likePost', likeClient);

export default router;