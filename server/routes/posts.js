import express from 'express';

import { getClients, getClient, createClient, updateClient, likeClient, deleteClient } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getClients);
router.post('/', createClient);
router.get('/:id', getClient);
router.patch('/:id', updateClient);
router.delete('/:id', deleteClient);
router.patch('/:id/likePost', likeClient);

export default router;