import express from 'express';

import { getClients, getClient, createClient, updateClient, likeClient, deleteClient } from '../controllers/clients';
import auth from '../middleware/auth';

const router = express.Router();

//      /api/clients/
router.get('/', getClients);
router.post('/', auth, createClient);

//      /api/clients/:id
router.get('/:id', getClient);
router.patch('/:id', auth, updateClient);
router.delete('/:id', auth, deleteClient);

//      /api/clients/:id/likeClient
router.patch('/:id/likeClient', auth, likeClient);

export default router;
