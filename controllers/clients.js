import express from 'express';
import mongoose from 'mongoose';

import Client from '../models/Client.js';

const router = express.Router();

export const getClients = async (req, res) => {
	try {
		const postClients = await Client.find();

		res.status(200).json(postClients);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getClient = async (req, res) => {
	const { id } = req.params;

	try {
		const client = await Client.findById(id);

		res.status(200).json(client);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createClient = async (req, res) => {
	const { phone, selectedFile, clientName } = req.body;

	const newClient = new Client({ phone, selectedFile, clientName });

	try {
		await newClient.save();

		res.status(201).json(newClient);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateClient = async (req, res) => {
	const { id } = req.params;
	const { phone, clientName, selectedFile } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No client with id: ${id}`);

	const updatedClient = { clientName, phone, selectedFile, _id: id };

	await Client.findByIdAndUpdate(id, updatedClient, { new: true });

	res.json(updatedClient);
};

export const deleteClient = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No client with id: ${id}`);

	await Client.findByIdAndRemove(id);

	res.json({ message: 'Client deleted successfully.' });
};

export const likeClient = async (req, res) => {
	const { id } = req.params;

	if (!req.userId) return res.json({ message: 'Unauthenticated' });

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No client with id: ${id}`);

	const client = await Client.findById(id);

	const index = client.likes.findIndex((id) => id === String(req.userId));

	if (index === -1) {
		client.likes.push(req.userId);
	} else {
		client.likes.filter((id) => id !== String(req.userId));
	}

	const updatedClient = await Client.findByIdAndUpdate(id, client, { new: true });

	res.json(updatedClient);
};

export default router;
